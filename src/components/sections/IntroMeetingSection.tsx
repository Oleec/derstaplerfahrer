import { CheckCircle2 } from "lucide-react";
import { meetingPoints } from "../../content/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function IntroMeetingSection() {
  return (
    <section id="kennenlernen" className="bg-yellow-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Kostenlos für Neukunden"
          title="Vor-Ort Kennenlern-Termin"
          description="Jedes Lager hat eigene Abläufe, Sicherheitsvorgaben und Arbeitsweisen. Deshalb lernen wir uns zuerst direkt im Betrieb kennen."
        />

        <div className="grid gap-6 rounded-lg border border-amber-200 bg-brand-yellow p-6 text-slate-950 shadow-[0_24px_60px_rgba(234,179,8,0.22)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div>
            <h3 className="text-balance text-3xl font-black leading-tight">
              Bis zu 3 Stunden, unverbindlich und praktisch vor Ort.
            </h3>
            <p className="mt-5 leading-7">
              Ziel ist es, Ihren Betrieb kennenzulernen, die wichtigsten Abläufe zu verstehen und
              gemeinsam festzustellen, wie ich Ihr Team im Bedarfsfall am effizientesten unterstützen kann.
            </p>
            <div className="mt-6 rounded-lg border border-white/60 bg-white/55 p-5">
              <strong>Ihr Vorteil:</strong> Wenn später kurzfristig Unterstützung benötigt wird, kann
              ich deutlich schneller produktiv eingesetzt werden, da ich Ihren Betrieb bereits kenne.
            </div>
          </div>

          <div className="grid gap-3">
            {meetingPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-lg border border-white/60 bg-white/55 p-4 font-bold">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
