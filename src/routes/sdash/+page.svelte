<script>
	import { page } from '$app/stores';
	import { applyAction, enhance } from "$app/forms";

	import StoreAdminDashboard from '../../componenets/StoreAdminDashboard.svelte';
	import { toastFailure, toastSuccess } from '../../toast-themes';
	//import { redirect } from '@sveltejs/kit';

	const submitLogout = () => {
		return async ({ result }) => {
			await applyAction(result);
			if (result.type === 'redirect') {
				toastSuccess('Successfully logged you out!');
			} else if (result.type === 'failure') {
				toastFailure(result.data?.message);
			}
		};
	};

	
	export let data;
	let userRole = '';
	if (data.session.user.email === 'softheart2050@gmail.com') {
		userRole = 'super_user';
	} else {
		userRole = data.session.user.role;
	}
</script>

<div class="">
	{#if !$page.data.session}
		<h1>I am not logged in</h1>
	{:else if userRole === 'store_owner'}
		<div><StoreAdminDashboard /></div>
	{:else}
		<div>
			<h1>Welcome {$page.data.session.user.email}</h1>
			<p>{JSON.stringify(userRole, undefined, 2)}</p>
			<div class="flex flex-wrap">
				<pre id="json"> {JSON.stringify($page.data.session.user, undefined, 2)}</pre>
			</div>

			<form class="p-0" action="/logout" method="post" use:enhance={submitLogout}>
				<button type="submit" class="btn-primary">Logout</button>
			</form>
			
		</div>
	{/if}
</div>
