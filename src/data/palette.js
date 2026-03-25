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
    id: 'oxblood',
    name: 'Oxblood',
    hex: '#4A0012',
    tier: 'excellent',
    fitScore: 93,
    tags: ['near-black red', 'jewel depth', 'powerful'],
    explanation:
      'Darker than Bordeaux with a more saturated red base — oxblood is one of the most powerful colours in this profile. The near-black depth creates maximum contrast while the warm red foundation sits in complete harmony with golden undertones. Exceptional at the neckline and in structured outerwear.',
  },
  {
    id: 'deep-wine',
    name: 'Deep Wine',
    hex: '#5C001A',
    tier: 'excellent',
    fitScore: 92,
    tags: ['darkest red', 'extreme depth', 'dramatic'],
    explanation:
      'The deepest wine in the palette — barely above black, saturated red. For deep colouring this is exactly the kind of intensity that creates presence rather than overwhelm. The colour disappears into the dark framework of near-black hair and deep eyes, creating cohesion rather than contrast.',
  },
  {
    id: 'sangria',
    name: 'Sangria',
    hex: '#8B0030',
    tier: 'excellent',
    fitScore: 90,
    tags: ['warm red', 'statement', 'jewel-toned'],
    explanation:
      'A vivid warm red with depth — brighter than Bordeaux but grounded by enough darkness to work with this profile. The warm ruby tone harmonises with golden undertones and the saturation makes it read as an intentional, bold choice rather than a mismatch. Best in statement pieces and structured silhouettes.',
  },
  {
    id: 'maroon',
    name: 'Maroon',
    hex: '#800000',
    tier: 'excellent',
    fitScore: 89,
    tags: ['classic red-brown', 'versatile depth', 'warm'],
    explanation:
      'The classic deep warm red — reliable across every context. Maroon has been harmonising with warm Mediterranean colouring for centuries for good reason: the red-brown base matches both the undertone and the depth requirement simultaneously. A foundational excellent colour that performs in every fabric and silhouette.',
  },
  {
    id: 'claret',
    name: 'Claret',
    hex: '#5C1B27',
    tier: 'excellent',
    fitScore: 91,
    tags: ['dark red-wine', 'refined', 'depth match'],
    explanation:
      'A cooler-edged wine than Bordeaux but warm enough to stay in harmony. Claret sits between a red and a plum — the slight coolness adds elegance while the depth prevents any loss of vitality near the face. Particularly effective in formal contexts where a slightly more restrained red-wine is needed.',
  },
  {
    id: 'henna-red',
    name: 'Henna Red',
    hex: '#8B2500',
    tier: 'excellent',
    fitScore: 88,
    tags: ['deep warm red-brown', 'spice', 'earthy'],
    explanation:
      'The red-orange of henna — a colour with deep cultural resonance for Mediterranean colouring. The burnt orange-red base is one of the most harmonious temperatures for warm golden skin, while the depth ensures it reads as sophisticated rather than bright. Exceptionally effective in fabric and leather goods.',
  },
  {
    id: 'chestnut',
    name: 'Chestnut',
    hex: '#7D3526',
    tier: 'excellent',
    fitScore: 86,
    tags: ['warm red-brown', 'rich', 'organic'],
    explanation:
      'A warm red-brown that sits at the intersection of Terracotta and Cognac. Chestnut has more red than brown, giving it energy without brightness — the depth prevents it from reading as warm-casual and instead delivers a rich, defined presence near the face. Works across seasons and formality levels.',
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
    id: 'espresso',
    name: 'Espresso',
    hex: '#3C1B0A',
    tier: 'excellent',
    fitScore: 92,
    tags: ['near-black warm', 'grounding', 'seamless'],
    explanation:
      'A near-black warm brown — the correct dark neutral for this profile. Where black can look harsh on warm colouring, espresso provides the same depth with warmth baked into the base. It echoes the natural hair colour and creates a seamless frame. The workhorse neutral that replaces black throughout the wardrobe.',
  },
  {
    id: 'dark-sable',
    name: 'Dark Sable',
    hex: '#3D1C00',
    tier: 'excellent',
    fitScore: 91,
    tags: ['warm near-black', 'luxurious', 'total depth'],
    explanation:
      'The warmest near-black in the palette — almost identical in depth to Espresso but slightly more red. Sable is a refined luxury tone that reads as elevated rather than stark. For anyone who wants the impact of black without the undertone clash, this is the substitution — no compromise needed.',
  },
  {
    id: 'walnut',
    name: 'Walnut',
    hex: '#5C3317',
    tier: 'excellent',
    fitScore: 88,
    tags: ['rich warm brown', 'grounding', 'natural'],
    explanation:
      'A rich warm brown lighter than Chocolate but deeper than Cognac. Walnut fills the mid-dark brown range with confidence — it has enough warmth to harmonise and enough depth to provide structure. Particularly strong in accessories and footwear, where it reads as a perfect complement to near-black hair.',
  },
  {
    id: 'cocoa',
    name: 'Cocoa',
    hex: '#5C3120',
    tier: 'excellent',
    fitScore: 87,
    tags: ['warm brown', 'mid-depth', 'grounded'],
    explanation:
      'A medium-dark warm brown with visible red-warmth — sits between Walnut and Cognac. Cocoa has a richer, slightly more saturated tone that catches light well in fabric. An excellent everyday option for those who want warm brown without the formality of the darker shades.',
  },
  {
    id: 'tobacco-brown',
    name: 'Tobacco',
    hex: '#7B4B2A',
    tier: 'excellent',
    fitScore: 84,
    tags: ['warm medium brown', 'versatile', 'earthy'],
    explanation:
      'A medium warm brown with a distinctly earthy, aged quality. Tobacco occupies the warm-brown range between Cognac and Sienna — lighter than the dark anchors but still rich enough to provide structure near the face. One of the most consistently wearable warm browns across all fabric types.',
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
    id: 'burnt-orange',
    name: 'Burnt Orange',
    hex: '#CC5500',
    tier: 'excellent',
    fitScore: 87,
    tags: ['warm orange', 'bold', 'harvest'],
    explanation:
      'A strong, pure warm orange with depth — the Autumn declaration colour. Burnt orange is high-energy but grounded; the depth prevents it from reading as costume while the warmth creates an unmistakable harmony with golden skin. Wear it with near-black or espresso to balance the brightness.',
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    hex: '#C86020',
    tier: 'excellent',
    fitScore: 85,
    tags: ['warm orange', 'seasonal', 'energising'],
    explanation:
      'A medium-depth warm orange that sits between Burnt Sienna and Burnt Orange in character. Pumpkin is approachable without being pale — it carries enough saturation to pop near the face while the warm base ensures complete undertone harmony. An Autumn-Winter statement with year-round versatility.',
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon',
    hex: '#D2691E',
    tier: 'excellent',
    fitScore: 86,
    tags: ['spice', 'warm orange-brown', 'vibrant'],
    explanation:
      'A warm, lively orange-brown named for the spice. Cinnamon is vibrant without brightness — the brown base grounds it while the orange warmth harmonises perfectly with Mediterranean colouring. Exceptional in knitwear and textured fabrics where the warmth of the colour interacts with the richness of the material.',
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
    id: 'hunter-green',
    name: 'Hunter Green',
    hex: '#355E3B',
    tier: 'excellent',
    fitScore: 83,
    tags: ['classic dark green', 'structured', 'formal'],
    explanation:
      'Slightly cooler than Forest but rescued by its exceptional depth. Hunter green provides a more classic, less earthy green option for formal contexts. The depth compensates for the slight cool shift — this is the green for tailored pieces, outerwear, and formal accessories where Forest reads too casual.',
  },
  {
    id: 'army-green',
    name: 'Army Green',
    hex: '#4B5320',
    tier: 'excellent',
    fitScore: 85,
    tags: ['warm olive-green', 'structured', 'utility-rich'],
    explanation:
      'A dark yellow-green with a deliberately muted military quality. The yellow base keeps it warm and in harmony with golden undertones, while the depth ensures it works across all contexts. Army green reads as intentional and structured rather than casual — particularly strong in outerwear and tailored pieces.',
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
    id: 'dark-copper',
    name: 'Dark Copper',
    hex: '#6B3410',
    tier: 'excellent',
    fitScore: 88,
    tags: ['deep warm copper', 'rich metallic', 'grounded'],
    explanation:
      'A deeper, more saturated version of Copper — darker and richer, with less orange brightness. Dark Copper provides all of Copper\'s undertone harmony at a depth level that works even better with near-black hair. One of the strongest colours in the palette for formal and structured pieces.',
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
    id: 'bronze',
    name: 'Bronze',
    hex: '#8C6914',
    tier: 'excellent',
    fitScore: 84,
    tags: ['warm metallic', 'golden-brown', 'rich'],
    explanation:
      'The accessory colour equivalent of Copper — a warm golden-brown that reads as metallic without the sharpness of gold. Bronze is outstanding in hardware, jewellery, and textured fabrics. As a clothing colour it creates a sophisticated, slightly oxidised warmth that complements golden skin with precision.',
  },
  {
    id: 'dark-gold',
    name: 'Dark Gold',
    hex: '#B8860B',
    tier: 'excellent',
    fitScore: 83,
    tags: ['warm gold', 'rich', 'luminous'],
    explanation:
      'A deep warm gold — richer and more saturated than Warm Amber, with a more golden hue. Dark Gold reads as genuinely luxurious near the face because the temperature directly echoes the warmth in golden-olive skin. Best in accessories and statement pieces; powerful in jewellery-weight quantities.',
  },
  {
    id: 'antique-gold',
    name: 'Antique Gold',
    hex: '#C9A84C',
    tier: 'excellent',
    fitScore: 82,
    tags: ['muted gold', 'vintage warmth', 'textured'],
    explanation:
      'A softer, greyed-gold with a vintage quality — less sharp than bright gold but warmer and more complex. Antique Gold works near the face because the muted quality prevents it from reading as costume while the warmth stays in complete harmony. Outstanding in textured fabrics and structured accessories.',
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
    id: 'aubergine',
    name: 'Aubergine',
    hex: '#380E3C',
    tier: 'excellent',
    fitScore: 89,
    tags: ['deep jewel purple', 'dramatic', 'warm-leaning'],
    explanation:
      'A near-black warm purple — deeper and more powerful than Rich Plum. Aubergine provides the intensity of near-black with the richness of purple, creating a dramatic yet harmonious frame. The red base ensures it stays warm enough to avoid clashing; the extraordinary depth does the rest.',
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
    id: 'umber',
    name: 'Umber',
    hex: '#6B4226',
    tier: 'excellent',
    fitScore: 85,
    tags: ['earthy warm brown', 'raw pigment', 'grounded'],
    explanation:
      'Raw umber — one of the oldest warm pigments in art history and consistently harmonious with warm Mediterranean colouring. The orange-brown warmth is natural rather than vivid, making it one of the easiest excellent colours to integrate across all garment types. Neutral enough to anchor but warm enough to enhance.',
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
    id: 'ginger',
    name: 'Ginger',
    hex: '#B5592F',
    tier: 'good',
    fitScore: 74,
    tags: ['warm spice', 'orange-brown', 'casual'],
    explanation:
      'A warm spice colour with a lively character — similar to Cinnamon but slightly more red-brown. Ginger is warm and harmonious but slightly too orange-bright for the neckline on warm skin without an anchor. As a layering colour or in casual knitwear it reads well; pair with a deeper anchor at the face.',
  },
  {
    id: 'cedar',
    name: 'Cedar',
    hex: '#9B3722',
    tier: 'good',
    fitScore: 72,
    tags: ['warm red-brown', 'earthy depth', 'mid-tone'],
    explanation:
      'A medium warm red-brown — darker than Brick but lighter than Chestnut. Cedar has a dry, earthy quality that works well in casual and transitional pieces. It sits just below the depth threshold where it fully maximises this profile — excellent as a bottom-half colour or layering piece, good but not optimal at the neckline.',
  },
  {
    id: 'spice',
    name: 'Spice',
    hex: '#A3512D',
    tier: 'good',
    fitScore: 72,
    tags: ['warm mid-tone', 'autumnal', 'casual depth'],
    explanation:
      'A mid-depth warm orange-brown — analogous to Copper but with a slightly cooler, browner base that reduces its harmony score. Spice reads as appropriately warm but the slight reduction in warmth compared to Copper means it performs better at a distance or as a layering colour than in a direct neckline position.',
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
    id: 'golden-yellow',
    name: 'Golden Yellow',
    hex: '#DAA520',
    tier: 'good',
    fitScore: 70,
    tags: ['warm gold-yellow', 'bright', 'distance only'],
    explanation:
      'A warm golden yellow — the right undertone family but too bright and light to work at the neckline for this profile. The warmth is correct but the luminosity overwhelms the face. Reserve for accessories, statement bags, and lower-body pieces where the warmth reads well without the face-proximity issue.',
  },
  {
    id: 'ochre',
    name: 'Ochre',
    hex: '#CC7722',
    tier: 'good',
    fitScore: 71,
    tags: ['warm earth yellow', 'pigment tone', 'seasonal'],
    explanation:
      'A raw earth colour — warm yellow-orange with a dry, matte quality. Ochre has excellent undertone harmony but its brightness reads as slightly too vivid for a formal neckline placement. In casual, textured, or layered contexts it integrates beautifully with this profile. The correct yellow-orange at the right moment.',
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
    id: 'moss-green',
    name: 'Moss Green',
    hex: '#556B2F',
    tier: 'good',
    fitScore: 73,
    tags: ['muted warm green', 'earthy', 'layering'],
    explanation:
      'A muted yellow-green with warm earthy character — less vivid than Olive, more olive-yellow than Forest. Moss Green works in relaxed and casual contexts where its quiet warmth integrates naturally. Not dynamic enough to work at the neckline for deep colouring, but a solid layering option in the green family.',
  },
  {
    id: 'dark-sage',
    name: 'Dark Sage',
    hex: '#5A7040',
    tier: 'good',
    fitScore: 70,
    tags: ['warm-muted green', 'calm', 'casual'],
    explanation:
      'A darker version of sage with more olive-warmth — better than mid-sage for this profile but still below the depth and saturation needed for maximum performance near the face. Works well in structured everyday pieces; saves its best performance for contexts where it can be anchored by a richer neckline colour.',
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
    id: 'tan',
    name: 'Tan',
    hex: '#D2B48C',
    tier: 'good',
    fitScore: 65,
    tags: ['warm neutral', 'too light', 'bottom-half best'],
    explanation:
      'Warm and in the right undertone family but lacking the depth this profile needs at the neckline. Tan risks creating a monochromatic, undefined look near the face — skin and fabric blur rather than frame. In footwear, bags, and lower-body pieces it integrates naturally; at the neckline, it needs a deeper anchor.',
  },
  {
    id: 'fawn',
    name: 'Fawn',
    hex: '#B08050',
    tier: 'good',
    fitScore: 67,
    tags: ['warm light brown', 'neutral', 'casual'],
    explanation:
      'A warm light brown — sits between Camel and Tan in depth. Fawn has the right temperature but reads as slightly too pale near very deep colouring. It works in casual and transitional contexts, particularly in jersey and knitwear where fabric texture adds the visual interest the colour alone cannot provide.',
  },
  {
    id: 'warm-khaki',
    name: 'Warm Khaki',
    hex: '#C0A060',
    tier: 'good',
    fitScore: 68,
    tags: ['warm military', 'muted yellow', 'practical'],
    explanation:
      'A warm, muted military khaki with more gold than green. Better than cool khaki for this profile — the golden undertone harmonises with warm skin. Lacks the depth to fully maximise this colouring near the face but works well in structured pieces like trousers and outerwear away from the face.',
  },
  {
    id: 'warm-peach',
    name: 'Warm Peach',
    hex: '#E8A882',
    tier: 'good',
    fitScore: 64,
    tags: ['warm but too light', 'skin-adjacent', 'casual'],
    explanation:
      'A warm peach with golden-orange undertones — technically in the right temperature family but far too light and skin-adjacent for this profile near the face. The risk is the face disappearing into the fabric rather than being framed by it. Best in lower-body casual wear where the warmth registers positively.',
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
    id: 'artichoke',
    name: 'Artichoke',
    hex: '#8F9779',
    tier: 'good',
    fitScore: 65,
    tags: ['muted warm green', 'soft', 'casual'],
    explanation:
      'A muted grey-green with warm undertones — quieter than Sage and even less dynamic near the face. Artichoke reads as sophisticated in interiors but slightly flat on deep warm colouring. The warmth prevents an outright clash but the lack of depth and saturation means it never fully comes alive near the face.',
  },
  {
    id: 'bronze-olive',
    name: 'Bronze Olive',
    hex: '#857A40',
    tier: 'good',
    fitScore: 69,
    tags: ['warm khaki-green', 'textured', 'muted gold'],
    explanation:
      'A warm, muted olive-gold — combines the earthy quality of olive with the warmth of bronze. Has the right character for this profile but sits in a somewhat flat range that prevents it from fully maximising the face. Outstanding in textured fabrics and structured pieces; needs richness from surrounding elements.',
  },
  {
    id: 'bark',
    name: 'Bark',
    hex: '#7A5C3A',
    tier: 'good',
    fitScore: 71,
    tags: ['warm mid-brown', 'organic', 'natural'],
    explanation:
      'A medium warm brown with a natural, organic quality — not quite rich enough to be Excellent but warm enough to work comfortably near the face. Bark functions as the everyday mid-tone brown: always harmonious, never dramatic. Best in casual and transitional pieces where warmth matters more than impact.',
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
    id: 'dried-rose',
    name: 'Dried Rose',
    hex: '#C47070',
    tier: 'good',
    fitScore: 67,
    tags: ['muted warm pink', 'vintage', 'soft'],
    explanation:
      'A desaturated, warm-toned dusty rose — better than vivid pinks because the muted quality reduces the cool interference. The underlying warmth keeps it from clashing outright, but the pink component still introduces mild tension near warm skin. Better in fabric-forward casual pieces than near the face in formal settings.',
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
    id: 'sandy-brown',
    name: 'Sandy Brown',
    hex: '#C4A05A',
    tier: 'good',
    fitScore: 66,
    tags: ['warm sand', 'light neutral', 'casual'],
    explanation:
      'A warm sandy mid-tone that reads naturally on warm colouring but lacks the depth to create definition near the face. Sandy Brown works well in summer casual pieces and accessories where the warmth registers positively. In structured neckline pieces, it blends into skin rather than framing it.',
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
    id: 'gunmetal',
    name: 'Gunmetal',
    hex: '#3A3A42',
    tier: 'good',
    fitScore: 63,
    tags: ['dark cool-neutral', 'depth saves it', 'modern'],
    explanation:
      'A very dark grey with blue-cool undertone — normally problematic for warm colouring, but the extreme depth brings it close to functioning. Think of Gunmetal as the dark-mode substitute when Espresso or Sable won\'t work contextually. Needs warm accessories at the face to prevent the cool undertone from surfacing.',
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
  {
    id: 'tawny',
    name: 'Tawny',
    hex: '#C08040',
    tier: 'good',
    fitScore: 72,
    tags: ['warm orange-brown', 'mid-bright', 'seasonal'],
    explanation:
      'A bright warm orange-brown — more vivid and lighter than Copper but in the same family. Tawny\'s brightness works in casual and summer contexts but can read as slightly too vivid near very warm skin in formal settings. The undertone is perfect; the depth level needs to be managed with a deeper anchor.',
  },
  {
    id: 'amber-gold',
    name: 'Amber Gold',
    hex: '#D4980A',
    tier: 'good',
    fitScore: 70,
    tags: ['warm bright gold', 'luminous', 'statement'],
    explanation:
      'A brighter, more saturated gold than Dark Gold — vivid enough to function as a statement colour in accessories and accent pieces. As a clothing colour near the face it reads as slightly bright for this profile, but in lower-body and accent contexts the warmth creates a striking harmony with golden skin.',
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
    id: 'ash-gray',
    name: 'Ash Gray',
    hex: '#B2B2B2',
    tier: 'avoid',
    fitScore: 14,
    tags: ['cool light', 'washes out', 'wrong profile'],
    explanation:
      'A light cool gray that simultaneously clashes with warm undertones and fails to provide enough depth for this colouring. Ash Gray creates a double negative: the cool temperature fights golden skin, and the lightness provides no structure. One of the most consistently unflattering colours for warm-deep profiles.',
  },
  {
    id: 'silver',
    name: 'Silver',
    hex: '#C0C0C0',
    tier: 'avoid',
    fitScore: 12,
    tags: ['cool metallic', 'icy', 'wrong metal family'],
    explanation:
      'Silver is the metallic equivalent of icy blue — a cool, reflective tone that directly competes with warm golden undertones. Where gold amplifies warmth in the complexion, silver introduces ashiness and visual competition. Replace silver with gold, bronze, or copper in every accessory context for this profile.',
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    hex: '#36454F',
    tier: 'avoid',
    fitScore: 28,
    tags: ['cool dark gray', 'blue-toned', 'draining'],
    explanation:
      'A blue-toned dark gray — its depth provides some compensation but the cool blue undertone still creates an undertone conflict near warm skin. Charcoal can look professional in a suit context but near the face it reliably introduces a slight dullness. Replace with Espresso or Dark Sable for the same depth without the conflict.',
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
    id: 'sky-blue',
    name: 'Sky Blue',
    hex: '#87CEEB',
    tier: 'avoid',
    fitScore: 10,
    tags: ['cool light blue', 'Spring colour', 'washed out'],
    explanation:
      'Sky Blue is doubly wrong for this profile: it is both cool in undertone and too light in value. The airy, open quality reads as completely disconnected from the depth and warmth that define this colouring. Near the face, it creates a washed-out, flat effect that no accessory can fully compensate for.',
  },
  {
    id: 'powder-blue',
    name: 'Powder Blue',
    hex: '#B0D4E8',
    tier: 'avoid',
    fitScore: 8,
    tags: ['icy', 'maximally cool', 'wrong season'],
    explanation:
      'One of the most incorrect colours for this profile — the icy cool undertone and very low depth work against warm deep colouring on every measure. Powder Blue belongs to soft cool palettes and reads as a colour mistake on warm-deep colouring. No styling solution makes this work near the face.',
  },
  {
    id: 'royal-blue',
    name: 'Royal Blue',
    hex: '#4169E1',
    tier: 'avoid',
    fitScore: 20,
    tags: ['cool blue', 'undertone clash', 'draining'],
    explanation:
      'A strong, clearly cool blue that clashes directly with warm golden undertones. The depth provides some mitigation but the cool temperature is too dominant to be overridden. Royal Blue near warm skin creates a visible undertone fight — skin reads yellowed or dull in comparison to the blue coolness.',
  },
  {
    id: 'cobalt',
    name: 'Cobalt Blue',
    hex: '#0047AB',
    tier: 'avoid',
    fitScore: 22,
    tags: ['deep cool blue', 'high contrast', 'undertone fight'],
    explanation:
      'Cobalt has the depth that other blues lack, but its pure cool blue temperature creates an unmistakable undertone clash with warm golden skin. The high contrast makes the mismatch even more visible — the eye immediately perceives the temperature conflict. Deep blues only work for this profile if they have a warm or green base.',
  },
  {
    id: 'steel-blue',
    name: 'Steel Blue',
    hex: '#4682B4',
    tier: 'avoid',
    fitScore: 24,
    tags: ['cool blue-grey', 'muted clash', 'draining'],
    explanation:
      'A desaturated cool blue with grey — muted enough to avoid being garish but not warm enough to work. Steel Blue creates a flat, washed quality on warm colouring without enough saturation or depth to compensate through contrast. This is a colour that belongs to cool, light profiles where its crispness reads clearly.',
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
    id: 'cerulean',
    name: 'Cerulean',
    hex: '#007BA7',
    tier: 'avoid',
    fitScore: 22,
    tags: ['cool blue-green', 'too cool', 'draining'],
    explanation:
      'A clear cool blue-green — brighter and more saturated than Slate Blue but equally wrong in temperature. The cyan component makes the cool clash particularly visible against warm golden skin. Cerulean belongs to clear, cool palettes; on warm-deep colouring it creates an obvious temperature conflict at the neckline.',
  },
  {
    id: 'french-blue',
    name: 'French Blue',
    hex: '#5588BB',
    tier: 'avoid',
    fitScore: 22,
    tags: ['classic cool blue', 'undertone fight', 'draining'],
    explanation:
      'A classic mid-tone cool blue with wide cultural recognition and zero warmth. French Blue is perennially popular but perennially wrong for warm profiles — the classic white-shirt context works because the shirt neutralises the face proximity. As a garment at the neckline, it drains warm colouring reliably.',
  },
  {
    id: 'denim-blue',
    name: 'Denim Blue',
    hex: '#1560BD',
    tier: 'avoid',
    fitScore: 26,
    tags: ['cool indigo-blue', 'classic mismatch', 'depth helps little'],
    explanation:
      'A saturated cool blue — the colour of denim but at garment intensity. The depth helps slightly compared to lighter blues but the pure cool blue temperature creates a visible undertone clash near warm skin. Denim as a trouser fabric works because it is away from the face; as a neckline garment it reads as a temperature fight.',
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
    id: 'seafoam',
    name: 'Seafoam',
    hex: '#93E9BE',
    tier: 'avoid',
    fitScore: 12,
    tags: ['very cool', 'too light', 'Spring only'],
    explanation:
      'A pale cool blue-green — one of the worst performers for warm-deep colouring. Seafoam combines icy coolness with minimal depth, creating a stark, artificial look near warm skin. The almost fluorescent quality makes the temperature clash even more visible. This colour exists for cool, light colouring only.',
  },
  {
    id: 'sage-mist',
    name: 'Sage Mist',
    hex: '#B8C9B0',
    tier: 'avoid',
    fitScore: 18,
    tags: ['light cool green', 'no depth', 'wrong season'],
    explanation:
      'A pale, desaturated sage with very low depth — the light quality creates insufficient contrast for this profile, and the cool grey-green tone introduces an undertone conflict. Sage Mist reads as washed out on warm deep colouring, draining vitality from the face without offering any structural benefit.',
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
    id: 'pastel-yellow',
    name: 'Pastel Yellow',
    hex: '#FAF0A0',
    tier: 'avoid',
    fitScore: 10,
    tags: ['too light', 'washed out', 'wrong depth'],
    explanation:
      'Pastel yellow combines the wrong depth (too light) with a cool, bleached-out quality that lacks the warmth of mustard or ochre. On warm-deep colouring it creates a flat, unfocused effect near the face — there is nothing for the eye to anchor to. The correct yellow family for this profile is always darker and more saturated.',
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
    id: 'lilac',
    name: 'Lilac',
    hex: '#C8A2C8',
    tier: 'avoid',
    fitScore: 18,
    tags: ['cool soft purple', 'too light', 'washes out'],
    explanation:
      'A soft cool purple — lighter and more diffuse than Lavender but equally wrong in temperature. Lilac introduces a bluish coolness that competes with warm skin and creates a dull, undefined look near the face. The lightness provides no structural contrast and the cool undertone creates active conflict.',
  },
  {
    id: 'soft-violet',
    name: 'Soft Violet',
    hex: '#9B72CF',
    tier: 'avoid',
    fitScore: 24,
    tags: ['cool purple', 'mid-depth', 'undertone fight'],
    explanation:
      'A medium-depth cool purple — the blue base dominates the warmth and creates a visible clash with warm golden undertones. The mid-depth level means there is not enough darkness to compensate through depth, nor enough lightness to read as delicate. It occupies an uncomfortable middle ground that serves this profile poorly.',
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
    id: 'rose-pink',
    name: 'Rose Pink',
    hex: '#FF8DA1',
    tier: 'avoid',
    fitScore: 14,
    tags: ['cool bright pink', 'undertone clash', 'Spring colour'],
    explanation:
      'A clear, cool rose pink — the blue-based warmth of this family directly competes with the yellow-based warmth of golden skin. Rose Pink reads as fresh and clear on cool profiles and garish or clashing on warm ones. No amount of depth or saturation in other pieces compensates for this kind of direct undertone conflict.',
  },
  {
    id: 'blush',
    name: 'Blush',
    hex: '#FFB6C1',
    tier: 'avoid',
    fitScore: 10,
    tags: ['icy cool pink', 'wrong season', 'maximally unflattering'],
    explanation:
      'A pale cool pink — combines the wrong temperature with very low depth. Blush belongs to cool, light seasonal profiles and reads as a category error on warm-deep colouring. Near the face it creates a ghostly, drained effect by fighting both the undertone and the depth requirement simultaneously.',
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
    id: 'cool-fuchsia',
    name: 'Cool Fuchsia',
    hex: '#FF5FA0',
    tier: 'avoid',
    fitScore: 16,
    tags: ['vivid cool pink', 'maximum clash', 'wrong family'],
    explanation:
      'A vivid, high-energy cool pink-magenta that creates maximum undertone conflict on warm skin. The intensity amplifies the clash — what might be ignored in a muted version becomes glaring in this saturation. Cool Fuchsia belongs to high-contrast cool profiles where its clarity reads as power, not conflict.',
  },
  {
    id: 'glacier',
    name: 'Glacier',
    hex: '#80BFCE',
    tier: 'avoid',
    fitScore: 14,
    tags: ['icy blue-green', 'too cool', 'washes out'],
    explanation:
      'A pale, icy blue-green with winter-cool associations and zero warmth. Glacier introduces an almost mint-like coolness that is entirely incompatible with golden-olive skin. Near the face, the cool reflective quality creates a stark, artificial look — skin reads sallow rather than golden. A Spring-Summer cool colour through and through.',
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
  {
    id: 'cool-taupe',
    name: 'Cool Taupe',
    hex: '#A09898',
    tier: 'avoid',
    fitScore: 22,
    tags: ['cool neutral', 'ashy', 'drained'],
    explanation:
      'A cool pink-grey taupe that introduces ashiness near warm golden skin. Where warm taupe works with caveats, cool taupe actively competes — the pink-grey base reads as a direct temperature conflict with the yellow-gold base of warm colouring. Always check the undertone of taupe before wearing: this one is the wrong variety.',
  },
];
