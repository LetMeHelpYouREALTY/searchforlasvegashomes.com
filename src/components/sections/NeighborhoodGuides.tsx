import Link from 'next/link';

const neighborhoods = [
  {
    name: 'Summerlin',
    blurb: 'Master-planned living west of the Strip with golf, trails, and Downtown Summerlin.',
    href: '/search',
  },
  {
    name: 'Henderson',
    blurb: 'Established streets, Anthem and Green Valley pockets, and easy airport access.',
    href: '/search',
  },
  {
    name: 'Southern Highlands',
    blurb: 'Guard-gated estates, fairway views, and a quieter southern valley setting.',
    href: '/search',
  },
  {
    name: 'The Lakes',
    blurb: 'Waterfront condominiums and single-family homes near Sahara and Durango.',
    href: '/search',
  },
];

export default function NeighborhoodGuides() {
  return (
    <section id="neighborhoods" className="section-pad bg-[var(--color-paper)]">
      <div className="container-max">
        <p className="eyebrow">Where buyers look first</p>
        <h2 className="display-title mt-3 max-w-2xl text-4xl text-[var(--color-ink)] md:text-5xl">
          Las Vegas neighborhoods worth a closer look
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
          Start with the map that matches your commute, lot preference, and budget—then
          refine with live MLS inventory.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {neighborhoods.map((n) => (
            <Link
              key={n.name}
              href={n.href}
              className="group border-t border-[var(--color-line)] pt-6 transition-colors"
            >
              <h3 className="display-title text-3xl text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-brass)]">
                {n.name}
              </h3>
              <p className="mt-3 max-w-md text-[var(--color-text-muted)]">{n.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold tracking-wide text-[var(--color-brass)]">
                Search homes →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
