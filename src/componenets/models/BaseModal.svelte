<!-- Modal.svelte -->
<script>
    export let show = false;
    export let component;
    const close = () => {
      show = false;
    };
  </script>
  
  {#if show}
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50">
      <div class="mx-auto my-10 max-w-sm bg-white rounded-lg shadow-xl p-10">
        <slot />
        <div class="flex justify-end">
          <button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400" on:click={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  {/if}
  