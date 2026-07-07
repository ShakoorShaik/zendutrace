import { useEffect, useState } from 'react';

// Simulates slowly-drifting live sensor readings for the hero mock dashboard.
export function useLiveTelemetry() {
  const [state, setState] = useState({ temp: -2.0, battery: 94, signal: -72, gps: 3.0 });

  useEffect(() => {
    const id = setInterval(() => {
      setState((s) => {
        let temp = s.temp + (Math.random() - 0.5) * 0.34;
        temp = Math.max(-3.2, Math.min(-0.7, temp));
        let signal = s.signal + Math.round((Math.random() - 0.5) * 5);
        signal = Math.max(-81, Math.min(-63, signal));
        let gps = s.gps + (Math.random() - 0.5) * 0.7;
        gps = Math.max(1.8, Math.min(4.7, gps));
        let battery = s.battery;
        if (Math.random() < 0.18) battery = 92 + Math.floor(Math.random() * 4);
        return { temp, signal, gps, battery };
      });
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return {
    liveTemp: `${state.temp.toFixed(1)}°`,
    liveBattery: `${state.battery}%`,
    liveSignal: `${state.signal}`,
    liveGps: `${state.gps.toFixed(1)}m`,
  };
}
