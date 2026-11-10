const presets = [
  { label: 'Under $600K', href: '/search#luxury-listings', note: 'Starter & move-up' },
  { label: '$750K – $1.2M', href: '/search', note: 'Primary luxury band' },
  { label: '$1.5M+', href: '/search', note: 'Estate & custom' },
  { label: 'Single-family', href: '/search', note: 'SFR focus' },
];

export default function SearchFilters() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-10">
      <div className="container-max">
        <p className="eyebrow">Quick starts</p>
        <h2 className="display-title mt-2 text-3xl text-[var(--color-ink)]">
          Common buyer filters
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {presets.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="border border-[var(--color-line)] bg-white px-5 py-4 transition-colors hover:border-[var(--color-brass)]"
            >
              <span className="block font-semibold text-[var(--color-ink)]">{p.label}</span>
              <span className="mt-1 block text-sm text-[var(--color-text-muted)]">
                {p.note}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
