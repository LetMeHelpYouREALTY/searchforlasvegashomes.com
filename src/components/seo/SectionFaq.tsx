import type { FaqItem } from "@/lib/seo/jsonLd";

type SectionFaqProps = {
  title?: string;
  faqs: FaqItem[];
  id?: string;
};

/** Visible FAQ block for AEO — pair with PageSchemas faqs prop for JSON-LD. */
export default function SectionFaq({
  title = "Common questions",
  faqs,
  id = "faq",
}: SectionFaqProps) {
  return (
    <section id={id} className="section-pad bg-[var(--color-paper)]">
      <div className="container-max max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="display-title mt-3 text-4xl text-[var(--color-ink)] md:text-5xl">
          {title}
        </h2>
        <dl className="mt-12 space-y-8">
          {faqs.map((f) => (
            <div key={f.q} className="border-t border-[var(--color-line)] pt-6">
              <dt className="display-title text-2xl text-[var(--color-ink)]">
                {f.q}
              </dt>
              <dd className="mt-3 text-[var(--color-text-muted)]">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
