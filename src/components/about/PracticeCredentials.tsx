import {
  ADDRESS_LINE,
  AGENT_LICENSE,
  BROKERAGE,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREAS,
} from '@/config/site';

const facts = [
  { label: 'In real estate', value: 'Since 1983' },
  { label: 'Brokerage', value: BROKERAGE },
  { label: 'With BHHS Nevada', value: 'Since September 2008' },
  { label: 'License', value: AGENT_LICENSE },
];

export default function PracticeCredentials() {
  return (
    <section className="section-pad bg-[var(--color-mist)]">
      <div className="container-max">
        <p className="eyebrow">Practice details</p>
        <h2 className="display-title mt-3 max-w-2xl text-4xl text-[var(--color-ink)] md:text-5xl">
          Licensed, local, and accountable
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
          You get a named agent, a Downtown Summerlin office, and a direct line—not a
          call center.
        </p>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
            >
              <dt className="text-sm uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                {fact.label}
              </dt>
              <dd className="mt-2 text-lg font-medium text-[var(--color-ink)]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h3 className="display-title text-2xl text-[var(--color-ink)]">
            Areas she serves
          </h3>
          <p className="mt-3 max-w-3xl text-[var(--color-text-muted)]">
            {SERVICE_AREAS.join(' · ')} · and surrounding Clark County communities.
          </p>
          <p className="mt-4 text-[var(--color-text-muted)]">{ADDRESS_LINE}</p>
          <a href={PHONE_HREF} className="btn-primary mt-6 inline-flex">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
