import { useState, useLayoutEffect, useCallback } from "react";

const TARGET_WIDTH = 1280;
const TOTAL_SLIDES = 9;

export function useFitToWidth() {
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState("auto");

  const calculateScale = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < TARGET_WIDTH) {
      const newScale = screenWidth / TARGET_WIDTH;
      setScale(newScale);
      // Each slide is 100vh. Total content height = 9 * 100vh
      // When scaled, the visual height = actualHeight * scale
      // To enable proper scrolling, the container needs height = actualHeight * scale
      // But since content uses vh units, we calculate based on viewport
      const totalContentHeight = TOTAL_SLIDES * window.innerHeight;
      const scaledHeight = totalContentHeight * newScale;
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

  return { scale, containerHeight, isMobile: scale < 1, targetWidth: TARGET_WIDTH };
}
