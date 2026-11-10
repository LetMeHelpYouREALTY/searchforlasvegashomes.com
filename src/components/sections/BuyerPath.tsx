const steps = [
  {
    n: '01',
    title: 'Define the brief',
    text: 'Price band, must-haves, and the zip codes that fit your day-to-day.',
  },
  {
    n: '02',
    title: 'Search live inventory',
    text: 'Use RealScout filters on this site, then save searches for new matches.',
  },
  {
    n: '03',
    title: 'Tour with context',
    text: 'Dr. Jan Duffy walks comps, taxes, HOA details, and negotiation timing with you.',
  },
];

export default function BuyerPath() {
  return (
    <section className="section-pad bg-[var(--color-ink)] text-white">
      <div className="container-max">
        <p className="eyebrow text-[var(--color-brass-light)]">Buyer path</p>
        <h2 className="display-title mt-3 max-w-2xl text-4xl md:text-5xl">
          A clear path from first search to keys
        </h2>
        <p className="mt-4 max-w-xl text-white/70">
          One job per step—so you spend less time scrolling and more time deciding.
        </p>

        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-white/15 pt-6">
              <span className="text-sm tracking-[0.2em] text-[var(--color-brass-light)]">
                {step.n}
              </span>
              <h3 className="display-title mt-3 text-2xl md:text-3xl">{step.title}</h3>
              <p className="mt-3 text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
