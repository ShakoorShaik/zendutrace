import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DARK_TEXT, FONT, GREEN, MUTED, PaperBackdrop, StepBadge, useRise, useSceneFadeOut } from '../ui.jsx';

export const DELIVERED_DUR = 200;

const EVENTS = [
  { time: '08:02', text: 'Activated — Toronto yard', delay: 30 },
  { time: '09:14', text: 'Departed — Hwy 401 East', delay: 50 },
  { time: '11:47', text: 'Temp verified — -2.0°C in range', delay: 70 },
  { time: '14:32', text: 'Delivered — Montreal DC', delay: 90, final: true },
];

export default function DeliveredScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(DELIVERED_DUR);

  const badgeRise = useRise(4, 26);
  const titleRise = useRise(12, 40);
  const subRise = useRise(24, 30);
  const checkPop = spring({ frame: frame - 108, fps, config: { damping: 11, stiffness: 160 } });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <PaperBackdrop />
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '0 120px', gap: 80 }}>
        <div>
          <div style={badgeRise}>
            <StepBadge n={5} />
          </div>
          <h2 style={{ ...titleRise, margin: '30px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 88, lineHeight: 1, letterSpacing: '-0.03em', color: DARK_TEXT }}>
            Delivery, proven.
          </h2>
          <p style={{ ...subRise, marginTop: 30, fontFamily: FONT, fontSize: 32, lineHeight: 1.5, color: MUTED, maxWidth: 620 }}>
            Every step timestamped &mdash; an audit-ready chain of custody from activation to hand-off. Then the label is recycled.
          </p>
        </div>

        {/* custody timeline card */}
        <div style={{ position: 'relative', borderRadius: 26, background: '#FFFFFF', border: '1px solid rgba(26,22,19,0.1)', boxShadow: '0 60px 120px -50px rgba(26,22,19,0.4)', padding: '44px 48px' }}>
          <div style={{ fontFamily: FONT, fontSize: 22, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9A938A' }}>
            Chain of custody &middot; Pallet #A-114
          </div>
          <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column' }}>
            {EVENTS.map((e, i) => {
              const pop = spring({ frame: frame - e.delay, fps, config: { damping: 14, stiffness: 150 } });
              return (
                <div key={e.time} style={{ display: 'flex', gap: 24, opacity: frame < e.delay ? 0 : 1, transform: `translateY(${(1 - pop) * 24}px)` }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        background: e.final ? GREEN : 'rgba(194,65,12,0.14)',
                        border: e.final ? 'none' : '2px solid rgba(194,65,12,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {e.final ? (
                        <svg width="15" height="15" viewBox="0 0 12 12"><path d="M2 6.4 4.6 9 10 3" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : (
                        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#C2410C' }} />
                      )}
                    </div>
                    {i < EVENTS.length - 1 && <div style={{ width: 2.5, flex: 1, minHeight: 44, background: 'rgba(26,22,19,0.1)' }} />}
                  </div>
                  <div style={{ paddingBottom: i < EVENTS.length - 1 ? 34 : 0 }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 700, color: '#9A3412' }}>{e.time}</span>
                    <span style={{ marginLeft: 18, fontFamily: FONT, fontSize: 27, fontWeight: e.final ? 700 : 500, color: e.final ? GREEN : '#2A2521' }}>{e.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {/* big check stamp */}
          <div
            style={{
              position: 'absolute',
              top: -44,
              right: -44,
              transform: `scale(${checkPop}) rotate(${(1 - checkPop) * 40}deg)`,
              opacity: frame < 108 ? 0 : 1,
              width: 130,
              height: 130,
              borderRadius: '50%',
              background: GREEN,
              border: '6px solid #FFFFFF',
              boxShadow: '0 30px 60px -18px rgba(30,138,91,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="62" height="62" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5 9.5 18 20 6" />
            </svg>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
