<script lang="ts">
	//import Fa from 'svelte-fa'
	//import faGoogle from '@fortawesome/free-brands-svg-icons'

	import { supabaseClient } from '../lib/db';
	import { goto } from '$app/navigation';
	import { toastFailure } from '../toast-themes';

	let loading = false;
	let email = '';
	let password = '';

	const handleLogin = async () => {
		try {
			loading = true;
			const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
			if (error) throw error;

			console.log(JSON.stringify(data));
			goto('/sdash');
		} catch (error) {
			if (error instanceof Error) {
				toastFailure(error.message);
				console.log(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<!-- Main -->

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
	<div
		class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
	>
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1
				class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
			>
				Sign in to your store
			</h1>

			<form class="space-y-4 md:space-y-6" on:submit|preventDefault={handleLogin}>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Your email</label
					>

					<input
						type="email"
						name="email"
						id="email"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@company.com"
						required=""
						bind:value={email}
					/>
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Password</label
					>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required=""
						bind:value={password}
					/>
				</div>
				<div class="flex items-center justify-end">
					<a
						href="#"
						class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
						>Forgot password?</a
					>
				</div>
				<button
					type="submit"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
					>Sign in</button
				>
				<p class="text-sm font-light text-gray-500 dark:text-gray-400">
					Don’t have an account yet? <a
						href="/request"
						class="font-medium text-primary-600 hover:underline dark:text-primary-500"
						>Request a Demo</a
					>
				</p>
			</form>
		</div>
	</div>
</div>
