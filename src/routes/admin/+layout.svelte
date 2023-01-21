<script>

import Sidebar from "../../componenets/Sidebar.svelte";
</script>

<div class="antialiased bg-black w-full  text-slate-300 ">
	<div
		class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl px-2"
	>
    <div class="h-screen sticky top-0 col-span-3 bg-white/10"><Sidebar/></div>
		
    <div id="content" class="bg-white/10 col-span-9 rounded-lg p-6">		
        <slot />
    </div>
	</div>
</div>

<style>
	:root {
		font-family: 'Inter', sans-serif;
	}
	@supports (font-variation-settings: normal) {
		:root {
			font-family: 'Inter var', sans-serif;
		}
	}
</style>
