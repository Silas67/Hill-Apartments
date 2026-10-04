import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import { logout } from "@/app/login/actions";
import AdminNav from "@/components/admin/AdminNav";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { supabase, user } = await requireAdmin();

  const { count: unread } = await supabase
    .from("contact_messages")
    .select("id", { count: "exact", head: true })
    .eq("is_read", false);

  return (
    <div className="min-h-screen bg-paper lg:flex">
      <aside className="bg-background border-b border-line lg:border-b-0 lg:border-r lg:w-64 lg:shrink-0 lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col">
        <div className="px-6 py-6">
          <Link
            href="/admin"
            className="text-[0.7rem] uppercase tracking-[0.22em] text-ink"
          >
            OG Winners Homes <span className="text-ink-faint">/ Admin</span>
          </Link>
        </div>

        <AdminNav unread={unread ?? 0} />

        <div className="hidden lg:block mt-auto px-6 py-6 border-t border-line">
          <p className="text-xs text-ink-faint truncate">{user.email}</p>
          <div className="flex items-center gap-5 mt-4">
            <Link
              href="/"
              target="_blank"
              className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted hover:text-ink"
            >
              View site
            </Link>
            <form action={logout}>
              <button className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted hover:text-ink">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-12 py-10">
        {children}
        {/* Mobile footer actions (sidebar footer is hidden below lg) */}
        <div className="lg:hidden flex items-center gap-6 mt-16 pt-6 border-t border-line">
          <Link
            href="/"
            className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted"
          >
            View site
          </Link>
          <form action={logout}>
            <button className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted">
              Sign out
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
