import React from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from 'remotion';
import HeroLoop from './HeroLoop.jsx';
import { FONT } from './ui.jsx';

// Throwaway QA composition: replicates the landing hero's exact layer stack
// (mesh bg ≈ ink, loop at 0.55, gradient overlay, real headline copy) so a
// rendered still shows true foreground/background contrast.
export default function HeroPreview() {
  useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: '#0A0E1A' }}>
      <AbsoluteFill style={{ opacity: 0.55, filter: 'saturate(0.85)' }}>
        <HeroLoop />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(120% 90% at 80% 10%,rgba(0,196,255,0.09),transparent 55%),linear-gradient(180deg,rgba(10,14,26,0.62) 0%,rgba(10,14,26,0.22) 34%,rgba(10,14,26,0.38) 62%,rgba(10,14,26,0.9) 100%)',
        }}
      />
      <div style={{ position: 'absolute', left: 130, top: 300, maxWidth: 1000 }}>
        <div style={{ fontFamily: FONT, fontSize: 30, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 34 }}>
          Smart Label Platform by ZenduIT
        </div>
        <h1 style={{ margin: 0, fontFamily: FONT, fontWeight: 700, fontSize: 130, lineHeight: 0.92, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
          <span style={{ color: '#F5F7FB' }}>Track your </span>
          <span style={{ color: '#00C4FF' }}>Shipments.</span>
        </h1>
        <p style={{ marginTop: 40, fontFamily: FONT, fontSize: 34, lineHeight: 1.5, color: 'rgba(255,255,255,0.72)', maxWidth: 820 }}>
          Peel-and-stick smart labels that put every package, pallet and asset on the same live map as your fleet.
        </p>
      </div>
    </AbsoluteFill>
  );
}
