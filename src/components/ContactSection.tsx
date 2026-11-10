import {
  ADDRESS_LINE,
  ADDRESS_NEIGHBORHOOD,
  BUSINESS_HOURS,
  EMAIL,
  EMAIL_HREF,
  GBP_REVIEWS_URL,
  MAPS_SEARCH_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  STREET_ADDRESS,
} from '@/config/site';

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-[var(--color-ink)] text-white">
      <div className="container-max">
        <p className="eyebrow text-[var(--color-brass-light)]">Visit & call</p>
        <h2 className="display-title mt-3 max-w-2xl text-4xl md:text-5xl">
          Ready to search Las Vegas homes with a guide?
        </h2>
        <p className="mt-4 max-w-xl text-white/70">
          Dr. Jan Duffy · Berkshire Hathaway HomeServices Nevada Properties · Downtown
          Summerlin office.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">Phone</p>
              <a
                href={PHONE_HREF}
                className="mt-2 block text-2xl text-[var(--color-brass-light)] hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">Email</p>
              <a
                href={EMAIL_HREF}
                className="mt-2 block text-lg text-white hover:underline"
              >
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">Office</p>
              <p className="mt-2 text-lg text-white">
                {STREET_ADDRESS}
                <br />
                Las Vegas, NV 89135
                <br />
                <span className="text-white/60">({ADDRESS_NEIGHBORHOOD})</span>
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">Hours</p>
              <ul className="mt-2 space-y-1 text-white/80">
                {BUSINESS_HOURS.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.hours}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a href={PHONE_HREF} className="btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <a href={MAPS_SEARCH_URL} className="btn-ghost" target="_blank" rel="noopener noreferrer">
                Directions
              </a>
              <a href={GBP_REVIEWS_URL} className="btn-ghost" target="_blank" rel="noopener noreferrer">
                View Google Reviews
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-white/10 bg-[var(--color-ink-soft)]">
            <iframe
              title={`Map to ${ADDRESS_LINE}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE)}&output=embed`}
              className="h-[320px] w-full border-0 md:h-full md:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <p className="mt-10 text-sm text-white/50">
          {ADDRESS_LINE} · Equal Housing Opportunity · License S.0197614.LLC
        </p>
      </div>
    </section>
  );
}
