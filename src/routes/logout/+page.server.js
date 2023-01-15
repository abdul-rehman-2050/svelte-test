import { redirect } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const actions = {
	async default(event) {
		const { supabaseClient } = await getSupabase(event);
		await supabaseClient.auth.signOut();
		throw redirect(303, '/');
	}
};