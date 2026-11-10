import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo/jsonLd";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-[var(--color-line)] bg-[var(--color-paper)]"
    >
      <ol className="container-max flex flex-wrap items-center gap-2 py-3 text-sm text-[var(--color-text-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span aria-current="page" className="text-[var(--color-ink)]">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-[var(--color-ink)] hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
