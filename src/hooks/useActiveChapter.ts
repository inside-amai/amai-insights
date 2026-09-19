import { useEffect, useState } from "react";

/**
 * Tracks which chapter section is currently in view while scrolling.
 * Returns the id of the last chapter whose top edge has crossed the
 * reading threshold (sticky header offset + a small buffer), so the
 * sticky deep-dive list can highlight the active chapter.
 */
export function useActiveChapter(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const threshold = 180; // sticky header offset (top-28 = 112px) + buffer
      let current: string | null = null;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= threshold) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [ids.join("|")]);

  return activeId;
}
