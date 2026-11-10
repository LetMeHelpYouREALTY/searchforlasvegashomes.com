import type { ReactNode } from "react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageSchemas from "@/components/seo/PageSchemas";
import SectionFaq from "@/components/seo/SectionFaq";
import ContactSection from "@/components/ContactSection";
import type { FaqItem } from "@/lib/seo/jsonLd";

type ToolPageShellProps = {
  path: string;
  title: string;
  description: string;
  breadcrumbName: string;
  serviceName: string;
  faqs: FaqItem[];
  children: ReactNode;
};

export default function ToolPageShell({
  path,
  title,
  description,
  breadcrumbName,
  serviceName,
  faqs,
  children,
}: ToolPageShellProps) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: breadcrumbName, path },
  ];

  return (
    <main className="min-h-screen">
      <PageSchemas
        path={path}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service={{ name: serviceName, description }}
      />
      <Breadcrumbs items={breadcrumbs} />
      {children}
      <SectionFaq title={`${breadcrumbName} questions`} faqs={faqs} />
      <ContactSection />
    </main>
  );
}
