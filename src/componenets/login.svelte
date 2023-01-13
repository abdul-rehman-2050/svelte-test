<script>
	//import Fa from 'svelte-fa'
	//import faGoogle from '@fortawesome/free-brands-svg-icons'
</script>

<!-- Main -->
<main class="container">
	<article class="grid">
		<div>
			<hgroup>
				<h1>Sign in</h1>
				<h2>Login to get access of your store</h2>
			</hgroup>
			<form>
				<input
					type="text"
					name="login"
					placeholder="Login"
					aria-label="Login"
					autocomplete="nickname"
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					required
				/>
				<button type="submit" class="primary">Login</button>
				<button type="submit" class="secondary">Google</button>
			</form>
		</div>
		<div>
			<div class="container">
				<img src="draw2.svg" alt="" style="margin-top:2rem" />
			</div>
		</div>
	</article>
</main>

<!-- ./ Main -->
<style>
	img {
		margin-top: auto;
	}
	
	
</style>
