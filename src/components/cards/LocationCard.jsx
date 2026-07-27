import { Link } from "react-router-dom";

function LocationCard({ location }) {
  return (
    <Link
      to={`/locations/${location.slug}`}
      className="group relative overflow-hidden rounded-3xl"
    >
      <img
        src={location.image}
        alt={location.title}
        className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute bottom-0 p-8">
        <h3 className="font-serif text-4xl text-white">
          {location.title}
        </h3>

        <p className="mt-4 leading-7 text-neutral-300">
          {location.description}
        </p>

        <span className="mt-6 inline-block text-[#C8A96A]">
          Explore Gallery →
        </span>
      </div>
    </Link>
  );
}

export default LocationCard;