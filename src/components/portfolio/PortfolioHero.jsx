import VideoHero from "../common/VideoHero";

function PortfolioHero({ mediaKey = "portfolio", video, poster }) {
  return (
    <VideoHero
      mediaKey={mediaKey}
      video={video}
      poster={poster}
    />
  );
}

export default PortfolioHero;
