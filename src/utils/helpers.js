export function getOptimizedImageUrl(url) {
  if (!url || !url.includes("/image/upload/")) return url;

  return url.replace(
    "/image/upload/",
    "/image/upload/f_auto,q_auto:best,dpr_auto/"
  );
}
