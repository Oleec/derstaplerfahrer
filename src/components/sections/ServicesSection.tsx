import { services } from "../../content/site";
import { Container } from "../ui/Container";
import { IconCard } from "../ui/IconCard";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="leistungen" className="bg-slate-900 py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          tone="dark"
          title="Fokus auf Stapler, Lagerfluss und schnelle Entlastung."
          description="Klare Leistungen, klare Kommunikation und einfache Abrechnung. Besonders interessant für kleinere Lager, E-Commerce, Handel, Import/Export, Produktion und Logistikbetriebe."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((item) => (
            <IconCard key={item.title} {...item} tone="dark" />
          ))}
        </div>
      </Container>
    </section>
  );
}
