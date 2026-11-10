/** Serialize JSON-LD safely for Next.js script tags (escape `<`). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export type FaqItem = { q: string; a: string };

export type BreadcrumbItem = {
  name: string;
  path: string;
};
