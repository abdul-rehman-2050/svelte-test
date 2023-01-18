<script>
	//import '@picocss/pico/css/pico.min.css';
	import '../app2.css';
	import { supabaseClient } from '$lib/db';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange((state) => {
			console.log(`STATE CHANGED ${state}`);
			invalidate('supabase:auth');
		});
		return () => {
			subscription.unsubscribe();
		};
	});

	const options = {
		theme: {
			'--toastColor': 'mintcream',
			'--toastBackground': 'rgba(72,187,120,0.9)',
			'--toastBarBackground': '#2F855A'
		}
	};
</script>

<div class="dark:bg-slate-900 min-h-screen min-w-screen flex">
	
		<slot />
		<SvelteToast />
	
</div>
