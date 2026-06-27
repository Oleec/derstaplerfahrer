import { processSteps } from "../../content/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="ablauf" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="So funktioniert die Anfrage"
          description="Ein einfacher Ablauf für Unternehmen, die flexible Unterstützung im Lager brauchen."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow text-sm font-black text-slate-950">
                  {index + 1}
                </span>
                <step.icon aria-hidden="true" className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
