import { Link } from "react-router-dom";
import { cookieSettingsEvent } from "../../content/legal";
import { Container } from "../ui/Container";

export function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new Event(cookieSettingsEvent));
  };

  return (
    <footer className="bg-slate-950 py-7 text-sm text-slate-400">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid gap-2">
            <span>© 2026 Der Staplerfahrer</span>
            <span>Selbstständiger B2B-Service · Lager · Stapler · Logistik</span>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Rechtliche Links">
            <Link className="transition hover:text-brand-yellow" to="/impressum">
              Impressum
            </Link>
            <Link className="transition hover:text-brand-yellow" to="/datenschutz">
              Datenschutz
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-left transition hover:text-brand-yellow"
            >
              Cookie-Einstellungen
            </button>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
