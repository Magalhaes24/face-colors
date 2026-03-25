// ── Colour math helpers ────────────────────────────────────────────────────

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

// ── Analyse a palette colour's intrinsic profile ───────────────────────────
// Returns: warmth (0=cool, 1=warm), depth (0=light, 1=dark), saturation (0-1)

function analyzeColorProfile(hex) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);

  let warmth;
  if (s < 12) {
    // Near-neutral/grey — warmth from R vs B bias
    warmth = Math.min(1, Math.max(0, 0.5 + (r - b) / 130));
  } else if (h >= 330 || h < 35)  warmth = 0.90; // reds
  else if (h >= 35  && h < 75)    warmth = 0.82; // oranges / yellows
  else if (h >= 75  && h < 105)   warmth = 0.62; // yellow-greens
  else if (h >= 105 && h < 155)   warmth = 0.42; // greens (neutral-cool)
  else if (h >= 155 && h < 198)   warmth = 0.22; // blue-greens / teals (up to ~cyan-blue boundary)
  else if (h >= 198 && h < 280)   warmth = 0.10; // blues / blue-purples (clearly cool)
  else if (h >= 280 && h < 330)   warmth = 0.30; // purples / mauves
  else warmth = 0.50;

  return { warmth, depth: 1 - l / 100, saturation: s / 100, hue: h };
}

// ── Image sampling: extract skin & hair profile ────────────────────────────

export function analyzeImage(imgElement) {
  const canvas = document.createElement('canvas');
  const S = 256;
  canvas.width = S;
  canvas.height = S;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(imgElement, 0, 0, S, S);

  // Face region: centre column, upper-mid (where face typically sits)
  const fx = Math.round(S * 0.20), fy = Math.round(S * 0.15);
  const fw = Math.round(S * 0.60), fh = Math.round(S * 0.52);
  const fd = ctx.getImageData(fx, fy, fw, fh).data;

  // Hair region: top strip
  const hx = Math.round(S * 0.22), hy = 0;
  const hw = Math.round(S * 0.56), hh = Math.round(S * 0.20);
  const hd = ctx.getImageData(hx, hy, hw, hh).data;

  // ── Skin tone sampling ─────────────────────────────────────────
  let sR = 0, sG = 0, sB = 0, sN = 0;
  for (let i = 0; i < fd.length; i += 4) {
    const r = fd[i], g = fd[i+1], b = fd[i+2];
    const lum = r * 0.299 + g * 0.587 + b * 0.114;
    // Exclude very dark (hair/shadows) and very bright (highlights)
    if (lum < 45 || lum > 230) continue;
    // Skin heuristic: R ≥ G ≥ B with warm bias
    if (r >= b * 0.65 && g >= b * 0.55) {
      sR += r; sG += g; sB += b; sN++;
    }
  }
  // Fallback: no skin filter, just brightness range
  if (sN < 80) {
    sR = sG = sB = sN = 0;
    for (let i = 0; i < fd.length; i += 4) {
      const r = fd[i], g = fd[i+1], b = fd[i+2];
      const lum = r * 0.299 + g * 0.587 + b * 0.114;
      if (lum >= 40 && lum <= 230) { sR += r; sG += g; sB += b; sN++; }
    }
  }
  const avgSR = sN ? sR / sN : 160;
  const avgSG = sN ? sG / sN : 120;
  const avgSB = sN ? sB / sN : 95;

  // ── Hair sampling ──────────────────────────────────────────────
  let hR = 0, hG = 0, hB = 0, hN = 0;
  for (let i = 0; i < hd.length; i += 4) {
    const r = hd[i], g = hd[i+1], b = hd[i+2];
    const lum = r * 0.299 + g * 0.587 + b * 0.114;
    if (lum >= 12 && lum <= 215) { hR += r; hG += g; hB += b; hN++; }
  }
  const avgHR = hN ? hR / hN : 40;
  const avgHG = hN ? hG / hN : 30;
  const avgHB = hN ? hB / hN : 25;

  // ── Profile metrics ────────────────────────────────────────────

  // Undertone: warm signal = (R - B) + 0.4*(G - B)
  // Typical warm skin: signal ≈ +40–90  |  cool skin: signal ≈ -10–+20
  const undertoneSignal = (avgSR - avgSB) + 0.4 * (avgSG - avgSB);
  const undertone = Math.min(1, Math.max(0, (undertoneSignal + 50) / 150));

  // Depth: inverse of skin brightness normalised
  const skinLum = (avgSR * 0.299 + avgSG * 0.587 + avgSB * 0.114) / 255;
  const depth = Math.min(1, Math.max(0, 1 - skinLum));

  // Contrast: brightness gap between skin and hair
  const hairLum = (avgHR * 0.299 + avgHG * 0.587 + avgHB * 0.114) / 255;
  const contrast = Math.min(1, Math.max(0, Math.abs(skinLum - hairLum)));

  return {
    undertone,    // 0 = cool,  1 = warm
    depth,        // 0 = light, 1 = deep
    contrast,     // 0 = low,   1 = high
    skinHex: rgbToHex(avgSR, avgSG, avgSB),
    hairHex: rgbToHex(avgHR, avgHG, avgHB),
  };
}

