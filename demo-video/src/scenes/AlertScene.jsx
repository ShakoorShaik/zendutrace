import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DarkBackdrop, FONT, GREEN, MINT, ORANGE_LIGHT, useRise, useSceneFadeOut } from '../ui.jsx';

export const ALERT_DUR = 200;

const RED = '#E5484D';

export default function AlertScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(ALERT_DUR);

  const titleRise = useRise(4, 36);
  const chartIn = spring({ frame: frame - 10, fps, config: { damping: 16, stiffness: 80 }, durationInFrames: 40 });

  // temperature trace: stable, then spike, then recovery after "action"
  const draw = interpolate(frame, [26, 150], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.quad) });
  const alertAt = 0.6; // point on the trace where the breach happens
  const alertOn = draw > alertAt;
  const alertPop = spring({ frame: frame - 92, fps, config: { damping: 12, stiffness: 170 } });
  const savedIn = spring({ frame: frame - 150, fps, config: { damping: 14, stiffness: 120 } });

  // chart path: y=340 is -2°C baseline, threshold +4°C at y=210, spike to y=185, recover to y=300
  const TRACE = 'M 60 340 L 300 336 L 470 330 L 600 300 L 700 240 L 760 185 L 860 200 L 990 280 L 1180 300';

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <DarkBackdrop glow="rgba(229,72,77,0.14)" />
      <div style={{ position: 'absolute', top: 90, left: 0, right: 0, textAlign: 'center' }}>
        <h2 style={{ ...titleRise, margin: 0, fontFamily: FONT, fontWeight: 700, fontSize: 82, letterSpacing: '-0.03em', color: '#F5F7FB' }}>
          Catch failures <span style={{ color: ORANGE_LIGHT }}>before they cost you.</span>
        </h2>
      </div>

      {/* chart card */}
      <div
        style={{
          position: 'absolute',
          left: 200,
          right: 200,
          top: 280,
          bottom: 130,
          borderRadius: 28,
          background: '#0D1322',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 60px 120px -40px rgba(0,0,0,0.8)',
          opacity: chartIn,
          transform: `translateY(${(1 - chartIn) * 70}px)`,
          overflow: 'hidden',
        }}
      >
        <div style={{ padding: '28px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ fontFamily: FONT, fontSize: 26, fontWeight: 700, color: '#fff' }}>Pallet #A-114 &middot; temperature</span>
          <span style={{ fontFamily: FONT, fontSize: 22, color: 'rgba(255,255,255,0.5)' }}>Threshold: +4.0&deg;C</span>
        </div>
        <svg width="1240" height="420" viewBox="0 0 1240 420" style={{ width: '100%', height: 'calc(100% - 90px)' }} preserveAspectRatio="none">
          {/* threshold line */}
          <line x1="60" y1="210" x2="1180" y2="210" stroke={RED} strokeWidth="2.5" strokeDasharray="12 10" opacity="0.65" />
          <text x="1180" y="196" textAnchor="end" fill={RED} fontSize="20" fontFamily={FONT} fontWeight="600" opacity="0.85">
            +4.0&deg;C breach threshold
          </text>
          {/* baseline */}
          <line x1="60" y1="340" x2="1180" y2="340" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <text x="60" y="368" fill="rgba(255,255,255,0.4)" fontSize="19" fontFamily={FONT}>
            -2.0&deg;C target
          </text>
          {/* trace */}
          <path d={TRACE} fill="none" stroke={ORANGE_LIGHT} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />
          {/* breach point marker */}
          {alertOn && (
            <g transform="translate(760,185)">
              <circle r={16 + Math.sin(frame / 4) * 4} fill="rgba(229,72,77,0.3)" />
              <circle r="9" fill={RED} stroke="#fff" strokeWidth="3" />
            </g>
          )}
        </svg>
      </div>

      {/* alert card */}
      <div
        style={{
          position: 'absolute',
          right: 240,
          top: 330,
          transform: `scale(${alertPop})`,
          transformOrigin: 'top right',
          opacity: frame < 92 ? 0 : 1,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          padding: '24px 32px',
          borderRadius: 20,
          background: 'rgba(229,72,77,0.14)',
          border: `2.5px solid ${RED}`,
          boxShadow: '0 30px 70px -20px rgba(229,72,77,0.5)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ width: 56, height: 56, borderRadius: 14, background: RED, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round">
            <path d="M12 3 2 20h20z" strokeLinejoin="round" />
            <path d="M12 10v5M12 17.6v.4" />
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: FONT, fontSize: 27, fontWeight: 700, color: '#fff' }}>Temperature breach &middot; +4.2&deg;C</div>
          <div style={{ marginTop: 4, fontFamily: FONT, fontSize: 21, color: 'rgba(255,255,255,0.7)' }}>Alert sent to ops &amp; driver in seconds</div>
        </div>
      </div>

      {/* resolution banner */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 150,
          transform: `translateX(-50%) scale(${savedIn})`,
          opacity: frame < 150 ? 0 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          padding: '20px 38px',
          borderRadius: 999,
          background: 'rgba(30,138,91,0.16)',
          border: `2.5px solid ${GREEN}`,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={MINT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12.5 9.5 18 20 6" />
        </svg>
        <span style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color: '#F5F7FB' }}>
          Reefer reset &middot; load saved &middot; zero pallets lost
        </span>
      </div>
    </AbsoluteFill>
  );
}
