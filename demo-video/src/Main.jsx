import { AbsoluteFill, Sequence } from 'remotion';
import ColdOpen, { COLD_OPEN_DUR } from './scenes/ColdOpen.jsx';
import ProductIntro, { PRODUCT_INTRO_DUR } from './scenes/ProductIntro.jsx';
import PeelScene, { PEEL_DUR } from './scenes/PeelScene.jsx';
import StickScene, { STICK_DUR } from './scenes/StickScene.jsx';
import NetworkScene, { NETWORK_DUR } from './scenes/NetworkScene.jsx';
import MapScene, { MAP_DUR } from './scenes/MapScene.jsx';
import AlertScene, { ALERT_DUR } from './scenes/AlertScene.jsx';
import DeliveredScene, { DELIVERED_DUR } from './scenes/DeliveredScene.jsx';
import CtaScene, { CTA_DUR } from './scenes/CtaScene.jsx';
import { INK } from './ui.jsx';

const SCENES = [
  [ColdOpen, COLD_OPEN_DUR],
  [ProductIntro, PRODUCT_INTRO_DUR],
  [PeelScene, PEEL_DUR],
  [StickScene, STICK_DUR],
  [NetworkScene, NETWORK_DUR],
  [MapScene, MAP_DUR],
  [AlertScene, ALERT_DUR],
  [DeliveredScene, DELIVERED_DUR],
  [CtaScene, CTA_DUR],
];

export const TOTAL_DUR = SCENES.reduce((sum, [, d]) => sum + d, 0);

export default function Main() {
  let at = 0;
  return (
    <AbsoluteFill style={{ background: INK }}>
      {SCENES.map(([Scene, dur], i) => {
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
