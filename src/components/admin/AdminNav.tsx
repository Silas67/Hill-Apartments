"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/properties", label: "Properties" },
  { href: "/admin/messages", label: "Messages" },
  { href: "/admin/subscribers", label: "Subscribers" },
];

export default function AdminNav({ unread }: { unread: number }) {
  const pathname = usePathname();

  return (
    <nav className="flex lg:flex-col gap-1 px-3 pb-3 overflow-x-auto">
      {items.map((item) => {
        const active = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center justify-between gap-3 whitespace-nowrap px-3 py-3 text-[0.72rem] uppercase tracking-[0.18em] transition-colors ${
              active
                ? "bg-paper text-ink"
                : "text-ink-muted hover:text-ink hover:bg-paper"
            }`}
          >
            {item.label}
            {item.label === "Messages" && unread > 0 && (
              <span className="bg-accent text-white text-[0.65rem] tracking-normal px-2 py-0.5 rounded-full">
                {unread}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
