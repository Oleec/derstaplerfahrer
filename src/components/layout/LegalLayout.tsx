import type { ReactNode } from "react";
import { ArrowLeft, Forklift } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Footer } from "./Footer";

type LegalLayoutProps = {
  children: ReactNode;
};

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <Container>
          <div className="flex min-h-16 items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center gap-3 font-black text-slate-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow text-slate-950">
                <Forklift aria-hidden="true" className="h-6 w-6" />
              </span>
              <span>
                Der <span className="text-amber-600">Staplerfahrer</span>
              </span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-amber-300 hover:text-slate-950"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Zurück
            </Link>
          </div>
        </Container>
      </header>
      <main className="bg-slate-50 py-14 sm:py-18">{children}</main>
      <Footer />
    </>
  );
}
