import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import RiskSection from './components/RiskSection.jsx';
import Products from './components/Products.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import VideoSection from './components/VideoSection.jsx';
import Industries from './components/Industries.jsx';
import ZenduOneMap from './components/ZenduOneMap.jsx';
import Integrations from './components/Integrations.jsx';
import DemoSection from './components/DemoSection.jsx';
import Comparison from './components/Comparison.jsx';
import Reviews from './components/Reviews.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';
import TraceModal from './components/TraceModal.jsx';
import XentagModal from './components/XentagModal.jsx';
import { trustData, incidentsData } from './data.jsx';
import { useTypingHeadline } from './hooks/useTypingHeadline.js';
import { useLiveTelemetry } from './hooks/useLiveTelemetry.js';
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js';

const TRUST_LOOP = [...trustData(), ...trustData()];
const INCIDENTS = incidentsData();
const INC_ROW_1 = INCIDENTS.slice(0, 4);
const INC_ROW_2 = INCIDENTS.slice(4, 8);
const INC_ROW_3 = INCIDENTS.slice(8, 12);

export default function App() {
  const head = useTypingHeadline();
  const live = useLiveTelemetry();

  const [scrolled, setScrolled] = useState(false);
  const [tilt, setTilt] = useState({ tiltX: 0, tiltY: 0 });
  const [activeInd, setActiveInd] = useState(0);
  const [traceOpen, setTraceOpen] = useState(false);
  const [xentagOpen, setXentagOpen] = useState(false);

  useRevealOnScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onMockMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ tiltX: -py * 8, tiltY: px * 10 });
  };
  const onMockLeave = () => setTilt({ tiltX: 0, tiltY: 0 });

  const openTrace = () => {
    setXentagOpen(false);
    setTraceOpen(true);
  };
  const openXentag = () => {
    setTraceOpen(false);
    setXentagOpen(true);
  };
  const closePanels = () => {
    setTraceOpen(false);
    setXentagOpen(false);
  };
  const openDemo = () => {
    closePanels();
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav scrolled={scrolled} openTrace={openTrace} openXentag={openXentag} />
      <Hero
        head={head}
        live={live}
        tilt={tilt}
        onMockMove={onMockMove}
        onMockLeave={onMockLeave}
        openDemo={openDemo}
      />
      <TrustBar trustLoop={TRUST_LOOP} />
      <RiskSection incRow1={INC_ROW_1} incRow2={INC_ROW_2} incRow3={INC_ROW_3} />
      <Products openTrace={openTrace} openXentag={openXentag} />
      <HowItWorks />
      <VideoSection />
      <Industries activeInd={activeInd} setActiveInd={setActiveInd} />
      <ZenduOneMap />
      <Integrations />
      <DemoSection />
      <Comparison />
      <Reviews />
      <CtaBanner openDemo={openDemo} />
      <Footer />
      <TraceModal open={traceOpen} closePanel={closePanels} openDemo={openDemo} />
      <XentagModal open={xentagOpen} closePanel={closePanels} />
    </>
  );
}
