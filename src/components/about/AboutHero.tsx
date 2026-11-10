import Link from 'next/link';
import {
  AGENT_BYLINE,
  AGENT_LICENSE,
  BROKERAGE,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/config/site';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 15% 0%, rgba(168,135,90,0.28), transparent 50%), linear-gradient(160deg, #0c1219 0%, #1a2330 100%)',
        }}
      />
      <div className="container-max relative z-10 py-20 md:py-28">
        <p className="eyebrow !text-[var(--color-brass-light)]">About your Las Vegas REALTOR®</p>
        <h1 className="display-title mt-4 max-w-3xl text-5xl !text-white md:text-6xl lg:text-7xl">
          Dr. Jan Duffy buys and sells homes with precision
        </h1>
        <p className="mt-5 max-w-2xl text-lg !text-white/80 md:text-xl">
          Since 1983 she has guided Las Vegas buyers and sellers through pricing,
          negotiation, and closing—one clear next step at a time.
        </p>
        <p className="mt-4 text-sm !text-white/55">
          {AGENT_BYLINE} · {BROKERAGE} · License {AGENT_LICENSE}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={PHONE_HREF} className="btn-primary">
            Call {PHONE_DISPLAY}
          </a>
          <Link href="/search" className="btn-ghost">
            Search Las Vegas homes
          </Link>
        </div>
      </div>
    </section>
  );
}
