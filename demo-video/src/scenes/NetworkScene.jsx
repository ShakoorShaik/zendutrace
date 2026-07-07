import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { BLUE, DarkBackdrop, FONT, MINT, ORANGE, ORANGE_LIGHT, StepBadge, useRise, useSceneFadeOut } from '../ui.jsx';

export const NETWORK_DUR = 245;

const CX = 960;
const CY = 620;
const CLOUD_Y = 350;

const RELAYS = [
  { x: 430, y: 420, label: 'Smartphones', delay: 40, icon: 'phone' },
  { x: 1490, y: 420, label: 'Access points', delay: 55, icon: 'wifi' },
  { x: 380, y: 800, label: 'Vehicle telematics', delay: 70, icon: 'truck' },
  { x: 1540, y: 800, label: 'IoT infrastructure', delay: 85, icon: 'iot' },
];

function RelayIcon({ icon }) {
  const common = { fill: 'none', stroke: '#fff', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (icon === 'phone')
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" {...common}>
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M10 18.5h4" />
      </svg>
    );
  if (icon === 'wifi')
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" {...common}>
        <path d="M4 10.5a11 11 0 0 1 16 0M7.5 14a6.5 6.5 0 0 1 9 0" />
        <circle cx="12" cy="18" r="1.4" fill="#fff" stroke="none" />
      </svg>
    );
  if (icon === 'truck')
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" {...common}>
        <path d="M1 15V6h12v9M13 9h4l3 3v3h-7" />
        <circle cx="5.5" cy="17" r="1.8" />
        <circle cx="16.5" cy="17" r="1.8" />
      </svg>
    );
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...common}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export default function NetworkScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(NETWORK_DUR);

  const badgeRise = useRise(4, 26);
  const titleRise = useRise(14, 40);
  const statsRise = useRise(130, 30);

  const cloudIn = spring({ frame: frame - 110, fps, config: { damping: 14, stiffness: 120 } });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <DarkBackdrop glow="rgba(0,196,255,0.12)" />

      <div style={{ position: 'absolute', top: 90, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ ...badgeRise, display: 'flex', justifyContent: 'center' }}>
          <StepBadge n={3} dark />
        </div>
        <h2 style={{ ...titleRise, margin: '26px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 78, letterSpacing: '-0.03em', color: '#F5F7FB' }}>
          The world becomes your network.
        </h2>
      </div>

      {/* relay lines */}
      <svg style={{ position: 'absolute', inset: 0 }} width="1920" height="1080">
        {RELAYS.map((r) => {
          const p = interpolate(frame - r.delay, [0, 30], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          return (
            <line
              key={r.label}
              x1={CX}
              y1={CY}
              x2={CX + (r.x - CX) * p}
              y2={CY + (r.y - CY) * p}
              stroke="rgba(0,196,255,0.5)"
              strokeWidth="3"
              strokeDasharray="10 12"
              strokeDashoffset={-frame * 2}
            />
          );
        })}
        {/* relays → cloud */}
        {RELAYS.map((r) => {
          const p = interpolate(frame - 115, [0, 26], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          return (
            <line
              key={`c-${r.label}`}
              x1={r.x}
              y1={r.y}
              x2={r.x + (CX - r.x) * p}
              y2={r.y + (CLOUD_Y - r.y) * p}
              stroke="rgba(0,229,160,0.35)"
              strokeWidth="2.5"
              strokeDasharray="8 12"
              strokeDashoffset={-frame * 2}
            />
          );
        })}
      </svg>

      {/* center label node */}
      <div style={{ position: 'absolute', left: CX, top: CY, transform: 'translate(-50%,-50%)' }}>
        {[0, 1].map((i) => {
          const t = ((frame + i * 30) % 60) / 60;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 90 + t * 300,
                height: 90 + t * 300,
                transform: 'translate(-50%,-50%)',
                borderRadius: '50%',
                border: `3px solid ${ORANGE}`,
                opacity: (1 - t) * 0.6,
              }}
            />
          );
        })}
        <div
          style={{
            position: 'relative',
            width: 190,
            height: 108,
            borderRadius: 18,
            background: '#FFFFFF',
            border: `4px solid ${ORANGE}`,
            boxShadow: `0 0 70px rgba(194,65,12,0.55)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 24,
            color: '#9A3412',
          }}
        >
          ZenduTrace&#8482;
        </div>
      </div>

      {/* relay nodes */}
      {RELAYS.map((r) => {
        const s = spring({ frame: frame - r.delay - 18, fps, config: { damping: 13, stiffness: 160 } });
        return (
          <div key={r.label} style={{ position: 'absolute', left: r.x, top: r.y, transform: `translate(-50%,-50%) scale(${s})`, opacity: frame < r.delay + 18 ? 0 : 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 92, height: 92, borderRadius: 24, background: 'rgba(0,196,255,0.12)', border: `2.5px solid ${BLUE}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,196,255,0.3)' }}>
              <RelayIcon icon={r.icon} />
            </div>
            <span style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap' }}>{r.label}</span>
          </div>
        );
      })}

      {/* cloud */}
      <div style={{ position: 'absolute', left: CX, top: CLOUD_Y, transform: `translate(-50%,-50%) scale(${cloudIn})`, opacity: frame < 110 ? 0 : 1, display: 'flex', alignItems: 'center', gap: 16, padding: '18px 34px', borderRadius: 999, background: 'rgba(0,229,160,0.1)', border: `2.5px solid ${MINT}`, boxShadow: '0 0 50px rgba(0,229,160,0.3)' }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={MINT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19a4.5 4.5 0 0 0 .9-8.9 7 7 0 0 0-13.5 1.9A4 4 0 0 0 6 19z" />
        </svg>
        <span style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color: '#F5F7FB' }}>ZenduONE cloud</span>
      </div>

      {/* stats */}
      <div style={{ ...statsRise, position: 'absolute', bottom: 36, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 26, fontFamily: FONT }}>
        {[
          ['100M+', 'relay devices'],
          ['29', 'countries, real-time'],
          ['180+', 'countries connected'],
        ].map(([n, l]) => (
          <div key={l} style={{ padding: '20px 38px', borderRadius: 18, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' }}>
            <div style={{ fontSize: 44, fontWeight: 700, color: ORANGE_LIGHT, letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ marginTop: 4, fontSize: 22, color: 'rgba(255,255,255,0.6)' }}>{l}</div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
}
