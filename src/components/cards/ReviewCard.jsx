function ReviewCard({ review }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#181818] p-8 transition duration-300 hover:border-[#C8A96A]/40">
      <img
        src={review.image}
        alt={review.name}
        className="mb-6 h-20 w-20 rounded-full object-cover"
      />

      <p className="leading-8 text-neutral-300">
        "{review.review}"
      </p>

      <h3 className="mt-8 font-serif text-2xl text-white">
        {review.name}
      </h3>

      <p className="text-[#C8A96A]">
        {review.location}
      </p>
    </div>
  );
}

export default ReviewCard;