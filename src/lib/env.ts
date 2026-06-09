const stripTrailingSlash = (value: string) => value.replace(/\/$/, "");

export const appConfig = {
  siteUrl: stripTrailingSlash(import.meta.env.VITE_SITE_URL ?? "https://derstaplerfahrer.at"),
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL ?? "",
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL ?? "",
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? "",
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? "",
};

export const isSupabaseConfigured = Boolean(
  appConfig.supabaseUrl && appConfig.supabaseAnonKey
);
