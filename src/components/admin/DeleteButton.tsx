"use client";
import { btnDangerCls } from "./ui";

// A small form so deleting works as a server action, with a confirm prompt.
export default function DeleteButton({
  id,
  action,
  confirmText,
}: {
  id: string;
  action: (formData: FormData) => void | Promise<void>;
  confirmText: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmText)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className={btnDangerCls}>
        Delete
      </button>
    </form>
  );
}
