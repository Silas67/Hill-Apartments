import { requireAdmin } from "@/lib/admin/auth";
import PageHeader from "@/components/admin/PageHeader";
import DeleteButton from "@/components/admin/DeleteButton";
import { btnGhostCls } from "@/components/admin/ui";
import { formatDate } from "@/lib/format";
import type { ContactMessage } from "@/lib/types";
import { deleteMessage, setMessageRead } from "./actions";

export default async function MessagesPage() {
  const { supabase } = await requireAdmin();
  const { data } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });
  const messages = (data ?? []) as ContactMessage[];

  return (
    <>
      <PageHeader eyebrow="Inbox" title="Messages" />

      {messages.length === 0 ? (
        <p className="prose-quiet">No messages yet.</p>
      ) : (
        <ul className="bg-background border border-line max-w-4xl">
          {messages.map((m) => (
            <li key={m.id} className="border-b border-line last:border-0">
              <details className="group">
                <summary className="flex items-center gap-4 px-5 py-4 cursor-pointer list-none hover:bg-paper transition-colors">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      m.is_read ? "bg-line" : "bg-accent"
                    }`}
                  />
                  <span className={`text-sm w-40 truncate ${m.is_read ? "text-ink-muted" : "text-ink font-medium"}`}>
                    {m.name}
                  </span>
                  <span className="text-sm text-ink-muted flex-1 truncate">
                    {m.subject || m.message}
                  </span>
                  <span className="text-xs text-ink-faint whitespace-nowrap">
                    {formatDate(m.created_at)}
                  </span>
                </summary>

                <div className="px-5 pb-6 pt-2 pl-[2.75rem]">
                  <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-ink-muted">
                    <a href={`mailto:${m.email}`} className="link-underline text-ink">
                      {m.email}
                    </a>
                    {m.phone && (
                      <a href={`tel:${m.phone}`} className="link-underline text-ink">
                        {m.phone}
                      </a>
                    )}
                  </div>
                  {m.subject && (
                    <p className="text-sm text-ink font-medium mt-5">{m.subject}</p>
                  )}
                  <p className="prose-quiet mt-3 whitespace-pre-wrap">{m.message}</p>

                  <div className="flex items-center gap-6 mt-6">
                    <form action={setMessageRead}>
                      <input type="hidden" name="id" value={m.id} />
                      <input type="hidden" name="read" value={String(!m.is_read)} />
                      <button type="submit" className={btnGhostCls}>
                        Mark as {m.is_read ? "unread" : "read"}
                      </button>
                    </form>
                    <DeleteButton
                      id={m.id}
                      action={deleteMessage}
                      confirmText="Delete this message? This cannot be undone."
                    />
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
