// components/Breadcrumbs.tsx
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const formatSegment = (segment: string) => {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const buildHref = (index: number) => {
    return "/" + pathSegments.slice(0, index + 1).join("/");
  };

  return (
    <nav aria-label="Breadcrumb" className="text-[0.7rem]">
      <ul className="flex flex-wrap items-center gap-x-2 uppercase tracking-[0.22em] text-ink-faint">
        <li className="flex items-center gap-x-2">
          <Link href="/" className="link-underline hover:text-ink transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const label = formatSegment(segment);
          return (
            <li key={index} className="flex items-center gap-x-2">
              {isLast ? (
                <span aria-current="page" className="text-ink">
                  {label}
                </span>
              ) : (
                <>
                  <Link
                    href={buildHref(index)}
                    className="link-underline hover:text-ink transition-colors"
                  >
                    {label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
