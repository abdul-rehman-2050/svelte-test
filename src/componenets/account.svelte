<script>
	import { onMount } from 'svelte';
	import { supabase } from '../libs/supabase';
	import Avatar from './Avatar.svelte';

	import { toast } from '@zerodevx/svelte-toast';
	import { toastSuccess } from '../toast-themes';

	export let session = '';

	let loading = false;
	let username = null;
	let website = null;
	let avatarUrl = null;

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select('username, website, avatar_url')
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
				website = data.website;
				avatarUrl = data.avatar_url;
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	const updateProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date().toISOString()
			};

			let { error } = await supabase.from('profiles').upsert(updates);

			if (error) {
				throw error;
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<div class="w-full">
	<form on:submit|preventDefault={updateProfile} class="form w-80">
		<div>Email: {session.user.email}</div>
		<div>
			<label for="username">Name</label>
			<input id="username" type="text" bind:value={username} />
		</div>
		<div>
			<label for="website">Website</label>
			<input id="website" type="text" bind:value={website} />
		</div>
		<div class="flex">
			<div class="flex-row">
				<button type="submit" class="btn-primary block" disabled={loading}>
					{loading ? 'Saving ...' : 'Update profile'}
				</button>
				<button
					type="button"
					class="btn-danger block"
					on:click={() => {
						supabase.auth.signOut();
						toastSuccess('Succesfully Signed out!');
					}}
				>
					Sign Out
				</button>
			</div>
		</div>
	</form>

	<form use:getProfile class="form-widget" on:submit|preventDefault={updateProfile}>
		<!-- Add to body -->
		<Avatar bind:url={avatarUrl} size={10} on:upload={updateProfile} />

		<!-- Other form elements -->
	</form>
</div>