// ── Fit score calculation ──────────────────────────────────────────────────

export function calculateFitScore(colorHex, profile) {
  const c = analyzeColorProfile(colorHex);
  const { undertone: pU, depth: pD } = profile;

  // 1. Undertone harmony (0-100)
  //    Deep colours get partial forgiveness — depth can override mild undertone tension
  const undertoneGap = Math.abs(pU - c.warmth);
  const deepForgiveness = c.depth * 0.20; // up to 20 pt reduction in penalty for deep colours
  const undertoneScore = Math.max(0, Math.min(100,
    (1 - Math.max(0, undertoneGap - deepForgiveness)) * 100
  ));

  // 2. Depth harmony (0-100)
  //    Deep profiles need depth — the minimum acceptable colour depth scales with the person's depth
  //    (e.g. pD=0.75 → idealMin=0.41, meaning very light colours score poorly for deep colouring)
  const idealMin = Math.max(0.10, pD * 0.55);
  const idealMax = Math.min(0.98, pD + 0.22);
  let depthScore;
  if (c.depth >= idealMin && c.depth <= idealMax) {
    depthScore = 96;
  } else {
    const gap = c.depth < idealMin
      ? idealMin - c.depth
      : c.depth - idealMax;
    depthScore = Math.max(0, (1 - gap * 2.2) * 96);
  }

  // 3. Saturation match (0-100)
  //    Deeper, warmer profiles tolerate higher saturation; lighter/cooler prefer muted
  const idealSatMin = 0.20 + pD * 0.18;
  const idealSatMax = 0.50 + pD * 0.38 + (pU - 0.5) * 0.14;
  let satScore;
  if (c.saturation >= idealSatMin && c.saturation <= idealSatMax) {
    satScore = 92;
  } else {
    const gap = c.saturation < idealSatMin
      ? idealSatMin - c.saturation
      : c.saturation - idealSatMax;
    satScore = Math.max(0, (1 - gap * 1.6) * 92);
  }

  const raw = undertoneScore * 0.42 + depthScore * 0.35 + satScore * 0.23;

  // Extreme undertone veto — a severe clash cannot be rescued by depth or saturation alone.
  // When the net undertone gap (after depth forgiveness) exceeds 0.70, cap the score at
  // the avoid ceiling (50) regardless of how well other factors score.
  // Catches clearly-cool colours (icy blues, periwinkles, mints) on clearly-warm profiles and vice versa.
  // Light saturated pinks/magentas (h ≥ 320°, low depth, high saturation):
  // perceptually read as cool/icy despite warm hue classification — cap at good ceiling
  if (c.hue >= 320 && c.depth < 0.40 && c.saturation > 0.35) {
    return Math.max(5, Math.min(72, Math.round(raw)));
  }

  const adjustedUndertoneGap = Math.max(0, undertoneGap - deepForgiveness);
  if (adjustedUndertoneGap > 0.65) {
    return Math.max(5, Math.min(50, Math.round(raw)));
  }

  return Math.max(5, Math.min(97, Math.round(raw)));
}

export function getTierFromScore(score) {
  if (score >= 78) return 'excellent';
  if (score >= 52) return 'good';
  return 'avoid';
}

// ── Dynamic explanation generator ─────────────────────────────────────────

