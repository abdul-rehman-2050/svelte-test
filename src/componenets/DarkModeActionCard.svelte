<script lang="ts">
	import { myStores } from '../stores/myStores';

	export let text: string;
	export let id: string;

	const buttonStyles = `
      h-5 w-5 mr-3 rounded-full focus:outline-none focus:shadow-outline
    `;

	let isEditing = false;
	let updatedText = text;

	const handleEdit = () => {
		isEditing = true;
		updatedText = text;
	};

	const handleUpdate = () => {
		myStores.update((texts) => texts.map((t) => (t === text ? updatedText : t)));
		isEditing = false;
		text = updatedText;
	};

	const handleCancel = () => {
		isEditing = false;
	};

	const handleDelete = () => {
		myStores.update((texts) => texts.filter((t) => t !== text));
	};
</script>

{#if isEditing}
	
<div class="flex items-center justify-center bg-gray-900 text-white p-6 flex-wrap">
		<div class=" p-4 rounded-lg ">
			<input
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				bind:value={updatedText}
				type="text"
			/>
			<div class="flex justify-between mt-4">
				<button class="bg-blue-500 text-white p-2 rounded-lg" on:click={handleUpdate}>Update</button
				>
				<button class="bg-red-500 text-white p-2 rounded-lg" on:click={handleCancel}>Cancel</button>
			</div>
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center bg-gray-900 text-white p-6 flex-wrap">
		<p class="text-center mx-8">{text}</p>

		<div class="flex gap-2 ml-2">
			<!-- <button class={buttonStyles} on:click={handleDelete}>
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
        </svg>
      </button>
      <button class={buttonStyles} on:click={handleEdit}>
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
          <path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
        </svg>
      </button> -->
			<button class="bg-blue-500 text-white p-2 rounded-lg" on:click={handleEdit}>Edit </button>

			<button class="bg-red-500 text-white p-2 rounded-lg" on:click={handleDelete}> Delete </button>
		</div>
	</div>
{/if}

<style>
	.bg-gray-900 {
		background-color: #1a202c;
	}

	.text-white {
		color: #fff;
	}

	.flex-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	button {
		transition: all 0.2s;
	}

	button:hover {
		transform: scale(1.1);
	}
</style>
