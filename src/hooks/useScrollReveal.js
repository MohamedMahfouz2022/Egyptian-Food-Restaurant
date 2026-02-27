import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Fires once when the referenced element enters the viewport.
 * @param {number} threshold - percentage of element visible before firing (0–1)
 * @returns {[React.RefObject, boolean]} — [ref, isVisible]
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire only once
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
