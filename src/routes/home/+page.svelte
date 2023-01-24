<script>
	import { page } from '$app/stores';
</script>

<main class="flex m-auto ">
	<section class="flex flex-col items-center">
		<h1 class="mt-auto text-[clamp(2rem,10vw,7.5rem)] leading-loose">RepairB</h1>

		<div class="flex gap-6">
			<a href={$page.data.session ? '/sdash' : '/login'} 
			class="a-tag">
				{$page.data.session ? 'Dashboard' : 'Login to Stores'}
			</a>
			<a href="/about" class="a-tag">Learn more</a>
		</div>
	</section>
</main>

