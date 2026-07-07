import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { DarkBackdrop, FONT, MINT, ORANGE, ORANGE_LIGHT, useRise } from '../ui.jsx';

export const CTA_DUR = 230;

export default function CtaScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame: frame - 6, fps, config: { damping: 15, stiffness: 100 } });
  const titleRise = useRise(22, 46);
  const subRise = useRise(36, 34);
  const btnPop = spring({ frame: frame - 52, fps, config: { damping: 12, stiffness: 150 } });
  const urlFade = interpolate(frame, [80, 100], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const btnPulse = 1 + Math.sin(Math.max(0, frame - 80) / 14) * 0.02;

  return (
    <AbsoluteFill>
      <DarkBackdrop glow="rgba(194,65,12,0.28)" />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ opacity: logoIn, transform: `scale(${logoIn})` }}>
          <Img src={staticFile('zendutrace-logo.svg')} style={{ height: 88 }} />
        </div>
        <h2 style={{ ...titleRise, margin: '52px 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 120, letterSpacing: '-0.03em', color: '#F5F7FB', textAlign: 'center' }}>
          Get 10 free labels
        </h2>
        <p style={{ ...subRise, marginTop: 28, fontFamily: FONT, fontSize: 34, color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: 900, lineHeight: 1.5 }}>
          We&rsquo;ll ship a starter roll and have your first assets live in ZenduONE the same week.
        </p>
        <div
          style={{
            marginTop: 56,
            transform: `scale(${btnPop * btnPulse})`,
            opacity: frame < 52 ? 0 : 1,
            padding: '28px 64px',
            borderRadius: 20,
            background: `linear-gradient(135deg,${ORANGE},${ORANGE_LIGHT})`,
            boxShadow: '0 40px 80px -24px rgba(194,65,12,0.8)',
            fontFamily: FONT,
            fontSize: 40,
            fontWeight: 700,
            color: '#fff',
          }}
        >
          Claim 10 free labels &rarr;
        </div>
        <div style={{ marginTop: 44, opacity: urlFade, display: 'flex', alignItems: 'center', gap: 22, fontFamily: FONT, fontSize: 26, color: 'rgba(255,255,255,0.55)' }}>
          <span>No credit card</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
          <span>Ships this week</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
          <span style={{ color: MINT, fontWeight: 700 }}>zenduit.com</span>
        </div>
      </div>
    </AbsoluteFill>
  );
}
