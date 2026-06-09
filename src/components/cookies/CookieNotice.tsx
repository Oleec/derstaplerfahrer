import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cookieSettingsEvent, cookieStorageKey } from "../../content/legal";
import { Container } from "../ui/Container";

type StoredCookieNotice = {
  acceptedNecessary: boolean;
  timestamp: string;
};

function readStoredNotice() {
  try {
    const storedValue = window.localStorage.getItem(cookieStorageKey);
    return storedValue ? (JSON.parse(storedValue) as StoredCookieNotice) : null;
  } catch {
    return null;
  }
}

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(() => !readStoredNotice());

  useEffect(() => {
    const openSettings = () => setIsVisible(true);
    window.addEventListener(cookieSettingsEvent, openSettings);

    return () => window.removeEventListener(cookieSettingsEvent, openSettings);
  }, []);

  const acceptNecessary = () => {
    const value: StoredCookieNotice = {
      acceptedNecessary: true,
      timestamp: new Date().toISOString(),
    };

    window.localStorage.setItem(cookieStorageKey, JSON.stringify(value));
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 py-4 shadow-[0_-18px_45px_rgba(15,23,42,0.12)] backdrop-blur">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-yellow text-slate-950">
            <Cookie aria-hidden="true" className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-950">Privatsphäre und notwendige Speicherung</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Diese Website verwendet keine Marketing- oder Analyse-Cookies. Wir speichern nur Ihre
              Entscheidung zu diesem Hinweis lokal im Browser, damit er nicht erneut erscheint.
            </p>
            <Link to="/datenschutz" className="mt-2 inline-flex text-sm font-bold text-amber-700 hover:text-amber-900">
              Datenschutzhinweise lesen
            </Link>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
            <button
              type="button"
              onClick={acceptNecessary}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-yellow px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-brand-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
            >
              Verstanden
            </button>
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              <X aria-hidden="true" className="h-4 w-4" />
              Schließen
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
