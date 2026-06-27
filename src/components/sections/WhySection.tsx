import { advantages } from "../../content/site";
import { Container } from "../ui/Container";

export function WhySection() {
  return (
    <section id="warum" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-lg bg-slate-950 p-7 text-white shadow-(--shadow-soft) sm:p-9">
            <p className="mb-3 text-sm font-bold uppercase text-brand-yellow">Warum dieses Modell</p>
            <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
              Nicht kompliziert planen. Nicht lange abstimmen. Einfach Unterstützung anfragen.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Unternehmen verlieren Zeit, wenn Lagerprozesse kurzfristig mehr Kapazität brauchen.
              Dieses Modell bietet flexible Unterstützung für klar definierte Aufgaben im Lager.
            </p>
          </div>

          <div className="grid gap-4">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green text-white">
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black leading-tight text-slate-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
