import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// Call at the top of every admin page and EVERY server action. A server
// action is a public POST endpoint, so it must verify the caller itself.
export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (!isAdmin) redirect("/login?error=forbidden");

  return { supabase, user };
}
