import { LegalPageHeader } from "../components/legal/LegalPageHeader";
import { LegalLayout } from "../components/layout/LegalLayout";
import { Container } from "../components/ui/Container";
import { legalOwner, legalSources } from "../content/legal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const sectionClass = "rounded-lg border border-slate-200 bg-white p-6 shadow-sm";

export function ImpressumPage() {
  useDocumentMeta({
    title: "Impressum | Der Staplerfahrer",
    description:
      "Impressum und Anbieterkennzeichnung für Der Staplerfahrer gemäß österreichischen Informationspflichten.",
    canonicalPath: "/impressum",
  });

  return (
    <LegalLayout>
      <Container className="max-w-4xl">
        <LegalPageHeader
          title="Impressum"
          description="Anbieterkennzeichnung und Offenlegung für diese Website. Die markierten Platzhalter müssen vor Veröffentlichung durch reale Unternehmensdaten ersetzt werden."
          updatedAt="08.06.2026"
        />

        <div className="grid gap-5">
          <section className={sectionClass}>
            <h2 className="text-2xl font-black text-slate-950">Angaben gemäß § 5 ECG</h2>
            <dl className="mt-5 grid gap-4 text-slate-700">
              <div>
                <dt className="font-bold text-slate-950">Name / Firma</dt>
                <dd>{legalOwner.businessName}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Betreiber</dt>
                <dd>{legalOwner.ownerName}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Anschrift</dt>
                <dd>{legalOwner.address}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Kontakt</dt>
                <dd>
                  E-Mail: {legalOwner.email}
                  <br />
                  Telefon: {legalOwner.phone}
                </dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Gewerbe / Unternehmensgegenstand</dt>
                <dd>{legalOwner.tradeDescription}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Zuständige Behörde</dt>
                <dd>{legalOwner.tradeAuthority}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Kammer / Berufsvertretung</dt>
                <dd>{legalOwner.chamber}</dd>
              </div>
            </dl>
          </section>

          <section className={sectionClass}>
            <h2 className="text-2xl font-black text-slate-950">Offenlegung gemäß Mediengesetz</h2>
            <dl className="mt-5 grid gap-4 text-slate-700">
              <div>
                <dt className="font-bold text-slate-950">Medieninhaber</dt>
                <dd>{legalOwner.mediaOwner}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Unternehmensgegenstand</dt>
                <dd>{legalOwner.tradeDescription}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-950">Zweck der Website</dt>
                <dd>
                  Information über flexible B2B-Unterstützung im Bereich Lager, Stapler, Logistik,
                  Wareneingang und Versand in Österreich.
                </dd>
              </div>
            </dl>
          </section>

          <section className={sectionClass}>
            <h2 className="text-2xl font-black text-slate-950">Haftung und externe Links</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
              übernommen werden. Externe Links werden bei Setzung geprüft; für fremde Inhalte ist
              ausschließlich der jeweilige Betreiber verantwortlich.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className="text-2xl font-black text-slate-950">Quellen und rechtliche Orientierung</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Die Struktur orientiert sich an öffentlich zugänglichen Informationen österreichischer
              Stellen und ersetzt keine individuelle Rechtsberatung.
            </p>
            <ul className="mt-4 grid gap-2">
              {legalSources.map((source) => (
                <li key={source.href}>
                  <a className="font-bold text-amber-700 hover:text-amber-900" href={source.href}>
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </LegalLayout>
  );
}
