import { useState } from 'react';
import { TIER_CONFIG } from '../data/palette';

const FILTERS = [
  { id: 'all',       label: 'All' },
  { id: 'excellent', label: 'Excellent' },
  { id: 'good',      label: 'Good' },
  { id: 'avoid',     label: 'Avoid' },
];

function SwatchButton({ color, isSelected, onClick }) {
  const [hovered, setHovered] = useState(false);
  const tier = TIER_CONFIG[color.tier];

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="animate-fade-slide-in flex flex-col items-center gap-1.5 p-2 rounded-xl"
      style={{
        backgroundColor: isSelected
          ? 'rgba(255,255,255,0.08)'
          : hovered
          ? 'rgba(255,255,255,0.05)'
          : 'transparent',
        border: isSelected
          ? '1px solid rgba(255,255,255,0.14)'
          : '1px solid transparent',
        transform: hovered && !isSelected ? 'scale(1.05)' : isSelected ? 'scale(1.0)' : 'scale(1)',
        transition: 'all 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        cursor: 'pointer',
        minWidth: 0,
      }}
      title={`${color.name} — ${tier.label}`}
      aria-pressed={isSelected}
      aria-label={`${color.name}, ${tier.label} tier, fit score ${color.fitScore}`}
    >
      {/* Swatch circle + tier indicator dot */}
      <div className="relative">
        <div
          className="w-11 h-11 rounded-full"
          style={{
            backgroundColor: color.hex,
            boxShadow: isSelected
              ? `0 0 0 3px #fff, 0 0 0 5px ${color.hex}60, 0 4px 18px ${color.hex}55`
              : hovered
              ? `0 0 0 2px rgba(255,255,255,0.3), 0 4px 14px ${color.hex}45`
              : `0 2px 8px ${color.hex}35`,
            transition: 'box-shadow 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />

        {/* Tier dot — bottom right of swatch */}
        <div
          className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full"
          style={{
            backgroundColor: tier.color,
            border: '2px solid #0A0A0F',
            boxShadow: isSelected ? `0 0 6px ${tier.color}80` : 'none',
          }}
        />
      </div>

      {/* Colour name */}
      <span
        className="text-xs font-medium text-center leading-tight"
        style={{
          color: isSelected
            ? 'rgba(255,255,255,0.9)'
            : hovered
            ? 'rgba(255,255,255,0.65)'
            : 'rgba(255,255,255,0.38)',
          maxWidth: 60,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          transition: 'color 0.18s',
        }}
      >
        {color.name}
      </span>
    </button>
  );
}

export default function ColorPalette({ palette, selectedColor, onSelect }) {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? palette : palette.filter((c) => c.tier === filter);

  return (
    <div className="space-y-4">

      {/* Filter tabs + count */}
      <div className="flex items-center gap-2 flex-wrap">
        {FILTERS.map((f) => {
          const isActive = filter === f.id;
          const tierConf = f.id !== 'all' ? TIER_CONFIG[f.id] : null;
          const count = f.id === 'all'
            ? palette.length
            : palette.filter((c) => c.tier === f.id).length;

          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: isActive
                  ? tierConf ? tierConf.bg : 'rgba(123,97,255,0.15)'
                  : 'rgba(255,255,255,0.04)',
                border: `1px solid ${
                  isActive
                    ? tierConf ? tierConf.border : 'rgba(123,97,255,0.3)'
                    : 'rgba(255,255,255,0.07)'
                }`,
                color: isActive
                  ? tierConf ? tierConf.color : '#9B80FF'
                  : 'rgba(255,255,255,0.38)',
                transition: 'all 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: 'scale(1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                }
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.38)';
                }
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
            >
              {tierConf && <span style={{ fontSize: '10px' }}>{tierConf.icon}</span>}
              {f.label}
              <span
                className="ml-0.5 px-1.5 py-0.5 rounded-full text-xs"
                style={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                  color: isActive ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
                }}
              >
                {count}
              </span>
            </button>
          );
        })}

        {/* Tier legend — right-aligned */}
        <div className="ml-auto hidden sm:flex items-center gap-4">
          {Object.entries(TIER_CONFIG).map(([key, t]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: t.color }}
              />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Swatch grid */}
      <div className="flex flex-wrap gap-1 swatch-grid" key={`${filter}-${palette[0]?.fitScore}`}>
        {filtered.map((color) => (
          <SwatchButton
            key={color.id}
            color={color}
            isSelected={selectedColor?.id === color.id}
            onClick={() => onSelect(color)}
          />
        ))}
      </div>

    </div>
  );
}
