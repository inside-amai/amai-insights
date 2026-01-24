import { useState, useLayoutEffect, useCallback } from "react";

const TARGET_WIDTH = 1280;
const TOTAL_SLIDES = 9;
const HERO_TOP_PADDING = 200; // Extra space above hero on mobile
const SLIDE_GAP = 120; // Gap between slides on mobile

export function useFitToWidth() {
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState("auto");

  const calculateScale = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < TARGET_WIDTH) {
      const newScale = screenWidth / TARGET_WIDTH;
      setScale(newScale);
      // Each slide is 100vh. Total content height = 9 * 100vh
      // Plus hero padding and gaps between slides
      const totalContentHeight = TOTAL_SLIDES * window.innerHeight;
      const extraHeight = HERO_TOP_PADDING + (SLIDE_GAP * (TOTAL_SLIDES - 1));
      const scaledHeight = (totalContentHeight + extraHeight) * newScale;
      setContainerHeight(`${scaledHeight}px`);
    } else {
      setScale(1);
      setContainerHeight("auto");
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
