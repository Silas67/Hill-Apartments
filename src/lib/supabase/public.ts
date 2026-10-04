import { createClient } from "@supabase/supabase-js";

// Cookie-less anonymous client for the PUBLIC site. It only ever sees what
// the RLS policies expose to visitors (published content), and because it
// never touches cookies, pages using it can still be cached/static.
export function createPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}
