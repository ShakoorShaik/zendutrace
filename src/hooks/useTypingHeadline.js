import { useEffect, useRef, useState } from 'react';
import { HEAD } from '../data.js';

// Cycles through HEAD entries, typing out the highlight word letter by letter.
export function useTypingHeadline() {
  const [hi, setHi] = useState(0);
  const [ci, setCi] = useState(0);
  const [vis, setVis] = useState(true);
  const typeRef = useRef(null);
  const holdRef = useRef(null);

  useEffect(() => {
    function cycle() {
      setCi(0);
      setVis(true);
      clearInterval(typeRef.current);
      typeRef.current = setInterval(() => {
        setCi((prev) => {
          if (prev >= HEAD[hi].highlight.length) {
            clearInterval(typeRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, 68);

      clearTimeout(holdRef.current);
      holdRef.current = setTimeout(() => {
        setVis(false);
        setTimeout(() => {
          setHi((prev) => (prev + 1) % HEAD.length);
        }, 420);
      }, 3400);
    }

    cycle();

    return () => {
      clearInterval(typeRef.current);
      clearTimeout(holdRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hi]);

  const cur = HEAD[hi];
  return {
    headPrefix: cur.prefix,
    headTyped: cur.highlight.slice(0, ci),
    headColor: cur.color,
    prefixOpacity: vis ? 1 : 0,
    lineOpacity: vis ? 1 : 0,
  };
}
