/*
 * Colour Draping Tool — Dark Autumn · Winter
 * ──────────────────────────────────────────
 * Design rationale:
 *  - Dark-first (Revolut × Apple): #0A0A0F base, glass cards, depth layers
 *  - Ambient glow: background radiates the selected colour at ~5% opacity
 *  - When a photo is uploaded, Canvas API samples the face region for skin tone,
 *    undertone warmth, depth, and contrast — then re-scores every palette colour
 *  - Original curated data shown before upload; dynamic analysis takes over after
 */

import { useState, useMemo } from 'react';
import { palette } from './data/palette';
import { analyzeImage, buildAdjustedPalette } from './utils/imageAnalysis';
import DrapingCanvas from './components/DrapingCanvas';
import VerdictPanel from './components/VerdictPanel';
import ColorPalette from './components/ColorPalette';
import FaceAnalysisPanel from './components/FaceAnalysisPanel';

export default function App() {
  const [selectedId, setSelectedId]         = useState(palette[0].id);
  const [photoUrl, setPhotoUrl]             = useState(null);
  const [detectedProfile, setDetectedProfile] = useState(null);
  const [isAnalyzing, setIsAnalyzing]       = useState(false);

  // Re-score the full palette whenever a profile is detected
  const activePalette = useMemo(() => {
    if (!detectedProfile) return palette;
    return buildAdjustedPalette(palette, detectedProfile);
  }, [detectedProfile]);

  // Keep selectedColor in sync with activePalette
  const selectedColor = activePalette.find(c => c.id === selectedId) ?? activePalette[0];

  // When a photo is uploaded, trigger canvas analysis
  const handlePhotoUpload = (url) => {
    setPhotoUrl(url);
    setIsAnalyzing(true);
    setDetectedProfile(null);

    const img = new Image();
    img.onload = () => {
      const profile = analyzeImage(img);
      setDetectedProfile(profile);
      setIsAnalyzing(false);
      // Auto-select the top-scoring colour after analysis
      const adjusted = buildAdjustedPalette(palette, profile);
      const top = [...adjusted].sort((a, b) => b.fitScore - a.fitScore)[0];
      setSelectedId(top.id);
    };
    img.src = url;
  };

  const bgAccent = selectedColor?.hex ?? '#1C1C2E';

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#0A0A0F', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Ambient background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 28% 38%, ${bgAccent}0D 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 72% 65%, ${bgAccent}07 0%, transparent 55%)
          `,
          transition: 'all 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-semibold text-white" style={{ letterSpacing: '-0.03em' }}>
                Colour Draping
              </h1>
              <div
                className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: 'rgba(123,97,255,0.14)', border: '1px solid rgba(123,97,255,0.24)', color: '#9B80FF' }}
              >
                {detectedProfile ? 'Custom Profile' : 'Dark Autumn · Winter'}
              </div>
            </div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
              {detectedProfile
                ? 'Palette re-scored from your photo analysis'
                : 'Warm Mediterranean · near-black hair · deep brown eyes'}
            </p>
          </div>

          {/* Profile summary chips */}
          {detectedProfile ? (
            <DetectedProfileChips profile={detectedProfile} />
          ) : (
            <DefaultProfileChips />
          )}
        </header>

        {/* Analysis banner */}
        {isAnalyzing && (
          <div
            className="rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-3 animate-fade-in"
            style={{ backgroundColor: 'rgba(123,97,255,0.10)', border: '1px solid rgba(123,97,255,0.2)', color: '#9B80FF' }}
          >
            <span className="inline-block w-3 h-3 rounded-full border-2 border-current border-t-transparent animate-spin" />
            Analysing photo — sampling skin tone, undertone &amp; depth…
          </div>
        )}

        {/* Analysis complete banner */}
        {detectedProfile && !isAnalyzing && (
          <div
            key="analysis-done"
            className="rounded-xl px-4 py-3 flex items-center gap-3 animate-fade-slide-in"
            style={{ backgroundColor: 'rgba(48,209,88,0.08)', border: '1px solid rgba(48,209,88,0.18)' }}
          >
            <span style={{ color: '#30D158', fontSize: 13 }}>✦</span>
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Analysis complete — all{' '}
              <span className="text-white font-semibold">{activePalette.length} colours</span> re-scored
              for your colouring.
            </span>
            <button
              className="ml-auto text-xs font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.45)' }}
              onClick={() => { setDetectedProfile(null); setPhotoUrl(null); setSelectedId(palette[0].id); }}
            >
              Reset
            </button>
          </div>
        )}

        {/* ── Main: Draping canvas + Verdict ──────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div
            className="rounded-2xl p-6 flex flex-col items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.065)', minHeight: 440 }}
          >
            <DrapingCanvas
              selectedColor={selectedColor}
              photoUrl={photoUrl}
              onPhotoUpload={handlePhotoUpload}
              detectedProfile={detectedProfile}
              isAnalyzing={isAnalyzing}
            />
          </div>

          <VerdictPanel selectedColor={selectedColor} isCustomProfile={!!detectedProfile} />
        </div>

        {/* ── Palette ─────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-5 sm:p-6"
          style={{ backgroundColor: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.065)' }}
        >
          <div className="mb-5">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="text-base font-semibold text-white" style={{ letterSpacing: '-0.015em' }}>
                Palette
              </h2>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {activePalette.length} colours
                {detectedProfile ? ' · re-scored for your photo' : ' · curated for this profile'}
              </p>
            </div>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Click any swatch to drape it and read the analysis
            </p>
          </div>

          <ColorPalette
            palette={activePalette}
            selectedColor={selectedColor}
            onSelect={(c) => setSelectedId(c.id)}
            filter="all"
            onFilterChange={() => {}}
            showFilter
          />
        </div>

        {/* ── Face Analysis ───────────────────────────────────────── */}
        {detectedProfile && !isAnalyzing && (
          <FaceAnalysisPanel profile={detectedProfile} palette={activePalette} />
        )}

        {/* ── How it works ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: '◎', title: 'The drape ring', body: 'The coloured ring simulates a fabric swatch held next to your face — the core technique professional analysts use in person.' },
            { icon: '⬡', title: 'Undertone harmony', body: detectedProfile ? 'Scores were calculated from your photo\'s detected skin undertone, depth, and saturation profile.' : 'Colours either harmonise with warm golden-olive skin or fight it. The fit score and explanation tell you exactly which and why.' },
            { icon: '◈', title: 'Three tiers', body: 'Excellent colours maximise your natural depth. Good colours work with caveats. Avoid colours drain or clash — retire them.' },
          ].map(card => (
            <div
              key={card.title}
              className="rounded-xl p-4 space-y-1.5"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.055)' }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: 'rgba(123,97,255,0.7)', fontSize: '15px' }}>{card.icon}</span>
                <h3 className="text-xs font-semibold text-white" style={{ letterSpacing: '-0.01em' }}>{card.title}</h3>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>{card.body}</p>
            </div>
          ))}
        </div>

        <footer className="text-center pb-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Colour analysis · {detectedProfile ? 'Custom profile from photo' : 'Dark Autumn · Winter · warm Mediterranean colouring'}
          </p>
        </footer>
      </div>
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function DefaultProfileChips() {
  return (
    <div
      className="hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}
    >
      {[
        { color: '#9B6438', label: 'Warm undertone' },
        { color: '#160A02', label: 'Near-black hair' },
        { color: '#3D1C02', label: 'Deep brown eyes' },
      ].map(({ color, label }, i) => (
        <span key={label} className="flex items-center gap-1.5">
          {i > 0 && <span style={{ width: 1, height: 12, backgroundColor: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />}
          <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: color }} />
          {label}
        </span>
      ))}
    </div>
  );
}

function DetectedProfileChips({ profile }) {
  const undertoneLabel = profile.undertone > 0.65 ? 'Warm' : profile.undertone < 0.38 ? 'Cool' : 'Neutral';
  const depthLabel     = profile.depth    > 0.65 ? 'Deep' : profile.depth    < 0.40 ? 'Light' : 'Medium';
  const contrastLabel  = profile.contrast > 0.55 ? 'High contrast' : profile.contrast < 0.30 ? 'Low contrast' : 'Medium contrast';

  return (
    <div
      className="hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs animate-fade-in"
      style={{ backgroundColor: 'rgba(48,209,88,0.07)', border: '1px solid rgba(48,209,88,0.16)', color: 'rgba(255,255,255,0.55)' }}
    >
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: profile.skinHex, boxShadow: `0 0 6px ${profile.skinHex}80` }} />
        {undertoneLabel} undertone
      </span>
      <span style={{ width: 1, height: 12, backgroundColor: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: profile.hairHex }} />
        {depthLabel} colouring
      </span>
      <span style={{ width: 1, height: 12, backgroundColor: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
      <span>{contrastLabel}</span>
    </div>
  );
}
