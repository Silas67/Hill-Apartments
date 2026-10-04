import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import { formatDate } from "@/lib/format";
import type { ContactMessage } from "@/lib/types";

export default async function Dashboard() {
  const { supabase } = await requireAdmin();

  const [props, live, unread, subs, latest] = await Promise.all([
    supabase.from("properties").select("id", { count: "exact", head: true }),
    supabase
      .from("properties")
      .select("id", { count: "exact", head: true })
      .eq("status", "published"),
    supabase
      .from("contact_messages")
      .select("id", { count: "exact", head: true })
      .eq("is_read", false),
    supabase.from("subscribers").select("id", { count: "exact", head: true }),
    supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  const stats = [
    { label: "Properties", value: props.count ?? 0, href: "/admin/properties" },
    { label: "Published", value: live.count ?? 0, href: "/admin/properties" },
    { label: "Unread messages", value: unread.count ?? 0, href: "/admin/messages" },
    { label: "Subscribers", value: subs.count ?? 0, href: "/admin/subscribers" },
  ];

  const messages = (latest.data ?? []) as ContactMessage[];

  return (
    <>
      <PageHeader eyebrow="Overview" title="Dashboard" />

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-px bg-line border border-line">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-background p-6 hover:bg-paper transition-colors"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ink-faint">
              {s.label}
            </p>
            <p className="display-md text-ink mt-4">{s.value}</p>
          </Link>
        ))}
      </div>

      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow">Latest messages</p>
          <Link
            href="/admin/messages"
            className="link-underline text-[0.7rem] uppercase tracking-[0.18em] text-ink"
          >
            View all
          </Link>
        </div>

        {messages.length === 0 ? (
          <p className="prose-quiet mt-6">No messages yet.</p>
        ) : (
          <ul className="mt-6 border-t border-line bg-background">
            {messages.map((m) => (
              <li key={m.id} className="border-b border-line">
                <Link
                  href="/admin/messages"
                  className="flex items-center gap-4 px-5 py-4 hover:bg-paper transition-colors"
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      m.is_read ? "bg-line" : "bg-accent"
                    }`}
                  />
                  <span className="text-sm text-ink w-40 truncate">{m.name}</span>
                  <span className="text-sm text-ink-muted flex-1 truncate">
                    {m.subject || m.message}
                  </span>
                  <span className="text-xs text-ink-faint whitespace-nowrap">
                    {formatDate(m.created_at)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
