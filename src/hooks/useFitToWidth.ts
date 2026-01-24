import { useState, useLayoutEffect, useCallback, useRef } from "react";

const TARGET_WIDTH = 1280;
const TOTAL_SLIDES = 9;
const HERO_TOP_PADDING = 200; // Extra space above hero on mobile
const SLIDE_GAP = 120; // Gap between slides on mobile

export function useFitToWidth() {
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState("auto");

  // On mobile browsers, `window.innerHeight` can change while scrolling (URL bar collapse),
  // which can create an ever-growing container height and feel like "infinite" scroll.
  // We lock the viewport height for the session and only refresh it when width changes
  // (e.g., orientation change).
  const lockedViewportHeightRef = useRef<number | null>(null);
  const lastWidthRef = useRef<number | null>(null);

  const calculateScale = useCallback(() => {
    const screenWidth = window.visualViewport?.width ?? window.innerWidth;
    if (screenWidth < TARGET_WIDTH) {
      const newScale = screenWidth / TARGET_WIDTH;
      setScale(newScale);

      const didWidthChange =
        lastWidthRef.current === null ||
        Math.abs(lastWidthRef.current - screenWidth) > 1;
      lastWidthRef.current = screenWidth;

      if (lockedViewportHeightRef.current === null || didWidthChange) {
        lockedViewportHeightRef.current = window.visualViewport?.height ?? window.innerHeight;
      }

      // Each slide is 100vh. Total content height = 9 * 100vh
      // Plus hero padding and gaps between slides
      const viewportH = lockedViewportHeightRef.current ?? window.innerHeight;
      const totalContentHeight = TOTAL_SLIDES * viewportH;
      const extraHeight = HERO_TOP_PADDING + (SLIDE_GAP * (TOTAL_SLIDES - 1));
      const scaledHeight = (totalContentHeight + extraHeight) * newScale;
      setContainerHeight(`${scaledHeight}px`);
    } else {
      setScale(1);
      setContainerHeight("auto");

      lockedViewportHeightRef.current = null;
      lastWidthRef.current = null;
    }
  }, []);

  useLayoutEffect(() => {
    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, [calculateScale]);

  return { 
    scale, 
    containerHeight, 
    isMobile: scale < 1, 
    targetWidth: TARGET_WIDTH,
    heroTopPadding: HERO_TOP_PADDING,
    slideGap: SLIDE_GAP
  };
}
