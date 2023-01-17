<script>
	import Login from '../componenets/login.svelte';
	import { onMount } from 'svelte';
	import { supabase } from '../libs/supabase';

	import Account from '../componenets/account.svelte';

	let session = '';
	let loading = true;

	onMount(() => {
		supabase.auth.getSession().then(({ data }) => {
			session = data.session;
			loading = false;
		});

		supabase.auth.onAuthStateChange((_event, _session) => {
			session = _session;
		});
	});
</script>

<div class="container" style="padding: 50px 0 100px 0">
	{#if !loading}
		{#if !session}
			
			<Login />
		{:else}
			
			<Account {session} />
		{/if}
		
	{/if}
</div>
