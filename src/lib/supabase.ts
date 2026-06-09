import { createClient } from "@supabase/supabase-js";
import { appConfig, isSupabaseConfigured } from "./env";

export const supabase = isSupabaseConfigured
  ? createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;
