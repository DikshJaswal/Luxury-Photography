import { useEffect } from "react";

function useHorizontalWheel(viewportRef, emblaApi) {
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !emblaApi) return undefined;

    const handleWheel = (event) => {
      if (event.ctrlKey) return;

      const isHorizontalGesture = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const delta = isHorizontalGesture
        ? event.deltaX
        : event.shiftKey
          ? event.deltaY
          : 0;

      if (!delta) return;

      event.preventDefault();
      const engine = emblaApi.internalEngine();
      engine.scrollBody.useDuration(0).useFriction(0.3);
      engine.scrollTo.distance(-delta * 1.2, false);
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });

    return () => viewport.removeEventListener("wheel", handleWheel);
  }, [emblaApi, viewportRef]);
}

export default useHorizontalWheel;
