import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DARK_TEXT, Eyebrow, FONT, MUTED, PaperBackdrop, SmartLabel, useRise, useSceneFadeOut } from '../ui.jsx';

export const PRODUCT_INTRO_DUR = 190;

const CHIPS = ['Printed battery', 'BLE + cellular', 'Temperature sensing', 'Fully recyclable', 'Airline approved'];

export default function ProductIntro() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(PRODUCT_INTRO_DUR);

  const labelSpring = spring({ frame: frame - 8, fps, config: { damping: 15, stiffness: 70 }, durationInFrames: 55 });
  const labelTilt = interpolate(frame, [0, PRODUCT_INTRO_DUR], [-7, -3]);
  const float = Math.sin(frame / 22) * 8;

  const titleRise = useRise(20, 46);
  const subRise = useRise(32, 36);

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <PaperBackdrop />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '0 120px', gap: 60 }}>
        <div>
          <div style={{ ...useRise(10, 30) }}>
            <Eyebrow>Meet the fix</Eyebrow>
          </div>
          <h1 style={{ ...titleRise, margin: '26px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 96, lineHeight: 0.98, letterSpacing: '-0.03em', color: DARK_TEXT }}>
            A shipping label that tracks itself.
          </h1>
          <p style={{ ...subRise, marginTop: 32, fontFamily: FONT, fontSize: 34, lineHeight: 1.45, color: MUTED, maxWidth: 640 }}>
            ZenduTrace&#8482; is a paper-thin smart label with a printed battery and radio built in.
          </p>
          <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            {CHIPS.map((c, i) => {
              const chipIn = spring({ frame: frame - 52 - i * 6, fps, config: { damping: 14, stiffness: 160 } });
              return (
                <span
                  key={c}
                  style={{
                    opacity: frame < 52 + i * 6 ? 0 : 1,
                    transform: `scale(${chipIn})`,
                    padding: '12px 24px',
                    borderRadius: 999,
                    background: 'rgba(194,65,12,0.08)',
                    border: '1px solid rgba(194,65,12,0.22)',
                    fontFamily: FONT,
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#9A3412',
                  }}
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              opacity: labelSpring,
              transform: `translateY(${(1 - labelSpring) * 120 + float}px) rotate(${labelTilt}deg) scale(${0.9 + labelSpring * 0.1})`,
              filter: 'drop-shadow(0 60px 50px rgba(26,22,19,0.25))',
            }}
          >
            <SmartLabel scale={1.5} active={frame > 70} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
