import JsonLd from "@/components/seo/JsonLd";
import type { BreadcrumbItem, FaqItem } from "@/lib/seo/jsonLd";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildGraph,
  buildHowToSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo/schemas";

type PageSchemasProps = {
  path: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
  service?: { name: string; description: string };
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  };
  speakableSelectors?: string[];
};

export default function PageSchemas({
  path,
  title,
  description,
  breadcrumbs,
  faqs,
  service,
  howTo,
  speakableSelectors,
}: PageSchemasProps) {
  const nodes: Record<string, unknown>[] = [
    buildWebPageSchema({ path, title, description, speakableSelectors }),
    buildBreadcrumbSchema(breadcrumbs),
  ];

  if (service) {
    nodes.push(
      buildServiceSchema({
        name: service.name,
        description: service.description,
        path,
      }),
    );
  }

  if (faqs?.length) {
    nodes.push(buildFaqSchema(faqs));
  }

  if (howTo) {
    nodes.push(
      buildHowToSchema({
        ...howTo,
        url: absoluteUrl(path),
      }),
    );
  }

  return <JsonLd data={buildGraph(nodes)} />;
}