export function generateExplanation(colorHex, colorName, profile) {
  const c = analyzeColorProfile(colorHex);
  const score = calculateFitScore(colorHex, profile);
  const tier = getTierFromScore(score);

  const pULabel  = profile.undertone > 0.65 ? 'warm' : profile.undertone < 0.38 ? 'cool' : 'neutral';
  const pDLabel  = profile.depth    > 0.65 ? 'deep' : profile.depth    < 0.40 ? 'light' : 'medium';
  const cULabel  = c.warmth         > 0.62 ? 'warm' : c.warmth         < 0.40 ? 'cool' : 'neutral';
  const cDLabel  = c.depth          > 0.68 ? 'deep' : c.depth          < 0.38 ? 'light' : 'mid-tone';

  const undertoneMatch = Math.abs(profile.undertone - c.warmth) < 0.28;
  const undertoneClash = Math.abs(profile.undertone - c.warmth) > 0.50;

  if (tier === 'excellent') {
    if (undertoneMatch && c.depth > 0.55 && profile.depth > 0.50) {
      return `This ${cDLabel} ${cULabel} tone aligns with your detected ${pDLabel} ${pULabel} colouring on both undertone and depth. The colour operates by harmony — it echoes your natural colour signature rather than contrasting with it, which is why it frames the face effectively.`;
    }
    if (undertoneMatch) {
      return `The ${cULabel} undertone in ${colorName} harmonises with your detected ${pULabel} skin tone. This shared temperature creates a cohesive, flattering effect near the face — the colour amplifies what's already present rather than introducing visual tension.`;
    }
    if (c.depth > 0.68) {
      return `Despite being ${cULabel}-leaning in hue, the exceptional depth of ${colorName} is compatible with your ${pDLabel} colouring. Deep colours are more undertone-forgiving — the richness carries the relationship and the mild hue tension becomes imperceptible at normal viewing distance.`;
    }
    return `${colorName} performs well against your detected profile. The balance of its depth and saturation creates a flattering interaction with your colouring.`;
  }

  if (tier === 'good') {
    if (undertoneMatch && c.depth < 0.38) {
      return `The right undertone temperature, but insufficient depth for your ${pDLabel} colouring near the face. The lightness of ${colorName} risks washing out the contrast that defines ${pDLabel} colouring. More effective at a distance from the face or as a layering piece.`;
    }
    if (undertoneClash && c.depth > 0.60) {
      return `The ${cULabel} undertone creates a mild tension with your ${pULabel} skin tone, but the depth partially compensates. Better as a lower-body or outer layer — at distance, the eye reads depth before undertone, softening the conflict.`;
    }
    return `${colorName} is workable but not at full strength near the face. The slight mismatch between the colour's ${cULabel} character and your detected ${pULabel} colouring creates a mild tension. Pairing with a stronger anchor at the neckline improves the result.`;
  }

  // avoid
  if (undertoneClash && c.depth < 0.42) {
    return `${colorName} clashes with your detected ${pULabel} colouring on two counts: the ${cULabel} undertone fights your skin temperature, and the lightness fails to provide the depth your colouring needs for structure. This combination reliably drains vitality from the face.`;
  }
  if (undertoneClash) {
    return `The ${cULabel} undertone in ${colorName} sits at the opposite end of the spectrum from your detected ${pULabel} skin tone. The conflict is most visible near the face — skin reads flat or dull. No depth compensation resolves an undertone mismatch at this magnitude.`;
  }
  if (c.depth < 0.30 && profile.depth > 0.55) {
    return `${colorName} lacks the depth your ${pDLabel} colouring needs. The low contrast it creates near the face makes features appear undefined rather than framed. Your colouring works best with colours that have enough presence to meet its intensity.`;
  }
  return `${colorName} does not perform well against your detected colouring profile. The combination of its undertone and depth creates an unflattering interaction near the face.`;
}

// ── Dynamic tag generator ──────────────────────────────────────────────────

export function generateTags(colorHex, profile) {
  const c  = analyzeColorProfile(colorHex);
  const score = calculateFitScore(colorHex, profile);
  const tier  = getTierFromScore(score);

  const pULabel = profile.undertone > 0.65 ? 'warm' : profile.undertone < 0.38 ? 'cool' : 'neutral';
  const cULabel = c.warmth > 0.62 ? 'warm' : c.warmth < 0.40 ? 'cool' : 'neutral';
  const cDLabel = c.depth  > 0.68 ? 'deep' : c.depth  < 0.38 ? 'light' : 'mid-tone';
  const undertoneMatch = Math.abs(profile.undertone - c.warmth) < 0.28;
  const undertoneClash = Math.abs(profile.undertone - c.warmth) > 0.50;

  const tags = [`${cULabel} undertone`, `${cDLabel} value`];

  if (tier === 'excellent') {
    if (undertoneMatch) tags.push('undertone harmony');
    if (c.depth > 0.60 && profile.depth > 0.50) tags.push('depth match');
    else if (c.saturation > 0.45) tags.push('rich saturation');
  } else if (tier === 'good') {
    if (c.depth < 0.38) tags.push('best away from face');
    else if (undertoneClash) tags.push('needs warm anchor');
    else tags.push('use with care');
  } else {
    if (undertoneClash) tags.push('undertone clash');
    if (c.depth < 0.35 && profile.depth > 0.55) tags.push('too light');
    if (c.saturation < 0.12) tags.push('drains colour');
  }

  return tags.slice(0, 4);
}

// ── Build adjusted palette from detected profile ───────────────────────────

export function buildAdjustedPalette(originalPalette, profile) {
  return originalPalette.map(color => {
    const fitScore   = calculateFitScore(color.hex, profile);
    const tier       = getTierFromScore(fitScore);
    const explanation = generateExplanation(color.hex, color.name, profile);
    const tags       = generateTags(color.hex, profile);
    return { ...color, fitScore, tier, explanation, tags };
  });
}
