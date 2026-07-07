import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CardboardBox, DARK_TEXT, FONT, MUTED, ORANGE, PaperBackdrop, SmartLabel, StepBadge, useRise, useSceneFadeOut } from '../ui.jsx';

export const STICK_DUR = 185;

export default function StickScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(STICK_DUR);

  const boxIn = spring({ frame: frame - 2, fps, config: { damping: 16, stiffness: 80 }, durationInFrames: 40 });
  const land = spring({ frame: frame - 34, fps, config: { damping: 13, stiffness: 90 }, durationInFrames: 45 });
  const landed = land > 0.92;

  const badgeRise = useRise(4, 26);
  const titleRise = useRise(12, 40);
  const subRise = useRise(24, 30);

  const rippleCount = 3;

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <PaperBackdrop />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1.1fr 1fr', alignItems: 'center', padding: '0 120px', gap: 40 }}>
        <div style={{ position: 'relative', height: 760, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ opacity: boxIn, transform: `translateY(${(1 - boxIn) * 90}px)` }}>
            <CardboardBox scale={1.7} />
          </div>
          {/* label flying onto the box */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${(1 - land) * -260}px, ${(1 - land) * -340}px) rotate(${(1 - land) * -14}deg) scale(${0.72 + land * 0.03})`,
              filter: landed ? 'none' : 'drop-shadow(0 50px 40px rgba(26,22,19,0.3))',
              opacity: frame < 30 ? 0 : 1,
            }}
          >
            <SmartLabel scale={0.85} active={landed} />
          </div>
          {/* BLE ripples after landing */}
          {landed &&
            Array.from({ length: rippleCount }, (_, i) => {
              const t = ((frame - 80 + i * 18) % 54) / 54;
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: 120 + t * 560,
                    height: 120 + t * 560,
                    marginLeft: -(120 + t * 560) / 2,
                    marginTop: -(120 + t * 560) / 2,
                    borderRadius: '50%',
                    border: `3px solid ${ORANGE}`,
                    opacity: (1 - t) * 0.5,
                  }}
                />
              );
            })}
        </div>

        <div>
          <div style={badgeRise}>
            <StepBadge n={2} />
          </div>
          <h2 style={{ ...titleRise, margin: '30px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 88, lineHeight: 1, letterSpacing: '-0.03em', color: DARK_TEXT }}>
            Stick it on anything.
          </h2>
          <p style={{ ...subRise, marginTop: 30, fontFamily: FONT, fontSize: 32, lineHeight: 1.5, color: MUTED, maxWidth: 620 }}>
            Package, pallet, crate or asset. No installers, no wiring, no base stations &mdash; it starts broadcasting the moment it lands.
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
}
