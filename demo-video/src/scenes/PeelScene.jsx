import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DARK_TEXT, FONT, MUTED, PaperBackdrop, SmartLabel, StepBadge, useRise, useSceneFadeOut } from '../ui.jsx';

export const PEEL_DUR = 185;

export default function PeelScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(PEEL_DUR);

  // label slides out of the printer slot, then lifts free
  const slideOut = interpolate(frame, [22, 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.2, 0.8, 0.3, 1) });
  const lift = spring({ frame: frame - 74, fps, config: { damping: 14, stiffness: 60 }, durationInFrames: 50 });
  const led = frame > 96;

  const labelX = slideOut * 330 + lift * 110;
  const labelY = lift * -130;
  const labelRot = lift * -6;

  const badgeRise = useRise(4, 26);
  const titleRise = useRise(12, 40);
  const subRise = useRise(24, 30);

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <PaperBackdrop />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1.1fr', alignItems: 'center', padding: '0 120px', gap: 40 }}>
        <div>
          <div style={badgeRise}>
            <StepBadge n={1} />
          </div>
          <h2 style={{ ...titleRise, margin: '30px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 88, lineHeight: 1, letterSpacing: '-0.03em', color: DARK_TEXT }}>
            Print it.
            <br />
            Peel it.
          </h2>
          <p style={{ ...subRise, marginTop: 30, fontFamily: FONT, fontSize: 32, lineHeight: 1.5, color: MUTED, maxWidth: 600 }}>
            Labels come off a standard label printer &mdash; or activate from the app. Live in seconds, not install days.
          </p>
        </div>

        <div style={{ position: 'relative', height: 700 }}>
          {/* printer */}
          <svg width="560" height="420" viewBox="0 0 560 420" fill="none" style={{ position: 'absolute', left: 0, top: 190 }}>
            <rect x="20" y="60" width="420" height="280" rx="30" fill="#2A2521" />
            <rect x="20" y="60" width="420" height="280" rx="30" fill="url(#psheen)" />
            <defs>
              <linearGradient id="psheen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="0.4" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            <rect x="60" y="30" width="340" height="70" rx="18" fill="#1A1613" />
            {/* slot */}
            <rect x="60" y="170" width="360" height="26" rx="13" fill="#0A0E1A" />
            <rect x="60" y="170" width="360" height="26" rx="13" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            {/* status LED */}
            <circle cx="404" cy="120" r="10" fill={led ? '#00E5A0' : '#57504A'} />
            <text x="60" y="316" fill="rgba(255,255,255,0.4)" fontSize="20" fontFamily={FONT} fontWeight="600" letterSpacing="2">
              ZEBRA-COMPATIBLE
            </text>
          </svg>
          {/* label emerging from slot */}
          <div
            style={{
              position: 'absolute',
              left: 60 + labelX,
              top: 300 + labelY,
              transform: `rotate(${labelRot}deg) scale(0.82)`,
              transformOrigin: 'left center',
              opacity: interpolate(slideOut, [0, 0.12], [0, 1], { extrapolateRight: 'clamp' }),
              filter: lift > 0.1 ? 'drop-shadow(0 40px 34px rgba(26,22,19,0.28))' : 'none',
            }}
          >
            <SmartLabel scale={0.95} active={led} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
