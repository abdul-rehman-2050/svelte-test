<script>
	import '@picocss/pico/css/pico.min.css';
	import { supabaseClient } from '$lib/db';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange((state) => {
			console.log(`STATE CHANGED ${state}`)
			invalidate('supabase:auth');
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="">
	<slot />
</div>
