import { useState } from "react";
import { ArrowRight, Forklift, Menu, X } from "lucide-react";
import { navItems } from "../../content/site";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <a href="#" className="flex items-center gap-3 font-black" aria-label="Der Staplerfahrer Startseite">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow text-slate-950">
              <Forklift aria-hidden="true" className="h-6 w-6" />
            </span>
            <span className="text-lg leading-none">
              Der <span className="text-brand-yellow">Staplerfahrer</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 lg:flex" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-brand-yellow">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="#kontaktformular" icon={ArrowRight}>
              Verfügbarkeit anfragen
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white lg:hidden"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <nav className="grid gap-2 border-t border-white/10 py-4 lg:hidden" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-brand-yellow"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
