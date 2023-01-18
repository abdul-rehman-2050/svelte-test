<script>
	import { page } from '$app/stores';
	import { supabaseClient } from '../../lib/db';
	import { toastSuccess } from '../../toast-themes';
  
	function signout () {
		supabaseClient.auth.signOut();
		toastSuccess('Succesfully Signed out!');
    throw redirect(307, '/');
	
	};
</script>

<div class="">
	{#if !$page.data.session}
		<h1>I am not logged in</h1>
   
	{:else}
		<div>
			<h1>Welcome {$page.data.session.user.email}</h1>
			<p>I am logged in!</p>
			<div class="flex flex-wrap">
				<pre id="json"> {JSON.stringify($page.data.session.user, undefined, 2)}</pre>
			</div>
			<button class="btn-primary mt-10" on:click={signout}>Signout </button>
		</div>
	{/if}
</div>
