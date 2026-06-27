import { useCases } from "../../content/site";
import { Container } from "../ui/Container";
import { IconCard } from "../ui/IconCard";
import { SectionHeading } from "../ui/SectionHeading";

export function UseCasesSection() {
  return (
    <section id="einsatz" className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Für Unternehmen, die flexible Unterstützung im Lager brauchen."
          description="Der Service ist keine klassische Personalvermittlung, sondern eine selbstständige operative Dienstleistung für Lager- und Warenprozesse. Der Fokus liegt auf praktischer Unterstützung bei klar definierten Aufgaben im Betrieb."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {useCases.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
