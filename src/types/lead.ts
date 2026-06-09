export type ServiceType =
  | "kennenlernen"
  | "kurz-einsatz"
  | "tages-einsatz"
  | "express-einsatz"
  | "beratung";

export type PreferredContact = "email" | "telefon" | "whatsapp";

export type LeadFormValues = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  location: string;
  desiredDate: string;
  serviceType: ServiceType;
  preferredContact: PreferredContact;
  message: string;
  consent: boolean;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;
