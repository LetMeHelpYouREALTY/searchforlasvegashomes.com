import type { FaqItem } from '@/lib/seo/jsonLd';
import JsonLd from '@/components/seo/JsonLd';
import { buildFaqSchema, buildGraph } from '@/lib/seo/schemas';

const defaultFaqs: FaqItem[] = [
  {
    q: 'How do I search Las Vegas homes on this site?',
    a: 'Use the search bar on the homepage or open the Search page for advanced filters. Results pull live MLS inventory through RealScout for Dr. Jan Duffy’s account.',
  },
  {
    q: 'What areas does Dr. Jan Duffy cover?',
    a: 'Las Vegas, Summerlin, Henderson, Spring Valley, Northwest Las Vegas, Green Valley, The Lakes, Southern Highlands, and surrounding Clark County communities.',
  },
  {
    q: 'How do I schedule a private tour?',
    a: 'Call (702) 222-1964 or use the contact section. Share addresses you want to see and preferred times; tours are arranged around listing access windows.',
  },
  {
    q: 'Where is the office located?',
    a: 'Berkshire Hathaway HomeServices Nevada Properties at 1980 Festival Plaza Drive, Suite 300, Las Vegas, NV 89135 (Downtown Summerlin). Hours are Monday–Friday 9:00 AM–6:00 PM, weekends by appointment.',
  },
];

type BuyerFaqProps = {
  faqs?: FaqItem[];
  /** Set false when a parent page already emits FAQPage JSON-LD. */
  includeSchema?: boolean;
};

export default function BuyerFaq({
  faqs = defaultFaqs,
  includeSchema = true,
}: BuyerFaqProps) {
  return (
    <section id="faq" className="section-pad bg-[var(--color-paper)]">
      {includeSchema ? (
        <JsonLd data={buildGraph([buildFaqSchema(faqs)])} />
      ) : null}
      <div className="container-max max-w-3xl">
        <p className="eyebrow">Buyer questions</p>
        <h2 className="display-title mt-3 text-4xl text-[var(--color-ink)] md:text-5xl">
          Answers before you book a tour
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
