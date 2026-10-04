import { createBrowserClient } from "@supabase/ssr";

// Browser client. Used by the admin form to upload images straight to
// Storage (admins only, enforced by the storage policies in the schema).
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
