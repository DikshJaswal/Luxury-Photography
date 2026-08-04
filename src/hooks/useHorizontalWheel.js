import { useEffect } from "react";

function useHorizontalWheel(viewportRef, emblaApi) {
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !emblaApi) return undefined;

    let locked = false;

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      event.preventDefault();
      if (locked) return;

      locked = true;
      emblaApi.scrollBy(event.deltaY > 0 ? 1 : -1);
      window.setTimeout(() => {
        locked = false;
      }, 120);
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });

    return () => viewport.removeEventListener("wheel", handleWheel);
  }, [emblaApi, viewportRef]);
}

export default useHorizontalWheel;
