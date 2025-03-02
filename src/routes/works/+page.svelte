<script lang="ts">
	import ShaderCanvas from '$lib/shader/ShaderCanvas.svelte';
	import { shaderConfigMdr } from '$lib/shader/shaders';
	import { PROJECTS } from './constants';
	import Record from './Record.svelte';
</script>

<div class="fixed z-[-1] h-screen w-screen opacity-[.05]">
	<ShaderCanvas shader={shaderConfigMdr} />
</div>

<p class="font-display z-0 mx-auto w-fit pt-10 text-4xl text-white">previous work</p>

<div id="works" class="flex flex-col gap-4 overflow-x-hidden px-2 pt-10">
	{#each PROJECTS as project}
		<div>
			<Record title={project.title} shader={project.shader} />
		</div>
	{/each}
</div>

<style>
	:global(body) {
		background: rgba(0, 0, 0, 0.92);
		scrollbar-gutter: stable;
	}

	#works {
	}
</style>
