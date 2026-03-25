import { useRef } from 'react';
import { Upload } from 'lucide-react';

// SVG face placeholder — warm Mediterranean colouring
// Near-black hair, deep brown eyes, golden-olive skin
function FacePlaceholder() {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Placeholder face — upload your photo to personalise"
    >
      {/* Background skin tone */}
      <rect width="220" height="220" fill="#7A4E2A" />

      {/* Shoulders */}
      <path
        d="M0 220 Q22 178 58 166 Q74 161 90 159 Q100 157 110 157 Q120 157 130 159 Q146 161 162 166 Q198 178 220 220Z"
        fill="#6B3E1E"
      />

      {/* Neck */}
      <path
        d="M80 220 Q80 168 88 150 Q95 136 110 132 Q125 136 132 150 Q140 168 140 220Z"
        fill="#8B5A30"
      />

      {/* Face */}
      <ellipse cx="110" cy="100" rx="52" ry="62" fill="#9B6438" />

      {/* Hair — main volume */}
      <ellipse cx="110" cy="52" rx="56" ry="46" fill="#160A02" />

      {/* Hair — side curtains */}
      <path
        d="M58 82 Q52 118 56 142 Q60 158 72 168"
        stroke="#160A02"
        strokeWidth="24"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M162 82 Q168 118 164 142 Q160 158 148 168"
        stroke="#160A02"
        strokeWidth="24"
        fill="none"
        strokeLinecap="round"
      />

      {/* Eyebrows */}
      <path
        d="M82 80 Q91 74 100 78"
        stroke="#2C1005"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M120 78 Q129 74 138 80"
        stroke="#2C1005"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Eyes */}
      <ellipse cx="91" cy="96" rx="10" ry="7.5" fill="#1C0800" />
      <ellipse cx="129" cy="96" rx="10" ry="7.5" fill="#1C0800" />

      {/* Eye shine */}
      <ellipse cx="94.5" cy="93" rx="3" ry="2.2" fill="rgba(255,255,255,0.45)" />
      <ellipse cx="132.5" cy="93" rx="3" ry="2.2" fill="rgba(255,255,255,0.45)" />

      {/* Nose bridge + tip */}
      <path
        d="M107 106 Q110 122 113 106"
        stroke="#7A4820"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M100 122 Q110 128 120 122"
        stroke="#7A4820"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Lips */}
      <path
        d="M95 138 Q102 132 110 134 Q118 132 125 138"
        stroke="#7A3028"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M95 138 Q110 146 125 138"
        stroke="#7A3028"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Subtle cheek warmth */}
      <ellipse cx="78" cy="114" rx="14" ry="8" fill="rgba(180,90,60,0.18)" />
      <ellipse cx="142" cy="114" rx="14" ry="8" fill="rgba(180,90,60,0.18)" />
    </svg>
  );
}

export default function DrapingCanvas({ selectedColor, photoUrl, onPhotoUpload, detectedProfile, isAnalyzing }) {
  const fileInputRef = useRef(null);
  const ringColor = selectedColor?.hex ?? '#2A1F3D';

  return (
    <div className="flex flex-col items-center gap-5 w-full">

      {/* Draping canvas — circular photo with fabric ring */}
      <div
        className="relative flex items-center justify-center"
        style={{ padding: '44px' }}
      >
        {/* Far ambient glow — responds to ring colour */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${ringColor}22 0%, transparent 68%)`,
            transform: 'scale(1.6)',
            transition: 'all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />

        {/* Fabric ring — main draped swatch simulation */}
        <div
          className="relative rounded-full"
          style={{
            padding: '40px',
            backgroundColor: ringColor,
            // Inset shadows simulate fabric depth and the ring wrapping inward
            boxShadow: `
              inset 0 6px 18px rgba(0,0,0,0.30),
              inset 0 -4px 12px rgba(255,255,255,0.06),
              0 0 70px ${ringColor}40,
              0 0 30px ${ringColor}28,
              0 8px 40px rgba(0,0,0,0.55)
            `,
            transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            // Subtle directional gradient within the ring to simulate fabric weave
            backgroundImage: `linear-gradient(
              138deg,
              ${ringColor}f5 0%,
              ${ringColor}ff 28%,
              ${ringColor}d8 55%,
              ${ringColor}f0 80%,
              ${ringColor}f8 100%
            )`,
          }}
        >
          {/* Thin inner lip — separates ring from face naturally */}
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 220,
              height: 220,
              boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.55), inset 0 -2px 8px rgba(0,0,0,0.25)',
            }}
          >
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="Your face for colour analysis"
                className="w-full h-full object-cover"
                draggable={false}
              />
            ) : (
              <FacePlaceholder />
            )}
          </div>
        </div>
      </div>

      {/* Active colour label */}
      {selectedColor && (
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: `${ringColor}18`,
            border: `1px solid ${ringColor}35`,
            color: ringColor,
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{
              backgroundColor: ringColor,
              boxShadow: `0 0 6px ${ringColor}80`,
            }}
          />
          {selectedColor.name}
          <span style={{ color: `${ringColor}80` }}>·</span>
          <span style={{ color: `${ringColor}90`, fontFamily: 'monospace' }}>
            {ringColor.toUpperCase()}
          </span>
        </div>
      )}

      {/* Upload CTA */}
      <button
        onClick={() => fileInputRef.current?.click()}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
        style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.09)',
          color: 'rgba(255,255,255,0.45)',
          transition: 'all 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.09)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)';
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
        onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
      >
        <Upload size={14} />
        {photoUrl ? 'Change photo' : 'Upload your photo'}
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onPhotoUpload(URL.createObjectURL(file));
        }}
      />

      {/* Detected profile mini-card */}
      {isAnalyzing && (
        <div className="flex items-center gap-2 text-xs animate-fade-in" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <span className="w-3 h-3 rounded-full border-2 border-current border-t-transparent inline-block animate-spin" />
          Analysing…
        </div>
      )}

      {detectedProfile && !isAnalyzing && (
        <div
          key="profile-card"
          className="w-full rounded-xl p-3 space-y-2 animate-fade-slide-in"
          style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
            DETECTED PROFILE
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {[
              { swatch: detectedProfile.skinHex, label: detectedProfile.undertone > 0.65 ? 'Warm undertone' : detectedProfile.undertone < 0.38 ? 'Cool undertone' : 'Neutral undertone' },
              { swatch: detectedProfile.hairHex, label: detectedProfile.depth > 0.65 ? 'Deep colouring' : detectedProfile.depth < 0.40 ? 'Light colouring' : 'Medium colouring' },
              { swatch: null, label: detectedProfile.contrast > 0.55 ? 'High contrast' : detectedProfile.contrast < 0.30 ? 'Low contrast' : 'Medium contrast' },
            ].map(({ swatch, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {swatch
                  ? <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: swatch, boxShadow: `0 0 5px ${swatch}60` }} />
                  : <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
                }
                {label}
              </span>
            ))}
          </div>
        </div>
      )}

      {!photoUrl && (
        <p className="text-xs text-center max-w-[200px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Upload your photo to re-score the palette for your colouring
        </p>
      )}
    </div>
  );
}
