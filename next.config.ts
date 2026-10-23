import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static export served from /sarahs-momentos on GitHub Pages.
// Without it, the app runs normally (next dev / next start on localhost).
const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? "/sarahs-momentos" : "";

const nextConfig: NextConfig = {
  ...(pages ? { output: "export" as const, trailingSlash: true } : {}),
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Images are pre-sized; the loader only adds the base path.
  images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
};

export default nextConfig;
