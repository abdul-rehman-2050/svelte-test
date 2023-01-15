<script lang="ts">
	//import Fa from 'svelte-fa'
	//import faGoogle from '@fortawesome/free-brands-svg-icons'

	

	import {supabaseClient} from '../lib/db'
	import { goto } from '$app/navigation';

	let loading = false;
	let email = '';
    let password= '';

	const handleLogin = async () => {
		try {
			loading = true;
			const {data, error } = await supabaseClient.auth.signInWithPassword({ email,password });
			if (error) throw error;
            console.log(JSON.stringify(data))
			goto('/sdash')
			
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		} finally {
			loading = false;

		}
	};
</script>

<!-- Main -->
<main class="container">
	<article class="grid">
		<div>
			<hgroup>
				<h1>Sign in</h1>
				<h2>Login to get access of your store</h2>
			</hgroup>
            
			<form on:submit|preventDefault="{handleLogin}">
				<input
					type="email"
					name="login"
					placeholder="Login"
					aria-label="Login"
					autocomplete="nickname"
					required
                    bind:value="{email}"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					required
                    bind:value="{password}"
				/>
               
				<button type="submit" class="primary" aria-live="polite" disabled="{loading}">Login</button>
				<button  class="secondary">Google</button>
			</form>
		</div>
		<div>
			<div>
				<img src="draw2.svg" alt="" style="margin-top:2rem" />
			</div>
		</div>
	</article>
</main>

<!-- ./ Main -->
<style>
	
</style>
