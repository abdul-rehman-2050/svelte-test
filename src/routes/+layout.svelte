<script>
	//import '@picocss/pico/css/pico.min.css';
	import '../app2.css';
	import { supabaseClient } from '$lib/db';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import "carbon-components-svelte/css/g100.css";
	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange((state) => {
			console.log(`STATE CHANGED ${state}`);
			//invalidate('supabase:auth');
			invalidateAll();
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

<div class=" dark dark:bg-slate-900 min-h-screen min-w-screen flex">
	
		<slot />
		<SvelteToast />
	
</div>
