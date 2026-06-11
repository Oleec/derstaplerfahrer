import { Link } from "react-router-dom";
import { LegalPageHeader } from "../components/legal/LegalPageHeader";
import { LegalLayout } from "../components/layout/LegalLayout";
import { Container } from "../components/ui/Container";
import { legalOwner } from "../content/legal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const sectionClass = "rounded-lg border border-slate-200 bg-white p-6 shadow-sm";
const headingClass = "text-2xl font-black leading-tight text-slate-950";
const paragraphClass = "mt-3 leading-7 text-slate-600";
const listClass = "mt-4 grid gap-2 leading-7 text-slate-600";

export function DatenschutzPage() {
  useDocumentMeta({
    title: "Datenschutzerklärung | Der Staplerfahrer",
    description:
      "Datenschutzhinweise zur Website, zum Kontaktformular, zu Supabase, E-Mail, WhatsApp und notwendigen technischen Daten.",
    canonicalPath: "/datenschutz",
  });

  return (
    <LegalLayout>
      <Container className="max-w-4xl">
        <LegalPageHeader
          title="Datenschutzerklärung"
          description="In diesen Datenschutzinformationen informieren wir darüber, welche Daten beim Besuch der Website und bei einer Anfrage verarbeitet werden."
          updatedAt="08.06.2026"
        />

        <div className="grid gap-5">
          <section className={sectionClass}>
            <h2 className={headingClass}>1. Verantwortlicher</h2>
            <p className={paragraphClass}>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):
            </p>
            <dl className="mt-4 grid gap-2 text-slate-700">
              <div>
                <dt className="font-bold">Unternehmen</dt>
                <dd>{legalOwner.businessName}</dd>
              </div>
              <div>
                <dt className="font-bold">Betreiber</dt>
                <dd>{legalOwner.ownerName}</dd>
              </div>
              <div>
                <dt className="font-bold">Adresse</dt>
                <dd>{legalOwner.address}</dd>
              </div>
              <div>
                <dt className="font-bold">Kontakt</dt>
                <dd>
                  {legalOwner.email} · {legalOwner.phone}
                </dd>
              </div>
              <div>
                <dt className="font-bold">Datenschutz-Kontakt</dt>
                <dd>{legalOwner.privacyContact}</dd>
              </div>
            </dl>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>2. Hosting und technische Zugriffsdaten</h2>
            <p className={paragraphClass}>
              Diese Website wird über Railway gehostet. Beim Besuch der Website können technisch notwendige Server-Logfiles verarbeitet werden, um die Website bereitzustellen, deren Stabilität sicherzustellen und Missbrauch zu verhindern. 
Dabei können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, Browserinformationen sowie die angeforderte Seite verarbeitet werden. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einem sicheren und funktionsfähigen Webauftritt gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>3. Kontaktformular, E-Mail und WhatsApp</h2>
            <p className={paragraphClass}>
             Wenn Sie per E-Mail oder über WhatsApp Kontakt mit uns aufnehmen, werden die von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen verarbeitet. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Kommunikation). Die Daten werden grundsätzlich für sechs Monate gespeichert, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
                </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>4. Supabase als Formular-Dienst</h2>
            <p className={paragraphClass}>
              Für die technische Speicherung von Formularanfragen wird Supabase genutzt. Die Daten
              werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Vor Veröffentlichung muss
              geprüft und dokumentiert werden, in welcher Region das Supabase-Projekt betrieben wird
              und ob ein Auftragsverarbeitungsvertrag abgeschlossen wurde.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>5. Cookies und lokale Speicherung</h2>
            <p className={paragraphClass}>
             Diese Website verwendet keine Marketing- oder Analyse-Cookies.Es werden keine Tracking-Pixel oder vergleichbare Technologien eingesetzt. Sofern ein Hinweis zur Verwendung von Cookies angezeigt wird, wird die entsprechende Auswahl lokal im Browser gespeichert, damit der Hinweis nicht bei jedem Besuch erneut erscheint. 
</p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>6. Weitergabe von Daten</h2>
            <p className={paragraphClass}>
             Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies zur Bearbeitung Ihrer Anfrage erforderlich ist, eine gesetzliche Verpflichtung besteht oder Sie ausdrücklich eingewilligt haben.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>7. Empfänger und Weitergabe von Daten</h2>
            <p className={paragraphClass}>
              Personenbezogene Daten werden nur weitergegeben, soweit dies zur technischen Bereitstellung der Website, zur Bearbeitung Ihrer Anfrage, aufgrund gesetzlicher Verpflichtungen oder mit Ihrer ausdrücklichen Einwilligung erforderlich ist.  
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>8. Ihre Rechte</h2>
            <p className={paragraphClass}>
              Ihnen stehen nach Maßgabe der DSGVO insbesondere folgende Rechte zu:
            </p>
            <ul className={listClass}>
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Widerspruchsrecht gegen bestimmte Verarbeitungen</li>
              <li>Beschwerderecht bei der Österreichischen Datenschutzbehörde</li>
            </ul>
            <p className={paragraphClass}>
              Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien,{" "}
              <a className="font-bold text-amber-700 hover:text-amber-900" href="https://www.dsb.gv.at/">
                www.dsb.gv.at
              </a>
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>9. Hinweis zu Platzhaltern</h2>
            <p className={paragraphClass}>
              Diese Datenschutzerklärung enthält bewusst markierte Platzhalter. Vor Veröffentlichung
              müssen die Angaben im <Link className="font-bold text-amber-700 hover:text-amber-900" to="/impressum">Impressum</Link>{" "}
              und in dieser Datenschutzerklärung mit den tatsächlichen Unternehmensdaten, Hosting-
              Informationen und Dienstleisterangaben ersetzt werden.
            </p>
          </section>
        </div>
      </Container>
    </LegalLayout>
  );
}
