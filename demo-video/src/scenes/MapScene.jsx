import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { DarkBackdrop, FONT, GREEN, MINT, ORANGE, ORANGE_LIGHT, StepBadge, useRise, useSceneFadeOut } from '../ui.jsx';

export const MAP_DUR = 270;

// quadratic-ish route across the dashboard map (dashboard coords 1280x640)
const ROUTE = 'M 120 520 Q 420 380 640 300 Q 880 215 1150 130';

function routePoint(t) {
  // de Casteljau across the two joined quadratics
  const q = (p0, p1, p2, u) => ({
    x: (1 - u) * (1 - u) * p0.x + 2 * (1 - u) * u * p1.x + u * u * p2.x,
    y: (1 - u) * (1 - u) * p0.y + 2 * (1 - u) * u * p1.y + u * u * p2.y,
  });
  if (t < 0.5) return q({ x: 120, y: 520 }, { x: 420, y: 380 }, { x: 640, y: 300 }, t * 2);
  return q({ x: 640, y: 300 }, { x: 880, y: 215 }, { x: 1150, y: 130 }, (t - 0.5) * 2);
}

function Stat({ label, value, color, delay, live }) {
  const rise = useRise(delay, 26);
  return (
    <div style={{ ...rise, padding: '22px 26px', borderRadius: 16, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30 }}>
      <span style={{ fontFamily: FONT, fontSize: 24, color: 'rgba(255,255,255,0.6)' }}>{label}</span>
      <span style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        {live && <span style={{ width: 10, height: 10, borderRadius: '50%', background: MINT }} />}
        {value}
      </span>
    </div>
  );
}

export default function MapScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(MAP_DUR);

  const dashIn = spring({ frame: frame - 6, fps, config: { damping: 16, stiffness: 70 }, durationInFrames: 45 });
  const progress = interpolate(frame, [40, 220], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) });
  const dot = routePoint(progress);

  const badgeRise = useRise(4, 26);
  const titleRise = useRise(12, 36);

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <DarkBackdrop />
      <div style={{ position: 'absolute', top: 70, left: 120 }}>
        <div style={badgeRise}>
          <StepBadge n={4} dark />
        </div>
        <h2 style={{ ...titleRise, margin: '22px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 74, letterSpacing: '-0.03em', color: '#F5F7FB' }}>
          Live in ZenduONE. <span style={{ color: 'rgba(255,255,255,0.45)' }}>Labels and vehicles, one map.</span>
        </h2>
      </div>

      {/* dashboard */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 280,
          bottom: 90,
          borderRadius: 28,
          overflow: 'hidden',
          background: '#0D1322',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 60px 120px -40px rgba(0,0,0,0.8)',
          opacity: dashIn,
          transform: `translateY(${(1 - dashIn) * 80}px)`,
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
        }}
      >
        {/* map */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <svg width="1280" height="640" viewBox="0 0 1280 640" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(255,255,255,0.06)" strokeWidth="1.5">
              {Array.from({ length: 12 }, (_, i) => (
                <line key={`v${i}`} x1={i * 110} y1="0" x2={i * 110} y2="640" />
              ))}
              {Array.from({ length: 7 }, (_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 100} x2="1280" y2={i * 100} />
              ))}
            </g>
            {/* other fleet nodes */}
            {[[300, 160], [980, 460], [520, 520], [1120, 320]].map(([x, y], i) => (
              <g key={i} opacity="0.55">
                <circle cx={x} cy={y} r="8" fill="#2A3550" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
              </g>
            ))}
            {/* planned + traveled route */}
            <path d={ROUTE} stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeDasharray="10 12" fill="none" />
            <path d={ROUTE} stroke={ORANGE} strokeWidth="6" strokeLinecap="round" fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - progress} />
            {/* origin/destination */}
            <circle cx="120" cy="520" r="12" fill="#2A2521" stroke="#fff" strokeWidth="3" />
            <g transform="translate(1136,96)">
              <path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 21 14 21s14-10.5 14-21C28 6.3 21.7 0 14 0z" fill={progress >= 1 ? GREEN : ORANGE} />
              <circle cx="14" cy="14" r="5.2" fill="#fff" opacity="0.9" />
            </g>
            {/* tracking dot */}
            <g transform={`translate(${dot.x},${dot.y})`}>
              <circle r={26 + Math.sin(frame / 5) * 4} fill="rgba(194,65,12,0.25)" />
              <circle r="13" fill={ORANGE} stroke="#fff" strokeWidth="3.5" />
            </g>
          </svg>
          {/* map chrome */}
          <div style={{ position: 'absolute', top: 22, left: 24, display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', borderRadius: 12, background: 'rgba(10,14,26,0.75)', border: '1px solid rgba(255,255,255,0.14)' }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: MINT, boxShadow: `0 0 12px ${MINT}` }} />
            <span style={{ fontFamily: FONT, fontSize: 22, fontWeight: 700, color: '#fff' }}>ZenduONE &middot; 214 live nodes</span>
          </div>
          <div style={{ position: 'absolute', bottom: 22, left: 24, fontFamily: FONT, fontSize: 20, color: 'rgba(255,255,255,0.45)' }}>
            Pallet #A-114 &middot; Toronto &rarr; Montreal
          </div>
        </div>
        {/* telemetry rail */}
        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 16, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Live telemetry</div>
          <Stat label="Temperature" value="-2.0°C · in range" color={ORANGE_LIGHT} delay={46} live />
          <Stat label="Battery" value="94%" color={MINT} delay={58} />
          <Stat label="Location ping" value="every 60s" color="#F5F7FB" delay={70} />
          <Stat label="ETA" value={progress >= 1 ? 'Delivered ✓' : '3h 20m'} color={progress >= 1 ? MINT : '#F5F7FB'} delay={82} />
          <div style={{ marginTop: 'auto', fontFamily: FONT, fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,0.4)' }}>
            Timestamped location &amp; condition, relayed from the field to your dashboard.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
