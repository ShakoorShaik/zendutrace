import { Composition } from 'remotion';
import Main, { TOTAL_DUR } from './Main.jsx';
import Film, { FILM_DUR } from './Film.jsx';
import HeroLoop, { HERO_LOOP_DUR } from './HeroLoop.jsx';
import HeroPreview from './HeroPreview.jsx';

export default function RemotionRoot() {
  return (
    <>
      <Composition
        id="ZenduTraceDemo"
        component={Main}
        durationInFrames={TOTAL_DUR}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ZenduTraceFilm"
        component={Film}
        durationInFrames={FILM_DUR}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HeroLoop"
        component={HeroLoop}
        durationInFrames={HERO_LOOP_DUR}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="HeroPreview"
        component={HeroPreview}
        durationInFrames={HERO_LOOP_DUR}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
}
