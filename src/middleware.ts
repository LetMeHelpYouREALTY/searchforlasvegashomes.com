import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.searchforlasvegashomes.com";

/**
 * Enforce www as the primary host for Google Search Console.
 * Also strip trailing slashes (except `/`) so canonicals stay consistent.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  let shouldRedirect = false;

  if (host === "searchforlasvegashomes.com") {
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    shouldRedirect = true;
  }

  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)",
  ],
};
