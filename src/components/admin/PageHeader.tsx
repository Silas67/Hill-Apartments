import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 pb-8 mb-10 border-b border-line">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display-md text-ink mt-3">{title}</h1>
      </div>
      {action}
    </div>
  );
}
