<script >
	import Login from '../componenets/login.svelte';
	import { onMount } from 'svelte';
	import { supabase } from '../libs/supabase';
	
	import Account from '../componenets/account.svelte';

	let session =""

	onMount(() => {
		supabase.auth.getSession().then(({ data }) => {
			session = data.session;
		});

		supabase.auth.onAuthStateChange((_event, _session) => {
			session = _session;
		});
	});
</script>

<div class="container" style="padding: 50px 0 100px 0">
    {#if !session}
    <Login />
    {:else}
    <Account {session} />
    {/if}
  </div>
