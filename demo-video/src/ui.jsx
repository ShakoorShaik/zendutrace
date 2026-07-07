import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif";
export const INK = '#0A0E1A';
export const PAPER = '#F4EFE8';
export const PAPER_LIGHT = '#FBFAF8';
export const DARK_TEXT = '#1A1613';
export const MUTED = '#57504A';
export const ORANGE = '#C2410C';
export const ORANGE_LIGHT = '#FB8B24';
export const GREEN = '#1E8A5B';
export const MINT = '#00E5A0';
export const BLUE = '#00C4FF';

export const EASE = Easing.bezier(0.16, 0.7, 0.3, 1);

// Spring-driven fade+rise entrance. Returns a style object.
export function useRise(delay = 0, distance = 40) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 90 }, durationInFrames: 40 });
  return {
    opacity: interpolate(frame - delay, [0, 18], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
    transform: `translateY(${(1 - s) * distance}px)`,
  };
}

export function useFade(delay = 0, dur = 15) {
  const frame = useCurrentFrame();
  return interpolate(frame - delay, [0, dur], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
}

// Fade the whole scene out over its last `dur` frames.
export function useSceneFadeOut(sceneDur, dur = 12) {
  const frame = useCurrentFrame();
  return interpolate(frame, [sceneDur - dur, sceneDur], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
}

export function usePop(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 13, stiffness: 180 } });
  return { opacity: frame < delay ? 0 : 1, transform: `scale(${s})` };
}

export function Eyebrow({ children, color = ORANGE, style }) {
  return (
    <div style={{ fontFamily: FONT, fontSize: 26, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color, ...style }}>
      {children}
    </div>
  );
}

export function StepBadge({ n, dark = false }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 16,
        padding: '12px 26px',
        borderRadius: 999,
        background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(194,65,12,0.09)',
        border: dark ? '1px solid rgba(255,255,255,0.14)' : '1px solid rgba(194,65,12,0.25)',
      }}
    >
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: `linear-gradient(135deg,${ORANGE},${ORANGE_LIGHT})`,
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        {n}
      </span>
      <span style={{ fontFamily: FONT, fontSize: 24, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.85)' : '#9A3412' }}>
        Step {n} of 5
      </span>
    </div>
  );
}

// Dotted-grid backdrop used on dark scenes.
export function DarkBackdrop({ glow = 'rgba(194,65,12,0.16)' }) {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, background: INK }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 2px,transparent 2px)', backgroundSize: '56px 56px', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 1400, height: 700, background: `radial-gradient(ellipse,${glow},transparent 70%)`, filter: 'blur(60px)' }} />
    </>
  );
}

export function PaperBackdrop() {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, background: PAPER_LIGHT }} />
      <div style={{ position: 'absolute', top: '-25%', right: '-10%', width: 1100, height: 900, background: 'radial-gradient(ellipse,rgba(194,65,12,0.09),transparent 70%)', filter: 'blur(70px)' }} />
      <div style={{ position: 'absolute', bottom: '-30%', left: '-10%', width: 900, height: 700, background: 'radial-gradient(ellipse,rgba(2,132,199,0.06),transparent 70%)', filter: 'blur(70px)' }} />
    </>
  );
}

// ---- The smart label artwork (scalable, ~520x270 at scale 1) ----
export function SmartLabel({ scale = 1, active = false, style }) {
  return (
    <svg width={520 * scale} height={270 * scale} viewBox="0 0 520 270" fill="none" style={style}>
      <rect x="4" y="4" width="512" height="262" rx="22" fill="#FFFFFF" stroke={active ? ORANGE : 'rgba(26,22,19,0.18)'} strokeWidth={active ? 5 : 3} />
      {/* antenna trace */}
      <path
        d="M40 44 H300 M40 44 V90 H120 V64 H80 M300 44 V78 H240"
        stroke="rgba(194,65,12,0.35)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* printed battery strip */}
      <rect x="40" y="204" width="200" height="30" rx="8" fill="rgba(30,138,91,0.1)" stroke="rgba(30,138,91,0.4)" strokeWidth="2.5" />
      <text x="140" y="225" textAnchor="middle" fill={GREEN} fontSize="17" fontWeight="700" fontFamily="monospace">PRINTED BATTERY</text>
      {/* wordmark */}
      <text x="40" y="146" fill="#9A3412" fontSize="42" fontWeight="700" fontFamily={FONT} letterSpacing="-1">
        ZenduTrace&#8482;
      </text>
      <text x="40" y="180" fill="#9A938A" fontSize="19" fontFamily={FONT}>
        BLE + Cellular smart label
      </text>
      {/* QR block */}
      <rect x="386" y="110" width="94" height="94" rx="8" fill="rgba(26,22,19,0.045)" stroke="rgba(26,22,19,0.14)" strokeWidth="2" />
      <g fill="rgba(26,22,19,0.6)">
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) =>
            (r + c) % 2 === 0 ? <rect key={`${r}-${c}`} x={398 + c * 26} y={122 + r * 26} width="18" height="18" rx="3" /> : null
          )
        )}
      </g>
      {/* barcode */}
      <g fill="rgba(26,22,19,0.7)">
        {[0, 6, 10, 18, 26, 30, 40, 46, 54, 58, 66, 74, 80, 88, 92, 100].map((x, i) => (
          <rect key={i} x={300 + x} y={216} width={i % 3 === 0 ? 5 : 3} height={26} />
        ))}
      </g>
      {/* status LED */}
      <circle cx="480" cy="52" r="11" fill={active ? MINT : 'rgba(26,22,19,0.15)'} />
    </svg>
  );
}

// ---- Cardboard box (scalable, ~460x330 at scale 1) ----
export function CardboardBox({ scale = 1, children, style }) {
  return (
    <svg width={460 * scale} height={330 * scale} viewBox="0 0 460 330" fill="none" style={style}>
      <rect x="30" y="80" width="400" height="240" rx="10" fill="#E8DFD1" stroke="rgba(26,22,19,0.14)" strokeWidth="3" />
      <path d="M30 80 L230 42 L430 80" stroke="rgba(26,22,19,0.12)" strokeWidth="3" fill="#D9CFBD" />
      <rect x="30" y="76" width="400" height="18" rx="4" fill="#D9CFBD" />
      <rect x="200" y="76" width="60" height="244" fill="rgba(194,65,12,0.12)" />
      {children}
    </svg>
  );
}

// Animated count-up number.
export function CountUp({ from = 0, to, delay = 0, dur = 40, format = (v) => Math.round(v).toLocaleString() }) {
  const frame = useCurrentFrame();
  const v = interpolate(frame - delay, [0, dur], [from, to], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  return <>{format(v)}</>;
}
