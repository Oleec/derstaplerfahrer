import { ArrowRight, CalendarCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import { pricingPlans } from "../../content/site";
import { cn } from "../../lib/cn";
import { ButtonLink } from "../ui/ButtonLink";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function PricingSection() {
  return (
    <section id="preise" className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Typische Einsatzkosten"
          title="Flexible Unterstützung – transparente Orientierung."
          description="Eine praktische Lösung für kurzfristigen operativen Bedarf im Lager."
        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => {
            const isFeatured = Boolean(plan.featured);
            const isLowRisk = Boolean(plan.lowRisk);

            return (
              <article
                key={plan.title}
                className={cn(
                  "relative flex min-h-full flex-col overflow-hidden rounded-lg border p-6 shadow-(--shadow-soft) transition",
                  isFeatured
                    ? "border-amber-400 bg-slate-950 text-white ring-2 ring-amber-200"
                    : "bg-white text-slate-950",
                  isLowRisk && "border-green-200",
                  !isFeatured && !isLowRisk && "border-slate-200"
                )}
              >
                {isFeatured ? <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-yellow" /> : null}

                <div className="mb-5 flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
                      isFeatured
                        ? "bg-brand-yellow text-slate-950"
                        : isLowRisk
                          ? "bg-brand-green text-white"
                          : "bg-amber-100 text-amber-800"
                    )}
                  >
                    {isLowRisk ? (
                      <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                    ) : isFeatured ? (
                      <CalendarCheck aria-hidden="true" className="h-6 w-6" />
                    ) : (
                      <ArrowRight aria-hidden="true" className="h-6 w-6" />
                    )}
                  </div>

                  {isFeatured ? (
                    <span className="rounded-md bg-brand-yellow px-3 py-1.5 text-xs font-black uppercase text-slate-950">
                      Empfohlen
                    </span>
                  ) : isLowRisk ? (
                    <span className="rounded-md bg-green-100 px-3 py-1.5 text-xs font-black uppercase text-green-800">
                      Ohne Risiko
                    </span>
                  ) : null}
                </div>

              <p
                className={cn(
                  "text-sm font-black uppercase",
                  isFeatured ? "text-brand-yellow" : isLowRisk ? "text-green-700" : "text-amber-700"
                )}
              >
                {plan.label}
              </p>
              <h3 className={cn("mt-3 text-2xl font-black leading-tight", isFeatured ? "text-white" : "text-slate-950")}>
                {plan.title}
              </h3>
              <p className="mt-5 grid gap-2">
                <span className={cn("text-4xl font-black leading-none", isFeatured ? "text-brand-yellow" : "text-slate-950")}>
                  {plan.price}
                </span>
                <span className={cn("text-sm font-bold", isFeatured ? "text-slate-200" : "text-slate-500")}>
                  {plan.subtitle}
                </span>
              </p>
              <p className={cn("mt-5 leading-7", isFeatured ? "text-slate-200" : "text-slate-600")}>
                {plan.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn("flex items-start gap-3", isFeatured ? "text-white" : "text-slate-700")}
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className={cn("mt-0.5 h-5 w-5 shrink-0", isFeatured ? "text-brand-yellow" : "text-brand-green")}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-amber-200 bg-white p-6 shadow-(--shadow-soft) lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-amber-700">Nächster Schritt</p>
            <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950">
              Sie sind nicht sicher, welche Unterstützung passt?
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Vereinbaren Sie zuerst einen kostenlosen Kennenlern-Termin. Gemeinsam klären wir,
              welche Lager- und Warenprozesse sinnvoll unterstützt werden können.
            </p>
          </div>
          <div className="mt-5 lg:mt-0">
            <ButtonLink href="#kontaktformular" icon={CalendarCheck} className="w-full sm:w-auto">
              Kostenlos kennenlernen
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
