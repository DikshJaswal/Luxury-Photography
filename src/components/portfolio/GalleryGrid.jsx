import { useEffect, useMemo, useRef, useState } from "react";

import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

function GalleryGrid({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [containerWidth, setContainerWidth] = useState(1280);
  const [imageRatios, setImageRatios] = useState({});
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  const columnCount = containerWidth >= 1200 ? 3 : containerWidth >= 640 ? 2 : 1;

  const columns = useMemo(() => {
    const columnWidth = (containerWidth - (columnCount - 1) * 32) / columnCount;
    const result = Array.from({ length: columnCount }, () => []);
    const heights = Array.from({ length: columnCount }, () => 0);

    images.forEach((image, index) => {
      const ratio = imageRatios[image.id] || 1;
      const imageHeight = columnWidth / ratio;
      const shortestColumn = heights.indexOf(Math.min(...heights));

      result[shortestColumn].push({ image, index });
      heights[shortestColumn] += imageHeight + 32;
    });

    return result;
  }, [columnCount, containerWidth, imageRatios, images]);

  const handleImageLoad = (imageId, ratio) => {
    setImageRatios((currentRatios) => {
      if (currentRatios[imageId] === ratio) return currentRatios;
      return { ...currentRatios, [imageId]: ratio };
    });
  };

  if (!images || images.length === 0) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-3xl text-white">No images found.</h2>
          <p className="mt-4 text-neutral-400">This collection will be updated soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div ref={galleryRef} className="mx-auto max-w-7xl px-6">
        <div
          className="grid items-start gap-8"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-8">
              {column.map(({ image, index }) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  index={index}
                  onClick={() => setSelectedIndex(index)}
                  onImageLoad={(ratio) => handleImageLoad(image.id, ratio)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  );
}

export default GalleryGrid;
