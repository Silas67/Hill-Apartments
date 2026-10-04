import { createClient } from "@/lib/supabase/server";

// Route handlers are public endpoints too, so verify the admin here.
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (!isAdmin) return new Response("Forbidden", { status: 403 });

  const { data } = await supabase
    .from("subscribers")
    .select("email, created_at")
    .order("created_at", { ascending: false });

  // Quote every field and neutralise spreadsheet formula injection
  // (cells starting with = + - @ would otherwise run in Excel).
  const cell = (v: string) => {
    const safe = /^[=+\-@\t\r]/.test(v) ? `'${v}` : v;
    return `"${safe.replace(/"/g, '""')}"`;
  };

  const rows = [
    "email,subscribed_at",
    ...(data ?? []).map((r) => `${cell(r.email)},${cell(r.created_at)}`),
  ];

  return new Response(rows.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="subscribers.csv"',
      "Cache-Control": "no-store",
    },
  });
}
