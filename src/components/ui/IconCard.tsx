import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";

type IconCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
  tone?: "light" | "dark";
};

export function IconCard({ body, icon: Icon, title, tone = "light" }: IconCardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border p-6 shadow-(--shadow-soft)",
        tone === "dark"
          ? "border-white/10 bg-white/10 text-white shadow-none"
          : "border-slate-200 bg-white text-slate-950"
      )}
    >
      <div
        className={cn(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-lg",
          tone === "dark" ? "bg-brand-yellow text-slate-950" : "bg-amber-100 text-amber-800"
        )}
      >
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-black leading-tight">{title}</h3>
      <p className={cn("mt-3 leading-7", tone === "dark" ? "text-slate-300" : "text-slate-600")}>
        {body}
      </p>
    </article>
  );
}
