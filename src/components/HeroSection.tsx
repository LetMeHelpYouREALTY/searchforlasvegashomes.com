import Link from 'next/link';
import RealScoutSimpleSearch from '@/components/realscout/RealScoutSimpleSearch';
import {
  AGENT_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
} from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[var(--color-ink)] text-white">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/listings/9528-rainfall-avenue/front-exterior-twilight.jpg"
          alt="Las Vegas luxury home exterior at twilight"
          className="absolute inset-0 h-full w-full min-w-full object-cover object-center animate-hero-veil"
          width={1600}
          height={1200}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(12,18,25,0.92) 0%, rgba(12,18,25,0.78) 42%, rgba(12,18,25,0.55) 100%), radial-gradient(ellipse at 70% 15%, rgba(168,135,90,0.22), transparent 52%)',
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[92vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <div className="container-max max-w-4xl">
          <p className="eyebrow animate-hero-rise !text-[var(--color-brass-light)]">
            {SITE_NAME}
          </p>
          <h1 className="display-title animate-hero-rise-delay mt-5 max-w-3xl text-5xl !text-white sm:text-6xl md:text-7xl">
            Find your next Las Vegas home
          </h1>
          <p className="animate-hero-rise-late mt-5 max-w-xl text-lg !text-white/85 md:text-xl">
            Private search guidance from {AGENT_NAME} for buyers who want the
            right address—not a longer shortlist.
          </p>

          <div className="animate-hero-rise-late mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/search" className="btn-primary">
              Open home search
            </Link>
            <a href={PHONE_HREF} className="btn-ghost">
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="animate-search-glow mt-10 max-w-2xl rounded-sm bg-white/95 p-3 backdrop-blur-sm md:p-4">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </div>
    </section>
  );
}
