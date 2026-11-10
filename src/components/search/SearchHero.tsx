import RealScoutSimpleSearch from '@/components/realscout/RealScoutSimpleSearch';
import { AGENT_NAME, PHONE_DISPLAY, PHONE_HREF } from '@/config/site';

export default function SearchHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(168,135,90,0.35), transparent 55%), linear-gradient(160deg, #0c1219 0%, #1a2330 100%)',
        }}
      />
      <div className="container-max relative z-10 py-20 md:py-28">
        <p className="eyebrow text-[var(--color-brass-light)]">Live MLS search</p>
        <h1 className="display-title mt-4 max-w-3xl text-5xl md:text-6xl">
          Search Las Vegas homes for sale
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/75">
          Filter active inventory with RealScout, then call {AGENT_NAME} at{" "}
          {PHONE_DISPLAY} to tour or request off-market options.
        </p>
        <div className="animate-search-glow mt-8 max-w-2xl rounded-sm bg-white/95 p-3 md:p-4">
          <RealScoutSimpleSearch />
        </div>
        <a href={PHONE_HREF} className="btn-ghost mt-6 inline-flex">
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
