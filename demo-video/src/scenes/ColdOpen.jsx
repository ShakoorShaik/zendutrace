import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion';
import { CountUp, DarkBackdrop, FONT, ORANGE_LIGHT, useRise, useSceneFadeOut } from '../ui.jsx';

export const COLD_OPEN_DUR = 165;

function StatLine({ children, sub }) {
  const rise = useRise(0, 50);
  const subRise = useRise(14, 30);
  const frame = useCurrentFrame();
  const out = interpolate(frame, [42, 54], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: out }}>
      <div style={{ ...rise, fontFamily: FONT, fontWeight: 700, fontSize: 110, letterSpacing: '-0.03em', color: '#F5F7FB', textAlign: 'center', lineHeight: 1.02 }}>
        {children}
      </div>
      <div style={{ ...subRise, marginTop: 28, fontFamily: FONT, fontSize: 34, color: 'rgba(255,255,255,0.55)', textAlign: 'center' }}>
        {sub}
      </div>
    </div>
  );
}

export default function ColdOpen() {
  const fadeOut = useSceneFadeOut(COLD_OPEN_DUR);
  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      <DarkBackdrop />
      <Sequence from={0} durationInFrames={56} layout="none">
        <StatLine sub="cargo theft incidents in North America, 2024">
          <span style={{ color: ORANGE_LIGHT }}>
            <CountUp to={3625} dur={34} />
          </span>{' '}
          thefts
        </StatLine>
      </Sequence>
      <Sequence from={56} durationInFrames={56} layout="none">
        <StatLine sub="lost to cold-chain failures — every single year">
          <span style={{ color: ORANGE_LIGHT }}>
            $<CountUp to={35} dur={30} format={(v) => Math.round(v)} />B
          </span>{' '}
          spoiled
        </StatLine>
      </Sequence>
      <Sequence from={112} durationInFrames={COLD_OPEN_DUR - 112} layout="none">
        <StatLine sub="Once freight leaves the truck, most teams are flying blind.">
          One cause: <span style={{ color: ORANGE_LIGHT }}>no visibility</span>
        </StatLine>
      </Sequence>
    </AbsoluteFill>
  );
}
