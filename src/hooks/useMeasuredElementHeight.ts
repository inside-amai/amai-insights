import { RefObject, useLayoutEffect, useState } from "react";

/**
 * Measures an element's *rendered* height (uses getBoundingClientRect).
 * This is the most reliable approach when the element is transformed (e.g. scale()).
 */
export function useMeasuredElementHeight<T extends HTMLElement>(
  ref: RefObject<T>,
  enabled: boolean
) {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!enabled) {
      return;
    }

    const el = ref.current;
    if (!el) {
      return;
    }

    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const next = Math.ceil(el.getBoundingClientRect().height);
        setHeight((prev) => (prev === next ? prev : next));
      });
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    // Fallbacks for viewport/URL-bar changes on mobile browsers.
    window.addEventListener("resize", measure, { passive: true } as AddEventListenerOptions);
    window.addEventListener("orientationchange", measure, { passive: true } as AddEventListenerOptions);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [ref, enabled]);

  return height;
}
