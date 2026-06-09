import type { AnchorHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-brand-yellow text-slate-950 hover:bg-brand-yellow-dark focus-visible:outline-brand-yellow",
  secondary:
    "border border-white/20 bg-white/10 text-white hover:bg-white/15 focus-visible:outline-white",
  ghost:
    "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-brand-yellow",
};

export function ButtonLink({
  children,
  className,
  disabled = false,
  icon: Icon,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        disabled && "pointer-events-none opacity-50",
        className
      )}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </a>
  );
}
