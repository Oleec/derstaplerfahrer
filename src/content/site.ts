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
  "Für Lagerabläufe & Auftragsspitzen",
  "Rechnung für Unternehmen",
];

export const heroHighlights = [
  {
    title: "Unterstützung im Lager benötigt?",
    body: "Praktische Hilfe bei Warenbewegung, Wareneingang und Versand.",
  },
  {
    title: "Mehr Ware als geplant?",
    body: "Unterstützung bei Wareneingang, Versand, Sortierung und innerbetrieblichem Warenfluss.",
  },
  {
    title: "Kein langfristiger Aufwand?",
    body: "Nur anfragen, wenn tatsächlich operativer Bedarf besteht.",
  },
];

export const useCases: IconContent[] = [
  {
    title: "Kurzfristiger Lagerbedarf",
    body:
      "Wenn zusätzliche Unterstützung im Lager benötigt wird, zum Beispiel bei erhöhtem Warenaufkommen, kurzfristigen Engpässen oder operativem Mehraufwand.",
    icon: AlertTriangle,
  },
  {
    title: "Auftragsspitzen",
    body: "Mehr Bestellungen, mehr Ware, mehr Druck: flexible Hilfe bei Wareneingang, Versand, Sortierung und Warenbewegung.",
    icon: Package,
  },
  {
    title: "LKW und Container",
    body: "Unterstützung beim Be- und Entladen, Sortieren, Umstellen und bei der innerbetrieblichen Warenbewegung.",
    icon: Truck,
  },
];

export const services: IconContent[] = [
  {
    title: "Warenbewegung mit Stapler",
    body: "Paletten bewegen, Ware umstellen, Lagerbereiche unterstützen und den innerbetrieblichen Materialfluss sichern.",
    icon: Forklift,
  },
  {
    title: "Wareneingang und Versand",
    body: "Unterstützung beim Entladen, Sortieren, Bereitstellen, Verpacken und bei der Versandvorbereitung.",
    icon: PackageCheck,
  },
  {
    title: "Lagerordnung und Prozesshilfe",
    body:
      "Unterstützung bei Ordnung, Sortierung, einfachen Lagerprozessen und klar definierten operativen Aufgaben.",
    icon: Settings,
  },
];

export const advantages: IconContent[] = [
  {
    title: "Keine langfristige Bindung",
    body: "Ihr Unternehmen zahlt nur, wenn tatsächlich operativer Bedarf besteht.",
    icon: CalendarCheck,
  },
  {
    title: "Weniger organisatorischer Aufwand",
    body: "Klare Aufgabenabstimmung, direkte Kommunikation und einfache Abrechnung.",
    icon: ClipboardCheck,
  },
  {
    title: "Praktisch und lösungsorientiert",
    body: "Der Fokus liegt auf Warenbewegung, Ordnung, Entlastung und einem stabilen Lagerablauf.",
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
      "Der risikofreie Einstieg, damit ich Betrieb, Abläufe, Aufgabenbereiche und Sicherheitsvorgaben vor einem späteren Einsatz kenne.",
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
    subtitle: "Für Lagerbedarf und Auftragsspitzen",
    description:
      "Die beste Wahl, wenn Warenbewegung, Wareneingang oder Versand zuverlässig unterstützt werden sollen.",
    features: [
      "Direktkontakt",
      "Direkte Beauftragung",
      "Flexible Einsätze",
      "Schnelle Verfügbarkeit",
      "Persönlicher Ansprechpartner",
    ],
    featured: true,
  },
  {
    label: "Express",
    title: "Express-Einsatz",
    price: "ab 280 €",
    subtitle: "Bei sehr kurzfristigem Bedarf",
    description:
      "Für akute Engpässe, wenn Lieferdruck, ungeplante Mengen oder kurzfristiger operativer Bedarf den Lagerablauf belasten.",
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
    body: "Sie senden Datum, Uhrzeit, Ort, Aufgabenbereich und ob ein Stapler vor Ort eingesetzt werden soll.",
    icon: Warehouse,
  },
  {
    title: "Verfügbarkeit prüfen",
    body: "Ich bestätige, ob der Einsatz möglich ist und welche Konditionen gelten.",
    icon: Clock,
  },
  {
    title: "Einsatz durchführen",
    body: "Ich komme zum Standort und unterstütze bei den vereinbarten Lager- und Warenprozessen.",
    icon: ShieldCheck,
  },
  {
    title: "Abrechnung",
    body: "Ihr Unternehmen erhält eine klare Rechnung nach dem vorab vereinbarten Einsatzumfang.",
    icon: ReceiptText,
  },
];

export const faqs = [
  {
    question: "Ist der Kennenlern-Termin wirklich kostenlos?",
    answer:
      "Ja. Für Neukunden ist der Vor-Ort Kennenlern-Termin bis zu 3 Stunden kostenlos und unverbindlich. Er dient dazu, den Betrieb, die Abläufe, mögliche Aufgabenbereiche und die Sicherheitsvorgaben kennenzulernen.",
  },
  {
    question: "Kann ich kurzfristig am selben Tag buchen?",
    answer:
      "Je nach Verfügbarkeit ist ein kurzfristiger Einsatz möglich. Für sehr dringende Anfragen gilt der Express-Einsatz nach Verfügbarkeit.",
  },
  {
    question: "Ist das eine Personalvermittlung?",
    answer:
      "Nein. Der Service ist keine klassische Arbeitskräfteüberlassung. Es werden keine Mitarbeiter vermittelt. Es handelt sich um eine selbstständige operative Dienstleistung für klar definierte Lager- und Warenprozesse.",
  },
  {
    question: "Was muss das Unternehmen vorbereiten?",
    answer:
      "Wichtig sind Einsatzort, Uhrzeit, Aufgabenbeschreibung, Ansprechpartner vor Ort, Sicherheitsunterweisung und die Information, ob ein Stapler oder andere Betriebsmittel vor Ort eingesetzt werden sollen.",
  },
];
