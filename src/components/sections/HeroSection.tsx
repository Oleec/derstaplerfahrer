import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { heroHighlights, trustSignals } from "../../content/site";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <img
        src="/warehouse-forklift-hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/88 to-slate-950/28" />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-brand-yellow/40 bg-brand-yellow/15 px-3 py-2 text-sm font-bold text-yellow-100">
            <CalendarCheck aria-hidden="true" className="h-4 w-4" />
            Neu: Kostenloser Vor-Ort Kennenlern-Termin für Neukunden
          </p>

          <h1 className="text-balance text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            Wenn ein <span className="text-brand-yellow">Staplerfahrer</span> fehlt, springe ich ein.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Flexible Staplerfahrer-Unterstützung auf selbstständiger Basis für Lager, Logistik,
            Produktion, Handel und E-Commerce. Tageweise buchbar, ideal bei Personalausfällen,
            Auftragsspitzen oder kurzfristigem Lagerbedarf.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#kontaktformular" icon={ArrowRight}>
              Jetzt anfragen
            </ButtonLink>
            <ButtonLink href="#kennenlernen" icon={CalendarCheck} variant="secondary">
              Kennenlern-Termin ansehen
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100"
              >
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {heroHighlights.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-slate-950/55 p-4 backdrop-blur">
              <h2 className="text-base font-black">{item.title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-300">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
