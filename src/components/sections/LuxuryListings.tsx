import RealScoutOfficeListings from '@/components/realscout/RealScoutOfficeListings';
import Link from 'next/link';

export default function LuxuryListings() {
  return (
    <section id="luxury-listings" className="section-pad bg-[var(--color-mist)]">
      <div className="container-max">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Live MLS inventory</p>
            <h2 className="display-title mt-3 text-4xl text-[var(--color-ink)] md:text-5xl">
              Homes from $750,000
            </h2>
            <p className="mt-3 max-w-xl text-[var(--color-text-muted)]">
              Current Las Vegas Valley listings updated through RealScout. Refine on the
              full search page for beds, baths, and map filters.
            </p>
          </div>
          <Link href="/search" className="btn-outline-dark shrink-0">
            Advanced search
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-sm bg-white p-2 md:p-4">
          <RealScoutOfficeListings priceMin="750000" />
        </div>

        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          Listing information provided by GLVAR / RealScout. Information deemed reliable
          but not guaranteed. Equal Housing Opportunity.
        </p>
      </div>
    </section>
  );
}
