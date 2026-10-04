"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/auth";

export async function setMessageRead(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const read = formData.get("read") === "true";
  if (!id) return;

  const { error } = await supabase
    .from("contact_messages")
    .update({ is_read: read })
    .eq("id", id);
  if (error) throw new Error(error.message);

  // "layout" so the unread badge in the sidebar refreshes too.
  revalidatePath("/admin", "layout");
}

export async function deleteMessage(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const { error } = await supabase.from("contact_messages").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin", "layout");
}
