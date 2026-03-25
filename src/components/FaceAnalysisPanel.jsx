import { TIER_CONFIG } from '../data/palette';

// ── Scale bar with a positioned marker ────────────────────────────────────
function ScaleBar({ value, leftLabel, rightLabel, gradientFrom, gradientTo, midColor }) {
  const pct = Math.round(value * 100);
  const mid = midColor || '#888';

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>

      {/* Track */}
      <div
        className="relative h-2 rounded-full overflow-visible"
        style={{ background: `linear-gradient(to right, ${gradientFrom}, ${mid}, ${gradientTo})` }}
      >
        {/* Marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-white"
          style={{
            left: `calc(${pct}% - 7px)`,
            backgroundColor: interpolateColor(gradientFrom, gradientTo, value),
            boxShadow: '0 1px 6px rgba(0,0,0,0.6)',
            transition: 'left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      </div>
    </div>
  );
}

// Simple hex colour interpolation for marker colour
function interpolateColor(from, to, t) {
  const f = parseInt(from.slice(1), 16);
  const e = parseInt(to.slice(1), 16);
  const fr = (f >> 16) & 255, fg = (f >> 8) & 255, fb = f & 255;
  const er = (e >> 16) & 255, eg = (e >> 8) & 255, eb = e & 255;
  const r = Math.round(fr + (er - fr) * t);
  const g = Math.round(fg + (eg - fg) * t);
  const b = Math.round(fb + (eb - fb) * t);
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`;
}

// ── Metric row ─────────────────────────────────────────────────────────────
function MetricRow({ label, valueLabel, valueColor, children }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
          {label}
        </span>
        <span className="text-xs font-semibold" style={{ color: valueColor }}>
          {valueLabel}
        </span>
      </div>
      {children}
    </div>
  );
}

// ── Swatch card ────────────────────────────────────────────────────────────
function SwatchCard({ hex, label, sublabel }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-3 py-2.5"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex-shrink-0"
        style={{
          backgroundColor: hex,
          boxShadow: `0 3px 12px ${hex}55`,
        }}
      />
      <div>
        <div className="text-xs font-semibold text-white">{label}</div>
        <code className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
          {hex.toUpperCase()}
        </code>
        {sublabel && (
          <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{sublabel}</div>
        )}
      </div>
    </div>
  );
}

// ── Interpretation text generator ─────────────────────────────────────────
function buildInterpretation(profile) {
  const uLabel = profile.undertone > 0.65 ? 'warm' : profile.undertone < 0.38 ? 'cool' : 'neutral';
  const dLabel = profile.depth > 0.65 ? 'deep' : profile.depth < 0.40 ? 'light' : 'medium';
  const cLabel = profile.contrast > 0.55 ? 'high' : profile.contrast < 0.30 ? 'low' : 'medium';

  const undertoneNote = profile.undertone > 0.65
    ? 'Your skin carries a golden-yellow bias that reads warm in most lighting conditions. This pulls toward amber, bronze, and earth tones being naturally harmonious.'
    : profile.undertone < 0.38
    ? 'Your skin has a blue-pink bias that reads cool across lighting conditions. This makes blue-based neutrals and clear, cool colours most harmonious.'
    : 'Your skin sits between warm and cool — a balanced mix that gives you some flexibility, though slightly warm or slightly cool tones will both work.';

  const depthNote = profile.depth > 0.65
    ? 'With deep colouring, you need colours that can match your intensity. Muted pastels and very light tones tend to create imbalance — rich, saturated, or dark colours are your strongest choices.'
    : profile.depth < 0.40
    ? 'Light colouring works best with colours of similar delicacy — soft, blended tones and mid-values rather than very dark or highly saturated colours that can overwhelm.'
    : 'Medium depth gives you the widest range — you can carry both darker and lighter tones, with mid-values and moderate saturation being the most reliable.';

  const contrastNote = profile.contrast > 0.55
    ? 'The strong difference between your skin and hair creates natural visual drama. You can wear bold colour choices near the face without looking overwhelmed — your colouring provides the structure.'
    : profile.contrast < 0.30
    ? 'Low contrast between skin and hair means tonal, blended colour schemes will feel most cohesive. Stark colour contrasts near the face may look disconnected from your natural colouring.'
    : 'Medium contrast between skin and hair gives you balanced flexibility — neither exclusively bold nor exclusively soft in your palette choices.';

  return { undertoneNote, depthNote, contrastNote, uLabel, dLabel, cLabel };
}

// ── Palette shift summary ──────────────────────────────────────────────────
function PaletteShiftSummary({ palette }) {
  const counts = palette.reduce((acc, c) => {
    acc[c.tier] = (acc[c.tier] || 0) + 1;
    return acc;
  }, {});

  const top3 = [...palette].sort((a, b) => b.fitScore - a.fitScore).slice(0, 3);

  return (
    <div className="space-y-3">
      {/* Tier distribution */}
      <div className="flex items-center gap-2 flex-wrap">
        {Object.entries(TIER_CONFIG).map(([key, t]) => (
          <div
            key={key}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: t.bg, border: `1px solid ${t.border}`, color: t.color }}
          >
            <span style={{ fontSize: 9 }}>{t.icon}</span>
            {counts[key] || 0} {t.label}
          </div>
        ))}
      </div>

      {/* Top 3 colours */}
      <div>
        <p className="text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
          TOP MATCHES
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {top3.map((c, i) => (
            <div key={c.id} className="flex items-center gap-1.5">
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  backgroundColor: c.hex,
                  boxShadow: `0 2px 8px ${c.hex}60`,
                  outline: i === 0 ? '2px solid rgba(255,255,255,0.35)' : 'none',
                  outlineOffset: 2,
                }}
              />
              <span className="text-xs font-medium" style={{ color: i === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)' }}>
                {c.name}
              </span>
              {i < top3.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.15)', marginLeft: 4 }}>·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function FaceAnalysisPanel({ profile, palette }) {
  if (!profile) return null;

  const { undertoneNote, depthNote, contrastNote, uLabel, dLabel, cLabel } = buildInterpretation(profile);

  const undertoneColor = profile.undertone > 0.65 ? '#C9A96E' : profile.undertone < 0.38 ? '#7BA7C9' : '#A0A0A0';
  const depthColor     = profile.depth     > 0.65 ? '#30D158' : profile.depth     < 0.40 ? '#FFD60A' : '#7B61FF';
  const contrastColor  = profile.contrast  > 0.55 ? '#30D158' : profile.contrast  < 0.30 ? '#FFD60A' : '#7B61FF';

  const skinLabelShort = profile.undertone > 0.65
    ? 'Golden-warm' : profile.undertone < 0.38
    ? 'Cool-toned' : 'Neutral';

  return (
    <div
      className="rounded-2xl overflow-hidden animate-fade-slide-in"
      style={{
        backgroundColor: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.065)',
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div>
          <h2 className="text-base font-semibold text-white" style={{ letterSpacing: '-0.015em' }}>
            Face Analysis
          </h2>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Detected from your photo · used to re-score the palette
          </p>
        </div>
        <div
          className="px-2.5 py-1 rounded-lg text-xs font-semibold"
          style={{ backgroundColor: 'rgba(48,209,88,0.12)', border: '1px solid rgba(48,209,88,0.22)', color: '#30D158' }}
        >
          ✦ Analysed
        </div>
      </div>

      <div className="p-6 space-y-6">

        {/* ── Row 1: Swatches + Metrics ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Left: Colour swatches */}
          <div className="space-y-3">
            <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
              DETECTED COLOURS
            </p>
            <SwatchCard
              hex={profile.skinHex}
              label="Skin tone"
              sublabel={skinLabelShort}
            />
            <SwatchCard
              hex={profile.hairHex}
              label="Hair tone"
              sublabel={profile.depth > 0.65 ? 'Deep / rich' : profile.depth < 0.40 ? 'Light' : 'Medium'}
            />
          </div>

          {/* Right: Metric scales */}
          <div className="space-y-4">
            <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
              PROFILE METRICS
            </p>

            <MetricRow
              label="UNDERTONE"
              valueLabel={uLabel.charAt(0).toUpperCase() + uLabel.slice(1)}
              valueColor={undertoneColor}
            >
              <ScaleBar
                value={profile.undertone}
                leftLabel="Cool"
                rightLabel="Warm"
                gradientFrom="#6A9FB5"
                midColor="#A0A0A0"
                gradientTo="#C9862A"
              />
            </MetricRow>

            <MetricRow
              label="DEPTH"
              valueLabel={dLabel.charAt(0).toUpperCase() + dLabel.slice(1)}
              valueColor={depthColor}
            >
              <ScaleBar
                value={profile.depth}
                leftLabel="Light"
                rightLabel="Deep"
                gradientFrom="#D4BFA0"
                midColor="#8B6340"
                gradientTo="#2C1505"
              />
            </MetricRow>

            <MetricRow
              label="CONTRAST"
              valueLabel={cLabel.charAt(0).toUpperCase() + cLabel.slice(1)}
              valueColor={contrastColor}
            >
              <ScaleBar
                value={profile.contrast}
                leftLabel="Tonal"
                rightLabel="High"
                gradientFrom="#4A4A5A"
                midColor="#808090"
                gradientTo="#FFFFFF"
              />
            </MetricRow>
          </div>
        </div>

        {/* ── Row 2: Interpretation notes ───────────────────── */}
        <div
          className="rounded-xl p-4 space-y-3"
          style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
            INTERPRETATION
          </p>
          <div className="space-y-2.5">
            {[
              { dot: undertoneColor, text: undertoneNote },
              { dot: depthColor,     text: depthNote },
              { dot: contrastColor,  text: contrastNote },
            ].map(({ dot, text }, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="w-1.5 flex-shrink-0 rounded-full mt-1"
                  style={{ backgroundColor: dot, minHeight: 16 }}
                />
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 3: Palette shift summary ──────────────────── */}
        <div className="space-y-3">
          <p
            className="text-xs font-medium"
            style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em', paddingBottom: 4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            PALETTE RE-SCORE SUMMARY
          </p>
          <PaletteShiftSummary palette={palette} />
        </div>

      </div>
    </div>
  );
}
