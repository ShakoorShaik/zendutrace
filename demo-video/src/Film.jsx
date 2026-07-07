import { AbsoluteFill, Easing, Img, OffthreadVideo, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import CtaScene, { CTA_DUR } from './scenes/CtaScene.jsx';
import { DarkBackdrop, FONT, GREEN, INK, MINT, ORANGE, ORANGE_LIGHT, useRise, useSceneFadeOut } from './ui.jsx';

// ---------- shared chrome ----------

function LowerThird({ step, title, sub, delay = 10 }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 15, stiffness: 110 } });
  return (
    <div
      style={{
        position: 'absolute',
        left: 90,
        bottom: 80,
        opacity: frame < delay ? 0 : 1,
        transform: `translateY(${(1 - s) * 60}px)`,
        display: 'flex',
        alignItems: 'center',
        gap: 26,
        padding: '26px 40px 26px 26px',
        borderRadius: 22,
        background: 'rgba(10,14,26,0.78)',
        border: '1px solid rgba(255,255,255,0.14)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        boxShadow: '0 30px 70px -30px rgba(0,0,0,0.8)',
      }}
    >
      {step != null && (
        <span
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: `linear-gradient(135deg,${ORANGE},${ORANGE_LIGHT})`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 32,
            color: '#fff',
            flexShrink: 0,
          }}
        >
          {step}
        </span>
      )}
      <div>
        <div style={{ fontFamily: FONT, fontSize: 40, fontWeight: 700, letterSpacing: '-0.01em', color: '#F5F7FB' }}>{title}</div>
        {sub && <div style={{ marginTop: 6, fontFamily: FONT, fontSize: 25, color: 'rgba(255,255,255,0.7)' }}>{sub}</div>}
      </div>
    </div>
  );
}

