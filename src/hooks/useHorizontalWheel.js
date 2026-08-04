import { useEffect } from "react";

function useHorizontalWheel(viewportRef, emblaApi) {
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !emblaApi) return undefined;

    let locked = false;

    const handleWheel = (event) => {
      if (event.ctrlKey) return;

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

      if (!delta) return;

      event.preventDefault();
      if (locked) return;

      locked = true;
      if (delta > 0) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
      window.setTimeout(() => {
        locked = false;
      }, 180);
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });

    return () => viewport.removeEventListener("wheel", handleWheel);
  }, [emblaApi, viewportRef]);
}

export default useHorizontalWheel;
