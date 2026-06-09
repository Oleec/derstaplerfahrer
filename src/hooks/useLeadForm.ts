import { useState, type ChangeEvent, type FormEvent } from "react";
import { supabase } from "../lib/supabase";
import type { LeadFormErrors, LeadFormValues } from "../types/lead";

const initialValues: LeadFormValues = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  location: "",
  desiredDate: "",
  serviceType: "tages-einsatz",
  preferredContact: "email",
  message: "",
  consent: false,
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: LeadFormValues): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (!values.companyName.trim()) {
    errors.companyName = "Bitte geben Sie den Firmennamen an.";
  }

  if (!values.contactName.trim()) {
    errors.contactName = "Bitte geben Sie eine Kontaktperson an.";
  }

  if (!values.email.trim() && !values.phone.trim()) {
    errors.email = "Bitte geben Sie E-Mail oder Telefonnummer an.";
    errors.phone = "Bitte geben Sie E-Mail oder Telefonnummer an.";
  }

  if (values.email.trim() && !emailPattern.test(values.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  if (!values.location.trim()) {
    errors.location = "Bitte geben Sie den Einsatzort an.";
  }

  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = "Bitte beschreiben Sie den Bedarf mit mindestens 20 Zeichen.";
  }

  if (!values.consent) {
    errors.consent = "Bitte bestätigen Sie die Verarbeitung der Anfrage.";
  }

  return errors;
}

export function useLeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = <Key extends keyof LeadFormValues>(
    field: Key,
    value: LeadFormValues[Key]
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const updateTextField =
    (field: keyof Omit<LeadFormValues, "consent">) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(field, event.currentTarget.value as LeadFormValues[typeof field]);
    };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Bitte prüfen Sie die markierten Felder.");
      return;
    }

    if (!supabase) {
      setStatus("error");
      setStatusMessage(
        "Das Formular ist noch nicht mit Supabase verbunden. Bitte nutzen Sie vorübergehend WhatsApp oder E-Mail."
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const { error } = await supabase.from("landing_leads").insert({
      company_name: values.companyName.trim(),
      contact_name: values.contactName.trim(),
      email: values.email.trim() || null,
      phone: values.phone.trim() || null,
      location: values.location.trim(),
      desired_date: values.desiredDate || null,
      service_type: values.serviceType,
      preferred_contact: values.preferredContact,
      message: values.message.trim(),
      consent_given: values.consent,
      status: "new",
      metadata: {
        source: "landing_page",
        page_url: window.location.href,
      },
    });

    if (error) {
      setStatus("error");
      setStatusMessage("Die Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es erneut oder nutzen Sie E-Mail.");
      return;
    }

    setStatus("success");
    setStatusMessage("Danke, Ihre Anfrage wurde gesendet. Ich melde mich schnellstmöglich zurück.");
    setValues(initialValues);
  };

  return {
    errors,
    isSubmitting: status === "submitting",
    status,
    statusMessage,
    submit,
    updateField,
    updateTextField,
    values,
  };
}
