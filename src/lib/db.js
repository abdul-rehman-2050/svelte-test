import { createClient } from '@supabase/auth-helpers-sveltekit';
//import { env } from '$env/dynamic/public';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


export const supabaseClient = createClient(
	//env.VITE_SUPABASE_URL ,
	//env.VITE_SUPABASE_ANON_KEY
    supabaseUrl,supabaseAnonKey
);