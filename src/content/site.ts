import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Forklift,
  Package,
  PackageCheck,
  ReceiptText,
  Settings,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

type IconContent = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type PricePlan = {
  label: string;
  title: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  featured?: boolean;
  lowRisk?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Einsatz", href: "#einsatz" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Kennenlernen", href: "#kennenlernen" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontaktformular" },
];

export const trustSignals = [
  "Staplerschein vorhanden",
  "Tageweise buchbar",
  "Für Ausfälle und Auftragsspitzen",
  "Rechnung für Unternehmen",
];

export const heroHighlights = [
  { title: "Staplerfahrer krank?", body: "Kurzfristige Hilfe, damit die Schicht weiterläuft." },
  { title: "Mehr Ware als geplant?", body: "Unterstützung bei Wareneingang, Versand und Lagerfluss." },
  { title: "Kein langfristiger Vertrag?", body: "Nur buchen, wenn wirklich Bedarf besteht." },
];

export const useCases: IconContent[] = [
  {
    title: "Personalausfall",
    body: "Ein Mitarbeiter fällt aus und der Betrieb braucht kurzfristig Ersatz für einen oder mehrere Tage.",
    icon: AlertTriangle,
  },
  {
    title: "Auftragsspitzen",
    body: "Mehr Bestellungen, mehr Ware, mehr Druck: flexible Hilfe bei Wareneingang, Versand und Lagerfluss.",
    icon: Package,
  },
  {
    title: "LKW und Container",
    body: "Unterstützung beim Be- und Entladen, Sortieren, Umstellen und innerbetrieblichen Transport.",
    icon: Truck,
  },
];

export const services: IconContent[] = [
  {
    title: "Stapler-Einsatz im Lager",
    body: "Paletten bewegen, Ware umstellen, Lagerbereiche unterstützen und den Materialfluss sichern.",
    icon: Forklift,
  },
  {
    title: "Wareneingang und Versand",
    body: "Unterstützung beim Entladen, Sortieren, Bereitstellen, Verpacken und bei der Versandvorbereitung.",
    icon: PackageCheck,
  },
  {
    title: "Operative Zusatzhilfe",
    body: "Wenn gerade kein Stapler gebraucht wird: Mithilfe bei Lagerarbeiten, Ordnung und einfachen Prozessen.",
    icon: Settings,
  },
];

export const advantages: IconContent[] = [
  {
    title: "Keine langfristige Bindung",
    body: "Die Firma zahlt nur, wenn wirklich Bedarf besteht.",
    icon: CalendarCheck,
  },
  {
    title: "Weniger organisatorischer Aufwand",
    body: "Keine klassische Einstellung, keine lange Suche und keine internen HR-Prozesse.",
    icon: ClipboardCheck,
  },
  {
    title: "Praktisch und lösungsorientiert",
    body: "Der Fokus liegt auf Arbeit, Entlastung und einem stabilen Lagerablauf.",
    icon: CheckCircle2,
  },
];

export const meetingPoints = [
  "Betriebsrundgang und Kennenlernen",
  "Überblick über Lagerstruktur und Arbeitsbereiche",
  "Verständnis der wichtigsten Abläufe und Prozesse",
  "Sicherheits- und Arbeitsanweisungen kennenlernen",
  "Persönlicher Austausch mit Verantwortlichen",
  "Einschätzung zukünftiger Einsatzmöglichkeiten",
];

export const pricingPlans: PricePlan[] = [
  {
    label: "Erster Schritt",
    title: "Kennenlern-Termin",
    price: "0 €",
    subtitle: "Kostenlos für Neukunden",
    description:
      "Der risikofreie Einstieg, damit ich Betrieb, Abläufe und Sicherheitsvorgaben vor einem späteren Einsatz kenne.",
    features: [
      "Betriebsrundgang",
      "Prozesse verstehen",
      "Sicherheitsvorgaben kennenlernen",
      "Ansprechpartner kennenlernen",
      "Zukünftige Einsatzmöglichkeiten besprechen",
    ],
    lowRisk: true,
  },
  {
    label: "Planbar",
    title: "Geplanter Einsatz",
    price: "ab 150 €",
    subtitle: "Für überschaubare Aufgaben",
    description:
      "Für planbare Entlastung im Lager, beim Wareneingang oder bei einzelnen operativen Aufgaben.",
    features: [
      "Klare Aufgabenabstimmung",
      "Flexible Einsatzdauer",
      "Ideal für kleine Lager",
      "Rechnung für Unternehmen",
    ],
  },
  {
    label: "Empfohlen",
    title: "Standard Einsatz",
    price: "ab 220 €",
    subtitle: "Für Ausfälle und Auftragsspitzen",
    description:
      "Die beste Wahl, wenn der Lagerfluss stabil bleiben muss und kurzfristig verlässliche Unterstützung gebraucht wird.",
    features: [
      "Direktkontakt",
      "Keine Vermittlungsgebühr",
      "Flexible Einsätze",
      "Schnelle Verfügbarkeit",
      "Persönlicher Ansprechpartner",
    ],
    featured: true,
  },
  {
    label: "Akut",
    title: "Notfall-Einsatz",
    price: "ab 280 €",
    subtitle: "Bei sehr kurzfristigem Bedarf",
    description:
      "Für akute Engpässe, wenn Ausfälle, Lieferdruck oder ungeplante Mengen den Betrieb gefährden.",
    features: [
      "Priorisierte Anfrage",
      "Für akute Engpässe",
      "Schnelle Rückmeldung",
      "Nach Verfügbarkeit",
    ],
  },
];

export const processSteps: IconContent[] = [
  {
    title: "Bedarf melden",
    body: "Firma sendet Datum, Uhrzeit, Ort, Aufgabe und ob ein Stapler benötigt wird.",
    icon: Warehouse,
  },
  {
    title: "Verfügbarkeit prüfen",
    body: "Ich bestätige, ob der Einsatz möglich ist und welche Konditionen gelten.",
    icon: Clock,
  },
  {
    title: "Einsatz durchführen",
    body: "Ich komme zum Standort und unterstütze praktisch im Lager oder Versand.",
    icon: ShieldCheck,
  },
  {
    title: "Abrechnung",
    body: "Die Firma erhält eine klare Rechnung nach vereinbartem Tages- oder Halbtagssatz.",
    icon: ReceiptText,
  },
];

export const faqs = [
  {
    question: "Ist der Kennenlern-Termin wirklich kostenlos?",
    answer:
      "Ja. Für Neukunden ist der Vor-Ort Kennenlern-Termin bis zu 3 Stunden kostenlos und unverbindlich. Er dient dazu, den Betrieb, die Abläufe und die Sicherheitsvorgaben kennenzulernen.",
  },
  {
    question: "Kann ich kurzfristig am selben Tag buchen?",
    answer:
      "Je nach Verfügbarkeit ist ein kurzfristiger Einsatz möglich. Für sehr dringende Einsätze gilt der Express-Tarif.",
  },
  {
    question: "Ist das eine Personalvermittlung?",
    answer:
      "Nein. Es handelt sich um einen selbstständigen B2B-Service für operative Unterstützung bei konkretem Bedarf.",
  },
  {
    question: "Was muss die Firma vorbereiten?",
    answer:
      "Wichtig sind Einsatzort, Uhrzeit, Aufgabenbeschreibung, Sicherheitsunterweisung vor Ort und klare Ansprechpartner im Betrieb.",
  },
];
