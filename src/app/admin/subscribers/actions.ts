"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/auth";

export async function deleteSubscriber(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const { error } = await supabase.from("subscribers").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/subscribers");
  revalidatePath("/admin");
}
