const posterOffsets = [3, 6, 3, 3, 4, 3, 5, 3, 3, 3, 3, 9];

const reels = [
  ["4K Cinematic Reel", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739451/4k_1_lelas6.mp4"],
  ["Save The Date", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739409/Save_the_date_ojbksh.mp4"],
  ["Pre-Wedding Reel 1", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739222/Reel_1_p8ywi0.mp4"],
  ["Pre-Wedding Reel 2", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739214/reel_1_m8e4ge.mp4"],
  ["Pre-Wedding Reel 3", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739187/Reel_2_2_lgumkr.mp4"],
  ["Pre-Wedding Reel 4", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739152/reel-2._fizhkk.mp4"],
  ["Pre-Wedding Reel 5", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739112/Reel_1_2_wiuv7w.mp4"],
  ["Pre-Wedding Reel 6", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739089/Reel_01_prx8gt.mp4"],
  ["Save The Date 2", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785739048/save_the_date-1_t5ql7g.mp4"],
  ["Save The Date 3", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785738931/save_the_date_copy_nbo21f.mp4"],
  ["Pre-Wedding Reel 7", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785738866/Reel-2_novei4.mp4"],
  ["Save The Date 4", "https://res.cloudinary.com/drlcnp9vf/video/upload/v1785738859/Save_the_Date_eeango.mp4"],
].map(([title, video], index) => ({
  id: index + 1,
  title,
  video,
  posterOffset: posterOffsets[index],
}));

export default reels;
