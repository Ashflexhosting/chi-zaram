/**
 * Harvest Editorial deployment paths: keep Manus root hosting and the GitHub Pages
 * repository subpath in sync for internal routes, asset URLs, and social previews.
 */
export const siteBase = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

export function assetPath(path: string) {
  return `${siteBase}${path.startsWith("/") ? path : `/${path}`}`;
}

export function routePath(path: string) {
  return `${siteBase}${path.startsWith("/") ? path : `/${path}`}`;
}
