import { createClient } from "@supabase/supabase-js";

// SERVICE ROLE client: bypasses Row Level Security. Server-only, never import
// this from a "use client" file and never prefix the key with NEXT_PUBLIC_.
// Used by public form endpoints (contact, newsletter) to write rows.
export function createServiceClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");

  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
