import { ChevronDown } from "lucide-react";
import { faqs } from "../../content/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function FaqSection() {
  return (
    <section id="faq" className="bg-slate-900 py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          tone="dark"
          title="Häufige Fragen"
          description="Kurz und klar für Unternehmen, die den Service schnell einschätzen möchten."
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-lg border border-white/10 bg-white/10 p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
