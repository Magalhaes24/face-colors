import { TIER_CONFIG } from '../data/palette';

// Score bar — colour shifts from red → amber → green based on fit
function ScoreBar({ score }) {
  const color =
    score >= 80 ? '#30D158'
    : score >= 62 ? '#7ED148'
    : score >= 44 ? '#FFD60A'
    : '#FF453A';

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium tracking-wide uppercase"
          style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}
        >
          Fit Score
        </span>
        <span
          className="text-sm font-semibold tabular-nums"
          style={{ color, transition: 'color 0.35s' }}
        >
          {score}
          <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>/100</span>
        </span>
      </div>

      {/* Track */}
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
      >
        {/* Fill */}
        <div
          className="h-full rounded-full"
          style={{
            width: `${score}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}70`,
            transition: 'width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.35s',
          }}
        />
      </div>

      {/* Scale labels */}
      <div className="flex justify-between">
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Avoid</span>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Good</span>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>Excellent</span>
      </div>
    </div>
  );
}

// Empty state
function EmptyState() {
  return (
    <div
      className="rounded-2xl flex flex-col items-center justify-center gap-3 text-center"
      style={{
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        minHeight: 420,
        padding: '32px',
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
      >
        🎨
      </div>
      <div>
        <p className="text-sm font-medium text-white mb-1">Select a colour</p>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Click any swatch below to see the drape analysis
        </p>
      </div>
    </div>
  );
}

export default function VerdictPanel({ selectedColor }) {
  if (!selectedColor) return <EmptyState />;

  const tier = TIER_CONFIG[selectedColor.tier];

  return (
    // Outer glass card — persists across colour changes
    <div
      className="rounded-2xl h-full"
      style={{
        backgroundColor: 'rgba(255,255,255,0.038)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.2)',
        minHeight: 420,
      }}
    >
      {/* Inner content re-animates on colour change via key */}
      <div
        key={selectedColor.id}
        className="animate-fade-slide-in p-6 space-y-5 h-full flex flex-col"
      >

        {/* ── Colour identity ───────────────────────────────── */}
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex-shrink-0"
            style={{
              backgroundColor: selectedColor.hex,
              boxShadow: `0 4px 20px ${selectedColor.hex}55`,
            }}
          />
          <div className="min-w-0">
            <h3
              className="text-base font-semibold text-white leading-tight truncate"
              style={{ letterSpacing: '-0.015em' }}
            >
              {selectedColor.name}
            </h3>
            <code
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}
            >
              {selectedColor.hex.toUpperCase()}
            </code>
          </div>
        </div>

        {/* ── Tier badge ────────────────────────────────────── */}
        <div
          className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: tier.bg,
            border: `1px solid ${tier.border}`,
            color: tier.color,
          }}
        >
          <span style={{ fontSize: '11px' }}>{tier.icon}</span>
          {tier.label}
        </div>

        {/* ── Score bar ─────────────────────────────────────── */}
        <ScoreBar score={selectedColor.fitScore} />

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }} />

        {/* ── Tier meaning ──────────────────────────────────── */}
        <p
          className="text-xs font-medium"
          style={{ color: tier.color, opacity: 0.85 }}
        >
          {tier.description}
        </p>

        {/* ── Keyword tags ──────────────────────────────────── */}
        <div className="flex flex-wrap gap-2">
          {selectedColor.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.09)',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Plain-English explanation ─────────────────────── */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          {selectedColor.explanation}
        </p>

        {/* ── Tier legend row ───────────────────────────────── */}
        <div
          className="flex items-center gap-3 pt-1"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {Object.entries(TIER_CONFIG).map(([key, t]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: t.color,
                  opacity: selectedColor.tier === key ? 1 : 0.3,
                }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: selectedColor.tier === key ? t.color : 'rgba(255,255,255,0.25)',
                }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
