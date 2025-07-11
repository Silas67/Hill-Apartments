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
    <nav className="text-sm mb-2">
      <ul className="flex flex-wrap space-x-2 text-white">
        <li>
          <Link href="/" className="hover:underline text-white font-medium">
            Home
          </Link>
          <span>/</span>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const label = formatSegment(segment);
          return (
            <li key={index}>
              {isLast ? (
                <span className="text-white">{label}</span>
              ) : (
                <>
                  <Link
                    href={buildHref(index)}
                    className="hover:underline text-white font-medium"
                  >
                    {label}
                  </Link>
                  <span>/</span>
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
