import RealScoutAdvancedSearch from '@/components/realscout/RealScoutAdvancedSearch';
import RealScoutOfficeListings from '@/components/realscout/RealScoutOfficeListings';

export default function RealScoutIntegration() {
  return (
    <section className="section-pad bg-[var(--color-mist)]">
      <div className="container-max space-y-14">
        <div>
          <p className="eyebrow">Advanced filters</p>
          <h2 className="display-title mt-3 text-4xl text-[var(--color-ink)] md:text-5xl">
            Narrow by price, beds, and more
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
            Save a search after you refine filters so new matching homes reach you
            first.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm bg-white p-2 md:p-4">
            <RealScoutAdvancedSearch />
          </div>
        </div>

        <div>
          <p className="eyebrow">Featured inventory</p>
          <h2 className="display-title mt-3 text-4xl text-[var(--color-ink)] md:text-5xl">
            Newer listings across the valley
          </h2>
          <div className="mt-8 overflow-hidden rounded-sm bg-white p-2 md:p-4">
            <RealScoutOfficeListings priceMin="500000" />
          </div>
          <p className="mt-4 text-xs text-[var(--color-text-muted)]">
            Source: GLVAR via RealScout. Information deemed reliable but not
            guaranteed. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}
