import JsonLd from "@/components/seo/JsonLd";
import {
  buildGraph,
  buildLocalBusinessSchema,
  buildPersonSchema,
  buildWebsiteSchema,
} from "@/lib/seo/schemas";

/** Sitewide graph: LocalBusiness + Person + WebSite on every page. */
export default function StructuredData() {
  return (
    <JsonLd
      data={buildGraph([
        buildLocalBusinessSchema(),
        buildPersonSchema(),
        buildWebsiteSchema(),
      ])}
    />
  );
}
