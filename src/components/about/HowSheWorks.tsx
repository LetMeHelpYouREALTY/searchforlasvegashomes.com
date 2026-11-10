const steps = [
  {
    title: 'Listen, then brief',
    text: 'Budget, must-haves, and timeline first. The search only starts after the brief is clear.',
  },
  {
    title: 'Search and tour',
    text: 'Live MLS filters, private showings, and honest notes on condition, taxes, and HOA dues.',
  },
  {
    title: 'Offer with a plan',
    text: 'She structures price, contingencies, and escalation language around the listing’s real leverage.',
  },
  {
    title: 'Close without drama',
    text: 'Inspections, repairs, appraisal, and funding get tracked until keys exchange.',
  },
];

export default function HowSheWorks() {
  return (
    <section className="section-pad bg-[var(--color-ink)] text-white">
      <div className="container-max">
        <p className="eyebrow !text-[var(--color-brass-light)]">How she works</p>
        <h2 className="display-title mt-3 max-w-2xl text-4xl md:text-5xl">
          A realtor process buyers can follow
        </h2>
        <p className="mt-4 max-w-xl text-white/70">
          No mystery steps. Each phase has one job and a clear handoff.
        </p>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-white/15 pt-6">
              <span className="text-sm tracking-[0.2em] text-[var(--color-brass-light)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display-title mt-3 text-2xl">{step.title}</h3>
              <p className="mt-3 text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
