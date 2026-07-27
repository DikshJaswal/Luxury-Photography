import { FaPlay } from "react-icons/fa";

function FilmCard({ film }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
      <img
        src={film.thumbnail}
        alt={film.title}
        className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition" />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-lg transition group-hover:scale-110">
          <FaPlay className="ml-1 text-white" />
        </div>

        <h3 className="font-serif text-4xl text-white">
          {film.title}
        </h3>

        <p className="mt-2 text-neutral-300">
          {film.location}
        </p>

      </div>
    </div>
  );
}

export default FilmCard;