'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  AGENT_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
} from '@/config/site';

const links = [
  { name: 'Search Homes', href: '/search' },
  { name: 'Neighborhoods', href: '/#neighborhoods' },
  { name: 'Featured', href: '/#featured-listing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(251,251,252,0.92)] backdrop-blur-md">
      <nav className="container-max flex h-[4.25rem] items-center justify-between">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <div className="display-title text-xl leading-none text-[var(--color-ink)] md:text-2xl">
            {SITE_NAME}
          </div>
          <div className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            {AGENT_NAME} · Las Vegas
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="btn-primary !px-4 !py-2.5 text-sm"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <button
          type="button"
          className="text-[var(--color-ink)] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-paper)] lg:hidden">
          <div className="container-max flex flex-col gap-1 py-4">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3 text-base font-medium text-[var(--color-ink)]"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
