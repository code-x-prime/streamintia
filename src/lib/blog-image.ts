/** Resize/crop a Sanity CDN image on the fly. Local images are returned unchanged. */
export function imgUrl(url: string, width: number, height?: number): string {
  if (!url.includes("cdn.sanity.io")) return url;
  const q = new URLSearchParams({
    w: String(width),
    auto: "format",
    fit: "crop",
  });
  if (height) q.set("h", String(height));
  return `${url}?${q.toString()}`;
}
