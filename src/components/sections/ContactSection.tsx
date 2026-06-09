import { Mail, MessageCircle } from "lucide-react";
import { LeadForm } from "../forms/LeadForm";
import { appConfig } from "../../lib/env";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";

export function ContactSection() {
  const emailHref = appConfig.contactEmail ? `mailto:${appConfig.contactEmail}` : "#kontaktformular";
  const hasEmail = Boolean(appConfig.contactEmail);
  const hasWhatsapp = Boolean(appConfig.whatsappUrl);

  return (
    <section id="kontakt" className="bg-slate-950 py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-brand-yellow">Kontakt</p>
            <h2 className="text-balance text-3xl font-black leading-tight sm:text-5xl">
              Staplerfahrer kurzfristig benötigt?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Schreiben Sie kurz den Einsatzort, Zeitraum und die Aufgabe. Ich prüfe die
              Verfügbarkeit und sende eine schnelle Rückmeldung.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={hasWhatsapp ? appConfig.whatsappUrl : "#kontaktformular"}
                icon={MessageCircle}
                disabled={!hasWhatsapp}
              >
                WhatsApp Anfrage
              </ButtonLink>
              <ButtonLink href={emailHref} icon={Mail} variant="secondary" disabled={!hasEmail}>
                E-Mail senden
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-4">
              <article className="rounded-lg border border-white/10 bg-white/10 p-5">
                <strong className="text-brand-yellow">Kurze Anfrage-Vorlage</strong>
                <p className="mt-3 leading-7 text-slate-300">
                  Hallo, wir benötigen kurzfristig Unterstützung mit dem Stapler. Einsatzort:
                  ____. Datum/Uhrzeit: ____. Aufgabe: ____. Können Sie verfügbar sein?
                </p>
              </article>
              <article className="rounded-lg border border-white/10 bg-white/10 p-5">
                <strong className="text-brand-yellow">Kennenlern-Termin anfragen</strong>
                <p className="mt-3 leading-7 text-slate-300">
                  Hallo, wir möchten den kostenlosen Vor-Ort Kennenlern-Termin nutzen. Unser Standort
                  ist ____. Wann wäre ein Termin möglich?
                </p>
              </article>
            </div>
          </div>

          <LeadForm />
        </div>
      </Container>
    </section>
  );
}
