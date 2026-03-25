// Curated palette for Dark Autumn · Winter
// Warm Mediterranean colouring — near-black hair, deep brown eyes

export const TIER_CONFIG = {
  excellent: {
    label: 'Excellent',
    icon: '✦',
    color: '#30D158',
    bg: 'rgba(48,209,88,0.12)',
    border: 'rgba(48,209,88,0.22)',
    description: 'Maximises contrast · complements undertone · full power near the face',
  },
  good: {
    label: 'Good',
    icon: '✓',
    color: '#FFD60A',
    bg: 'rgba(255,214,10,0.12)',
    border: 'rgba(255,214,10,0.22)',
    description: 'Works with caveats · often better away from the face',
  },
  avoid: {
    label: 'Avoid',
    icon: '✕',
    color: '#FF453A',
    bg: 'rgba(255,69,58,0.12)',
    border: 'rgba(255,69,58,0.22)',
    description: 'Clashes with undertone · creates unflattering contrast',
  },
};

export const palette = [

  // ── EXCELLENT ──────────────────────────────────────────────────────────

  {
    id: 'bordeaux',
    name: 'Bordeaux',
    hex: '#6B2737',
    tier: 'excellent',
    fitScore: 95,
    tags: ['high contrast', 'warm undertone', 'face-framing'],
    explanation:
      'A deep wine red that mirrors the warm depth of dark brown eyes. The richness creates maximum contrast against warm Mediterranean skin without overwhelming — it frames the face rather than fighting it. The red undertone directly harmonises with golden skin, while the depth matches your overall colour intensity.',
  },
  {
    id: 'mahogany',
    name: 'Mahogany',
    hex: '#6B1B22',
    tier: 'excellent',
    fitScore: 93,
    tags: ['deep warm red', 'intense', 'dramatic'],
    explanation:
      'A near-black red with unmistakable warmth — richer and more intense than Bordeaux. Mahogany brings extraordinary depth that creates a strong, defining frame around warm deep colouring. The warmth in the base keeps it grounded in your undertone while the depth matches your natural intensity.',
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    hex: '#3D1C02',
    tier: 'excellent',
    fitScore: 91,
    tags: ['hair echo', 'grounding', 'seamless'],
    explanation:
      'Near-identical to your natural hair colour. Pieces in this depth read as a seamless extension of your colouring — creating an elongating, cohesive frame that intensifies without effort. Exceptional in outerwear and knitwear. No other neutral performs as consistently for this profile.',
  },
  {
    id: 'deep-rust',
    name: 'Deep Rust',
    hex: '#7A2E0E',
    tier: 'excellent',
    fitScore: 89,
    tags: ['dark warm', 'autumnal', 'rich'],
    explanation:
      'The darker, deeper version of rust — earthy enough to ground the face while warm enough to harmonise with the undertone. This sits between Bordeaux and Copper in character, combining depth and warmth in the right proportions. A reliable all-season excellent.',
  },
  {
    id: 'forest',
    name: 'Forest',
    hex: '#2D5016',
    tier: 'excellent',
    fitScore: 92,
    tags: ['earthy depth', 'undertone match', 'grounding'],
    explanation:
      'Hunter green carries enough warmth to harmonise with golden-olive skin — the yellow-green base is doing the heavy lifting here. The depth echoes near-black hair, creating a cohesive frame. Avoid bright or cool greens: this specific depth and temperature is what makes the difference.',
  },
  {
    id: 'dark-moss',
    name: 'Dark Moss',
    hex: '#3D4E18',
    tier: 'excellent',
    fitScore: 86,
    tags: ['warm-dark', 'earthy', 'deep olive'],
    explanation:
      'A very deep olive-green with a strong warm yellow base. Darker and earthier than Forest, it sits at the intersection of warm and dark — both qualities essential for this profile. The richness creates excellent harmony with warm deep colouring and reads as sophisticated rather than dull.',
  },
  {
    id: 'burnt-sienna',
    name: 'Burnt Sienna',
    hex: '#C4622D',
    tier: 'excellent',
    fitScore: 90,
    tags: ['warm', 'analogous', 'energising'],
    explanation:
      'A true warm orange-brown sitting directly in the same colour temperature as your natural colouring. It reads as energising and intentional — never loud — because it harmonises rather than contrasts. One of the most powerful warm colours in this profile: it amplifies the warmth already present in your skin.',
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    hex: '#BA5A36',
    tier: 'excellent',
    fitScore: 87,
    tags: ['clay warm', 'orange-red', 'Mediterranean'],
    explanation:
      'Mediterranean clay — this colour exists precisely because of warm, sun-warmed colouring. The orange-red temperature sits in perfect harmony with golden-olive skin. Slightly brighter than Burnt Sienna but equally flattering; the earthiness prevents it from reading as costume.',
  },
  {
    id: 'copper',
    name: 'Copper',
    hex: '#A0522D',
    tier: 'excellent',
    fitScore: 89,
    tags: ['metallic warmth', 'high harmony', 'luminous'],
    explanation:
      'Copper is the metallic counterpart of your skin undertone. It pulls the warmth in your complexion forward and creates a lit-from-within effect that no cool metallic can replicate. As both a clothing and accessory colour, copper is one of the strongest performers in the entire warm-dark palette.',
  },
  {
    id: 'cognac',
    name: 'Cognac',
    hex: '#8B4513',
    tier: 'excellent',
    fitScore: 88,
    tags: ['warm brown', 'leather warmth', 'versatile'],
    explanation:
      'A rich warm saddle brown that bridges clothing and accessories beautifully. Lighter than Chocolate but within the same warm family — Cognac provides structure without the intensity of very dark tones. Outstanding in leather goods, structured outerwear, and knitwear near the face.',
  },
  {
    id: 'rich-plum',
    name: 'Rich Plum',
    hex: '#4A0E3C',
    tier: 'excellent',
    fitScore: 88,
    tags: ['jewel tone', 'warm-cool bridge', 'depth'],
    explanation:
      'A warm-leaning plum that bridges Dark Autumn warmth and Winter depth. The red base keeps it warm enough to avoid fighting your undertone, while the depth adds drama and definition. This is the correct purple family — never icy violet or cool lavender, which belong to different seasonal profiles entirely.',
  },
  {
    id: 'camel',
    name: 'Camel',
    hex: '#C19A6B',
    tier: 'excellent',
    fitScore: 87,
    tags: ['undertone echo', 'natural', 'versatile'],
    explanation:
      'Warm tan echoes the golden-olive undertone precisely, creating a monochromatic harmony that makes features appear more defined rather than merged. Works exceptionally in structured pieces near the face. The naturalness of this colour removes the need for contrast — it operates by harmony, not counterpoint.',
  },
  {
    id: 'warm-amber',
    name: 'Warm Amber',
    hex: '#C48B12',
    tier: 'excellent',
    fitScore: 84,
    tags: ['golden', 'jewel warmth', 'luminous'],
    explanation:
      'A warm golden amber that functions like liquid copper. The yellow-gold undertone matches the warmth in Mediterranean skin and catches light in a way that makes the complexion appear more luminous. Best in accessories and statement pieces — powerful near the face and outstanding in jewellery.',
  },
  {
    id: 'deep-teal',
    name: 'Deep Teal',
    hex: '#1B5E52',
    tier: 'excellent',
    fitScore: 85,
    tags: ['warm-cool balance', 'sophisticated', 'depth match'],
    explanation:
      'A teal with enough yellow in the base to stay warm-adjacent. Provides cool-ish contrast without going icy — the green component harmonises with your colouring, while the depth matches your overall intensity. The one cool-adjacent colour that works at the neckline for this profile.',
  },

  // ── GOOD ───────────────────────────────────────────────────────────────

  {
    id: 'rust',
    name: 'Rust',
    hex: '#8B3A0F',
    tier: 'good',
    fitScore: 74,
    tags: ['warm', 'slightly aggressive', 'mid-layer'],
    explanation:
      'Rust works but sits in a narrower range than copper or sienna — it can read slightly harsh near very warm skin. Better as a mid-layer or below the waist than at the direct neckline. Think of rust as copper\'s less refined sibling: the right family, slightly the wrong calibration.',
  },
  {
    id: 'brick',
    name: 'Brick',
    hex: '#8B3A2A',
    tier: 'good',
    fitScore: 73,
    tags: ['warm red-brown', 'casual', 'earthy'],
    explanation:
      'Sits between rust and terracotta in character — a medium-depth warm red-brown that works comfortably in casual wear. Not quite the intensity of the deep reds (Bordeaux, Mahogany) but warm enough to harmonise. Better as a layering piece than a stand-alone statement colour at the neckline.',
  },
  {
    id: 'mustard',
    name: 'Mustard',
    hex: '#B8960C',
    tier: 'good',
    fitScore: 71,
    tags: ['warm yellow', 'muted', 'best away from face'],
    explanation:
      'The correct yellow family for warm colouring — muted enough to avoid reading as costume. Works better as a mid-layer than at the neckline; yellow\'s natural brightness can overwhelm even warm-deep colouring near the face. As a trouser, skirt, or bag colour, mustard is a strong choice.',
  },
  {
    id: 'olive',
    name: 'Olive',
    hex: '#6B7A1B',
    tier: 'good',
    fitScore: 72,
    tags: ['earthy', 'best away from face', 'seasonal'],
    explanation:
      'Olive is warm and earthy but slightly too desaturated for this profile\'s depth level when worn near the face. It works well in trousers, skirts, and bags — the further from the face, the less the lack of richness matters. A strong bottom-half colour that loses performance at the neckline.',
  },
  {
    id: 'warm-taupe',
    name: 'Warm Taupe',
    hex: '#8C7B6E',
    tier: 'good',
    fitScore: 67,
    tags: ['greige', 'neutral base', 'texture-dependent'],
    explanation:
      'A warm-leaning greige that functions as a neutral base rather than a flattering colour. Works well in high-quality fabrics where texture compensates for the lack of saturation. Better than cool grays but still lacks the depth and richness this profile needs for maximum effect near the face.',
  },
  {
    id: 'deep-navy',
    name: 'Deep Navy',
    hex: '#1A2744',
    tier: 'good',
    fitScore: 71,
    tags: ['cool-leaning', 'needs warm anchor', 'depth saves it'],
    explanation:
      'Navy is the one cool-leaning colour that earns a place in this palette — its depth compensates for the cool undertone. It works, but pair it with a warm scarf, amber jewellery, or a warm underlayer near the face to prevent the undertone mismatch from registering. Without an anchor, it will lean slightly draining.',
  },
  {
    id: 'warm-sage',
    name: 'Warm Sage',
    hex: '#7D8C5A',
    tier: 'good',
    fitScore: 70,
    tags: ['muted', 'gentle contrast', 'outperformed by forest'],
    explanation:
      'Sage has the right warmth but insufficient depth for this high-contrast profile near the face. It works in casual and layering contexts, but Forest will always outperform it. Think of sage as the low-stakes everyday option in the green family — acceptable but never exciting.',
  },
  {
    id: 'mauve',
    name: 'Mauve',
    hex: '#9B5C7A',
    tier: 'good',
    fitScore: 69,
    tags: ['warm pink', 'distance-sensitive', 'soft'],
    explanation:
      'A warm mauve is far superior to cool or icy pinks. It registers as soft and feminine without the iciness that would directly clash. At a distance it reads well — up close, the slight pink-cool note competes with warm skin. Opt for Bordeaux or Rich Plum at the neckline; save mauve for lower body.',
  },
  {
    id: 'warm-ivory',
    name: 'Warm Ivory',
    hex: '#F5EDD6',
    tier: 'good',
    fitScore: 68,
    tags: ['soft contrast', 'layering piece', 'not near face'],
    explanation:
      'Warm ivory is always the correct white-adjacent choice for this profile — never pure white. That said, even ivory risks washing out the face at high contrast. Best used in inner layers, blouses beneath a jacket, or below the waist. When it must be near the face, anchor it with a dark neckline colour.',
  },
  {
    id: 'dark-coral',
    name: 'Dark Coral',
    hex: '#C06040',
    tier: 'good',
    fitScore: 72,
    tags: ['warm coral', 'orange-pink', 'season-sensitive'],
    explanation:
      'A muted, deeper coral that sits in the warm-orange family. The warmth is right but the pink component introduces a slight tension near the face. Works best in spring and summer casual contexts — the brightness reads as intentional rather than clashing. Better than icy or cool corals by a large margin.',
  },

  // ── AVOID ──────────────────────────────────────────────────────────────

  {
    id: 'cool-gray',
    name: 'Cool Gray',
    hex: '#9094A0',
    tier: 'avoid',
    fitScore: 18,
    tags: ['cool undertone', 'washes out', 'no structure'],
    explanation:
      'Cool gray sits at the opposite end of the undertone spectrum. It introduces ashiness that competes with warm skin, creating a dull, flat appearance. There is no depth or warmth to provide structure or harmony. Near the face, this colour reliably makes warm colouring look tired and undefined.',
  },
  {
    id: 'icy-blue',
    name: 'Icy Blue',
    hex: '#A8C8E8',
    tier: 'avoid',
    fitScore: 12,
    tags: ['too cool', 'too light', 'direct undertone clash'],
    explanation:
      'Ice blue fights this profile on two fronts simultaneously: the cool temperature clashes with the warm undertone, and the lightness creates insufficient contrast for deep colouring. This colour literally works against every aspect of Dark Autumn · Winter. It belongs to cool, light seasonal profiles.',
  },
  {
    id: 'slate-blue',
    name: 'Slate Blue',
    hex: '#6A8CAF',
    tier: 'avoid',
    fitScore: 24,
    tags: ['cool blue', 'muted clash', 'draining'],
    explanation:
      'A desaturated cool blue that combines an undertone clash with insufficient depth. The muted quality means it lacks the presence to create an interesting contrast — it just sits flatly against warm skin, reading as uninspired and draining. No compensating quality makes this work near the face.',
  },
  {
    id: 'mint',
    name: 'Mint Green',
    hex: '#98D8C8',
    tier: 'avoid',
    fitScore: 16,
    tags: ['too cool', 'too light', 'Spring palette'],
    explanation:
      'Mint sits at the intersection of two unflattering qualities for this profile: cool temperature and very low depth. It belongs to Spring and soft cool palettes — everything this profile is not. Near warm deep colouring, it creates a jarring, artificial effect that reads as a colour mistake rather than a choice.',
  },
  {
    id: 'pure-white',
    name: 'Pure White',
    hex: '#EFEFEF',
    tier: 'avoid',
    fitScore: 20,
    tags: ['stark contrast', 'texture-revealing', 'avoid near face'],
    explanation:
      'Pure white creates excessive brightness contrast that highlights uneven skin texture and under-eye shadows. It also lacks the warmth needed to harmonise with golden undertones. Warm ivory is always the correct substitution — moving from white to ivory is one of the easiest improvements for this profile.',
  },
  {
    id: 'lemon-yellow',
    name: 'Lemon Yellow',
    hex: '#F5E642',
    tier: 'avoid',
    fitScore: 15,
    tags: ['cool yellow', 'intensity mismatch', 'Spring colour'],
    explanation:
      'Lemon yellow is too cool and too light for this deep, warm profile. It overwhelms the face and fights the undertone at the same time. If you love yellow, you need darker and more muted mustards — the correct yellow family for this profile. Lemon is a Spring colour and reads as such on warm-deep colouring.',
  },
  {
    id: 'cool-lavender',
    name: 'Cool Lavender',
    hex: '#B39AC4',
    tier: 'avoid',
    fitScore: 22,
    tags: ['cool undertone', 'drains warmth', 'wrong purple family'],
    explanation:
      'Lavender\'s blue-violet cool undertone directly cancels warm golden skin, draining it of vitality. Even muted versions of this family underperform. If you want purple, you need the depth and warmth of Rich Plum or Bordeaux — lavender is categorically the wrong end of the purple spectrum for this profile.',
  },
  {
    id: 'hot-pink',
    name: 'Hot Pink',
    hex: '#E85A97',
    tier: 'avoid',
    fitScore: 18,
    tags: ['cool pink', 'intense clash', 'fights undertone'],
    explanation:
      'A cool, vivid pink that attacks warm colouring at full volume. The intensity makes the undertone clash maximally visible — rather than reading as a bold choice, it reads as a fight between the colour and the person wearing it. There is no version of hot pink that works for warm profiles.',
  },
  {
    id: 'periwinkle',
    name: 'Periwinkle',
    hex: '#8A97C8',
    tier: 'avoid',
    fitScore: 21,
    tags: ['cool blue-purple', 'washed out', 'undertone clash'],
    explanation:
      'A cool blue-purple that combines two clashing qualities: cool hue against warm undertone, and insufficient depth for this profile. The grey-blue cast creates a dull, ashy effect on warm skin. It reads as lifeless near the face — exactly the opposite of what this colouring is capable of achieving.',
  },
  {
    id: 'baby-pink',
    name: 'Baby Pink',
    hex: '#F4B8C8',
    tier: 'avoid',
    fitScore: 10,
    tags: ['icy', 'cool', 'maximally unflattering'],
    explanation:
      'Baby pink is the worst-performing colour for warm dark colouring. It is simultaneously too cool and too light — fighting both the undertone and the intensity level. The iciness drains warmth from the face while the lightness provides no contrast or structure. If there is one item to retire immediately, it\'s anything in this family.',
  },
];
