import { Loader2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useLeadForm } from "../../hooks/useLeadForm";
import { cn } from "../../lib/cn";
import type { LeadFormValues, PreferredContact, ServiceType } from "../../types/lead";

const serviceOptions: Array<{ value: ServiceType; label: string }> = [
  { value: "kennenlernen", label: "Kostenloser Kennenlern-Termin" },
  { value: "kurz-einsatz", label: "Kurz-Einsatz bis 4 Stunden" },
  { value: "tages-einsatz", label: "Tages-Einsatz" },
  { value: "express-einsatz", label: "Express-Einsatz" },
  { value: "beratung", label: "Noch unsicher" },
];

const contactOptions: Array<{ value: PreferredContact; label: string }> = [
  { value: "email", label: "E-Mail" },
  { value: "telefon", label: "Telefon" },
  { value: "whatsapp", label: "WhatsApp" },
];

type FieldProps = {
  id: keyof LeadFormValues;
  label: string;
  error?: string;
  required?: boolean;
};

function FieldLabel({ error, id, label, required }: FieldProps) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-bold text-slate-800">
      {label}
      {required ? <span className="text-red-600"> *</span> : null}
      {error ? <span className="sr-only"> Fehler: {error}</span> : null}
    </label>
  );
}

function fieldClasses(hasError: boolean) {
  return cn(
    "w-full rounded-md border bg-white px-3 py-3 text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200",
    hasError ? "border-red-400" : "border-slate-300"
  );
}

export function LeadForm() {
  const { errors, isSubmitting, status, statusMessage, submit, updateField, updateTextField, values } =
    useLeadForm();

  return (
    <form id="kontaktformular" onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-(--shadow-soft) sm:p-6">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase text-amber-700">Anfrage senden</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">
          Einsatzdaten kurz beschreiben
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel id="companyName" label="Firma" error={errors.companyName} required />
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="organization"
            value={values.companyName}
            onChange={updateTextField("companyName")}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            className={fieldClasses(Boolean(errors.companyName))}
          />
          {errors.companyName ? <p id="companyName-error" className="mt-2 text-sm text-red-700">{errors.companyName}</p> : null}
        </div>

        <div>
          <FieldLabel id="contactName" label="Kontaktperson" error={errors.contactName} required />
          <input
            id="contactName"
            name="contactName"
            type="text"
            autoComplete="name"
            value={values.contactName}
            onChange={updateTextField("contactName")}
            aria-invalid={Boolean(errors.contactName)}
            aria-describedby={errors.contactName ? "contactName-error" : undefined}
            className={fieldClasses(Boolean(errors.contactName))}
          />
          {errors.contactName ? <p id="contactName-error" className="mt-2 text-sm text-red-700">{errors.contactName}</p> : null}
        </div>

        <div>
          <FieldLabel id="email" label="E-Mail" error={errors.email} />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={updateTextField("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses(Boolean(errors.email))}
          />
          {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-700">{errors.email}</p> : null}
        </div>

        <div>
          <FieldLabel id="phone" label="Telefon oder WhatsApp" error={errors.phone} />
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={updateTextField("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClasses(Boolean(errors.phone))}
          />
          {errors.phone ? <p id="phone-error" className="mt-2 text-sm text-red-700">{errors.phone}</p> : null}
        </div>

        <div>
          <FieldLabel id="location" label="Einsatzort" error={errors.location} required />
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="address-level2"
            placeholder="z. B. Wien, Graz, Linz"
            value={values.location}
            onChange={updateTextField("location")}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
            className={fieldClasses(Boolean(errors.location))}
          />
          {errors.location ? <p id="location-error" className="mt-2 text-sm text-red-700">{errors.location}</p> : null}
        </div>

        <div>
          <FieldLabel id="desiredDate" label="Wunschtermin" error={errors.desiredDate} />
          <input
            id="desiredDate"
            name="desiredDate"
            type="date"
            value={values.desiredDate}
            onChange={updateTextField("desiredDate")}
            className={fieldClasses(Boolean(errors.desiredDate))}
          />
        </div>

        <div>
          <FieldLabel id="serviceType" label="Art der Anfrage" error={errors.serviceType} required />
          <select
            id="serviceType"
            name="serviceType"
            value={values.serviceType}
            onChange={(event) => updateField("serviceType", event.currentTarget.value as ServiceType)}
            className={fieldClasses(Boolean(errors.serviceType))}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <FieldLabel id="preferredContact" label="Bevorzugter Kontakt" error={errors.preferredContact} required />
          <select
            id="preferredContact"
            name="preferredContact"
            value={values.preferredContact}
            onChange={(event) => updateField("preferredContact", event.currentTarget.value as PreferredContact)}
            className={fieldClasses(Boolean(errors.preferredContact))}
          >
            {contactOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <FieldLabel id="message" label="Aufgabe und Zeitraum" error={errors.message} required />
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={updateTextField("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Beispiel: Wir benötigen Unterstützung mit dem Stapler für Wareneingang und Palettenbewegung am kommenden Dienstag von 8 bis 16 Uhr."
          className={fieldClasses(Boolean(errors.message))}
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-700">{errors.message}</p> : null}
      </div>

      <div className="mt-4">
        <label className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateField("consent", event.currentTarget.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage gespeichert und
            kontaktiert werden dürfen. Informationen dazu finden Sie in der{" "}
            <Link className="font-bold text-amber-700 hover:text-amber-900" to="/datenschutz">
              Datenschutzerklärung
            </Link>
            .
          </span>
        </label>
        {errors.consent ? <p id="consent-error" className="mt-2 text-sm text-red-700">{errors.consent}</p> : null}
      </div>

      {statusMessage ? (
        <p
          className={cn(
            "mt-5 rounded-md border px-4 py-3 text-sm font-semibold",
            status === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          )}
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-brand-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Send aria-hidden="true" className="h-4 w-4" />}
        Anfrage senden
      </button>
    </form>
  );
}
