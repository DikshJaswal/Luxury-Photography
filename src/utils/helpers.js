export function getOptimizedImageUrl(url) {
  if (!url || !url.includes("/image/upload/")) return url;

  return url.replace(
    "/image/upload/",
    "/image/upload/f_auto,q_auto:best,dpr_auto/"
  );
}

export function getVideoPosterUrl(url, startOffset) {
  if (!url || !url.includes("/video/upload/")) return undefined;

  const [source, query] = url.split("?");
  const startOffsetTransformation = startOffset ? `so_${startOffset},` : "";
  const poster = source.replace(
    "/video/upload/",
    `/video/upload/${startOffsetTransformation}w_640,q_auto,f_jpg/`
  );

  return query ? `${poster}?${query}` : poster;
}

export function getOptimizedVideoUrl(url) {
  if (!url || !url.includes("/video/upload/")) return url;

  return url.replace(
    "/video/upload/",
    "/video/upload/q_auto:good,vc_auto/"
  );
}