function WatermarkLogo() {
  return (
    <div style={{ position: 'absolute', top: 44, right: 60, padding: '12px 18px', borderRadius: 14, background: 'rgba(10,14,26,0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
      <Img src={staticFile('zendutrace-logo.svg')} style={{ height: 40, display: 'block' }} />
    </div>
  );
}

// Ken Burns photo scene with brand patches pinned to the moving image.
function PhotoScene({ src, dur, from, to, patches = [], grade = 0.28, children }) {
  const frame = useCurrentFrame();
  const fadeOut = useSceneFadeOut(dur);
  const fadeIn = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  const t = interpolate(frame, [0, dur], [0, 1], { easing: Easing.inOut(Easing.quad) });
  const scale = from.scale + (to.scale - from.scale) * t;
  const x = from.x + (to.x - from.x) * t;
  const y = from.y + (to.y - from.y) * t;

  return (
    <AbsoluteFill style={{ background: INK, opacity: fadeIn * fadeOut }}>
      <div style={{ position: 'absolute', inset: 0, transform: `scale(${scale}) translate(${x}px, ${y}px)` }}>
        <Img src={staticFile(src)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        {patches.map((p, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.w}%`,
              height: `${p.h}%`,
              transform: `translate(-50%,-50%) rotate(${p.rotate || 0}deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ...p.style,
            }}
          >
            {p.el}
          </div>
        ))}
      </div>
      {/* unifying grade + legibility gradient */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(10,14,26,${grade * 0.5}) 0%, rgba(10,14,26,0) 30%, rgba(10,14,26,0) 55%, rgba(10,14,26,${grade * 2.2}) 100%)` }} />
      {children}
      <WatermarkLogo />
    </AbsoluteFill>
  );
}

// White patch with the ZenduTrace wordmark, tinted to sit naturally on label stock.
function WordPatch({ size = 30, sub, bg = '#F4F2ED', color = '#1A1613' }) {
  return (
    <div style={{ width: '100%', height: '100%', background: bg, borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
      <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: size, letterSpacing: '-0.02em', color, whiteSpace: 'nowrap' }}>ZenduTrace&#8482;</span>
      {sub && <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: size * 0.36, letterSpacing: '0.22em', color: 'rgba(26,22,19,0.6)', whiteSpace: 'nowrap' }}>{sub}</span>}
    </div>
  );
}

// ---------- scenes ----------

export const FILM_INTRO_DUR = 150;
function FilmIntro() {
  const frame = useCurrentFrame();
  const fadeOut = useSceneFadeOut(FILM_INTRO_DUR);
  const titleRise = useRise(16, 44);
  const subRise = useRise(30, 32);
  const logoFade = interpolate(frame, [4, 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill style={{ background: INK, opacity: fadeOut }}>
      <OffthreadVideo muted src={staticFile('photos/hero.mp4')} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.42, filter: 'saturate(0.7) brightness(0.8)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,14,26,0.55),rgba(10,14,26,0.25) 40%,rgba(10,14,26,0.85))' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ opacity: logoFade }}>
          <Img src={staticFile('zendutrace-logo.svg')} style={{ height: 74 }} />
        </div>
        <h1 style={{ ...titleRise, margin: '44px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 104, letterSpacing: '-0.03em', color: '#F5F7FB', textAlign: 'center' }}>
          How it works
        </h1>
        <p style={{ ...subRise, marginTop: 24, fontFamily: FONT, fontSize: 34, color: 'rgba(255,255,255,0.65)' }}>
          From the printer to the map &mdash; in three steps.
        </p>
      </div>
    </AbsoluteFill>
  );
}

export const FILM_PRINT_DUR = 195;
function FilmPrint() {
  return (
    <PhotoScene
      src="photos/activate.jpg"
      dur={FILM_PRINT_DUR}
      from={{ scale: 1.02, x: 0, y: 0 }}
      to={{ scale: 1.14, x: -50, y: -20 }}
      patches={[
        // blank patch over the original wordmark — reads as empty label stock
        { x: 51.9, y: 79.6, w: 8, h: 13, rotate: -58, el: <div style={{ width: '100%', height: '100%', background: '#F1EFE9', borderRadius: 5 }} /> },
      ]}
    >
      <LowerThird step={1} title="Print it — or peel it" sub="Any standard label printer. Activates in seconds." />
    </PhotoScene>
  );
}

export const FILM_STICK_DUR = 195;
function FilmStick() {
  return (
    <PhotoScene
      src="photos/stick.jpg"
      dur={FILM_STICK_DUR}
      from={{ scale: 1.2, x: 30, y: -20 }}
      to={{ scale: 1.04, x: 0, y: 0 }}
      patches={[
        { x: 40, y: 57, w: 13, h: 8, rotate: -1.5, el: <WordPatch size={30} bg="#EDE9E1" /> },
      ]}
    >
      <LowerThird step={2} title="Stick it on anything" sub="Package, pallet, crate or asset — no installers." />
    </PhotoScene>
  );
}

export const FILM_LABEL_DUR = 175;
function FilmLabel() {
  return (
    <PhotoScene
      src="photos/label-cellular.jpg"
      dur={FILM_LABEL_DUR}
      from={{ scale: 1.0, x: 0, y: 0 }}
      to={{ scale: 1.12, x: 0, y: 8 }}
      patches={[
        // main wordmark
        { x: 48.2, y: 51.5, w: 17.5, h: 15, el: <WordPatch size={42} sub="CELLULAR TRACKING LABEL" bg="#F7F5F0" /> },
        // top strip URL
        { x: 40.9, y: 8.8, w: 12, h: 5.5, el: <div style={{ width: '100%', height: '100%', background: '#F7F5F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: FONT, fontSize: 17, fontWeight: 600, color: 'rgba(26,22,19,0.55)' }}>zenduit.com/trace</span></div> },
        // corner mark
        { x: 56.8, y: 13, w: 7, h: 15, el: <div style={{ width: '100%', height: '100%', background: '#15130F', clipPath: 'polygon(100% 0, 0 0, 100% 100%)', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '6% 8%' }}><span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 26, color: '#fff' }}>Z</span></div> },
      ]}
    >
      <LowerThird title="Paper-thin. Radio inside." sub="Printed battery · BLE + 5G cellular · fully recyclable" />
    </PhotoScene>
  );
}

// Step 3: our own live dashboard (no third-party UI).
export const FILM_TRACK_DUR = 240;
const ROUTE = 'M 140 760 Q 560 560 900 440 Q 1300 305 1740 190';
function fRoutePoint(t) {
  const q = (p0, p1, p2, u) => ({
    x: (1 - u) * (1 - u) * p0.x + 2 * (1 - u) * u * p1.x + u * u * p2.x,
    y: (1 - u) * (1 - u) * p0.y + 2 * (1 - u) * u * p1.y + u * u * p2.y,
  });
  if (t < 0.5) return q({ x: 140, y: 760 }, { x: 560, y: 560 }, { x: 900, y: 440 }, t * 2);
  return q({ x: 900, y: 440 }, { x: 1300, y: 305 }, { x: 1740, y: 190 }, (t - 0.5) * 2);
}

function FilmTrack() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fadeOut = useSceneFadeOut(FILM_TRACK_DUR);
  const fadeIn = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  const progress = interpolate(frame, [16, 200], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic) });
  const dot = fRoutePoint(progress);
  const chipIn = (d) => spring({ frame: frame - d, fps, config: { damping: 14, stiffness: 140 } });

  const chips = [
    ['Temperature', '-2.0°C · in range', ORANGE_LIGHT, 40],
    ['Battery', '94%', MINT, 52],
    ['Ping', 'every 60s', '#F5F7FB', 64],
    ['ETA', progress >= 1 ? 'Delivered ✓' : '3h 20m', progress >= 1 ? MINT : '#F5F7FB', 76],
  ];

  return (
    <AbsoluteFill style={{ opacity: fadeIn * fadeOut }}>
      <DarkBackdrop />
      <svg width="1920" height="1080" style={{ position: 'absolute', inset: 0 }}>
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1.5">
          {Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} x1={i * 128} y1="0" x2={i * 128} y2="1080" />)}
          {Array.from({ length: 9 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 128} x2="1920" y2={i * 128} />)}
        </g>
        {[[420, 260], [1480, 720], [760, 880], [1660, 460]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="10" fill="#232D45" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" opacity="0.6" />
        ))}
        <path d={ROUTE} stroke="rgba(255,255,255,0.16)" strokeWidth="5" strokeDasharray="12 14" fill="none" />
        <path d={ROUTE} stroke={ORANGE} strokeWidth="7" strokeLinecap="round" fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - progress} />
        <circle cx="140" cy="760" r="14" fill="#1A1613" stroke="#fff" strokeWidth="4" />
        <g transform="translate(1722,146)">
          <path d="M18 0C8 0 0 8 0 18c0 13 18 26 18 26s18-13 18-26C36 8 28 0 18 0z" fill={progress >= 1 ? GREEN : ORANGE} />
          <circle cx="18" cy="18" r="6.5" fill="#fff" opacity="0.9" />
        </g>
        <g transform={`translate(${dot.x},${dot.y})`}>
          <circle r={34 + Math.sin(frame / 5) * 6} fill="rgba(194,65,12,0.22)" />
          <circle r="16" fill={ORANGE} stroke="#fff" strokeWidth="4.5" />
        </g>
      </svg>
      <div style={{ position: 'absolute', top: 60, left: 90, display: 'inline-flex', alignItems: 'center', gap: 14, padding: '16px 26px', borderRadius: 16, background: 'rgba(10,14,26,0.75)', border: '1px solid rgba(255,255,255,0.14)' }}>
        <span style={{ width: 13, height: 13, borderRadius: '50%', background: MINT, boxShadow: `0 0 14px ${MINT}` }} />
        <span style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color: '#fff' }}>ZenduONE &middot; live</span>
      </div>
      <div style={{ position: 'absolute', top: 150, right: 90, display: 'flex', flexDirection: 'column', gap: 16, width: 430 }}>
        {chips.map(([label, value, color, d]) => (
          <div key={label} style={{ opacity: frame < d ? 0 : 1, transform: `translateX(${(1 - chipIn(d)) * 80}px)`, padding: '22px 28px', borderRadius: 18, background: 'rgba(13,19,34,0.85)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: FONT, fontSize: 25, color: 'rgba(255,255,255,0.6)' }}>{label}</span>
            <span style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color }}>{value}</span>
          </div>
        ))}
      </div>
      <LowerThird step={3} title="Track it live in ZenduONE" sub="Location + temperature, relayed by 100M+ devices in 29 countries." delay={16} />
      <WatermarkLogo />
    </AbsoluteFill>
  );
}

// Shipment trace: the real tracking UI (laptop mock) with brand patch.
export const FILM_TRACE_DUR = 165;
function FilmTraceUi() {
  return (
    <PhotoScene
      src="photos/tracking-trace.jpg"
      dur={FILM_TRACE_DUR}
      from={{ scale: 1.06, x: 0, y: 10 }}
      to={{ scale: 1.18, x: 40, y: -6 }}
      grade={0.2}
      patches={[
        // "Reelables" tracking-reference value → ZenduTrace
        { x: 6.6, y: 6.7, w: 9, h: 4.2, el: <div style={{ width: '100%', height: '100%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}><span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 21, letterSpacing: '-0.01em', color: '#1A1613', whiteSpace: 'nowrap' }}>ZenduTrace&#8482;</span></div> },
      ]}
    >
      <LowerThird title="Every step, timestamped" sub="Shipment timeline + live trace — an audit-ready record, end to end." />
    </PhotoScene>
  );
}

// ---------- film assembly ----------

const FILM_SCENES = [
  [FilmIntro, FILM_INTRO_DUR],
  [FilmPrint, FILM_PRINT_DUR],
  [FilmStick, FILM_STICK_DUR],
  [FilmLabel, FILM_LABEL_DUR],
  [FilmTrack, FILM_TRACK_DUR],
  [FilmTraceUi, FILM_TRACE_DUR],
  [CtaScene, CTA_DUR],
];

export const FILM_DUR = FILM_SCENES.reduce((s, [, d]) => s + d, 0);

export default function Film() {
  let at = 0;
  return (
    <AbsoluteFill style={{ background: INK }}>
      {FILM_SCENES.map(([Scene, dur], i) => {
        const from = at;
        at += dur;
        return (
          <Sequence key={i} from={from} durationInFrames={dur}>
            <Scene />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}
