import GalleryCard from "./GalleryCard";

function GalleryGrid({ images }) {
  if (!images || images.length === 0) {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-serif text-white">
            No images found.
          </h2>

          <p className="mt-4 text-neutral-400">
            This collection will be updated soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;