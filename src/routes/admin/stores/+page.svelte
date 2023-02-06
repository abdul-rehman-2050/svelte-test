<script>
	import DarkModeActionCard from '../../../componenets/DarkModeActionCard.svelte';
	import { myStores } from '../../../stores/myStores';
	let inputText = '';
	const handleClick = () => {
		myStores.update((myStores) => [...myStores, inputText]);
		inputText = '';
	};
</script>

<div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto ">
	<div
		class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700"
	>
		<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1
				class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
			>
				Create New store
			</h1>
			<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            on:submit|preventDefault={handleClick}
            >
				<input
					id="storename"
					name="store_name"
					class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="text"
					placeholder="Enter Your Store Name"
                    bind:value={inputText} 
                    
				/>

				<button type="submit"
                
                class="w-full btn-primary mt-5">Create</button>
			</form>
		</div>
	</div>
</div>

<div class="flex flex-wrap gap-2">
	{#each $myStores as text}
		<DarkModeActionCard {text} />
	{/each}
</div>
