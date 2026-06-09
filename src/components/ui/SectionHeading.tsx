import { cn } from "../../lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  align = "center",
  description,
  eyebrow,
  title,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        tone === "dark" ? "text-white" : "text-slate-950"
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-bold uppercase",
            tone === "dark" ? "text-brand-yellow" : "text-amber-700"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7", tone === "dark" ? "text-slate-300" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
