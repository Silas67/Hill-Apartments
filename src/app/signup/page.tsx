import { redirect } from "next/navigation";

// Public sign-up is disabled. Admin accounts are created by invitation in the
// Supabase dashboard and then listed in the admin_users table.
export default function SignupPage() {
  redirect("/login");
}
