/** Serves pre-sized images from /public as-is, prefixed with the base path (GitHub Pages). */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  return src.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src;
}
