import { useCases } from "../../content/site";
import { Container } from "../ui/Container";
import { IconCard } from "../ui/IconCard";
import { SectionHeading } from "../ui/SectionHeading";

export function UseCasesSection() {
  return (
    <section id="einsatz" className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Für Unternehmen, die schnell eine praktische Lösung brauchen."
          description="Der Service ist keine klassische Personalvermittlung, sondern operative Unterstützung, wenn kurzfristig jemand mit Stapler-Erfahrung gebraucht wird."
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
