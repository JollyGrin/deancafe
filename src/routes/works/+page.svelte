<script lang="ts">
	import ShaderCanvas from '$lib/shader/ShaderCanvas.svelte';
	import {
		shaderConfigMatrix,
		shaderConfigMdr,
		shaderConfigOrganicRainbow,
		shaderConfigRainbow,
		shaderConfigWarpGrid
	} from '$lib/shader/shaders';
	import { PROJECTS } from './constants';
	import Record from './Record.svelte';

	const shaders = [
		shaderConfigOrganicRainbow,
		shaderConfigRainbow,
		shaderConfigMatrix,
		shaderConfigWarpGrid,
		shaderConfigMdr
	];
</script>

<div class="fixed z-[-1] h-screen w-screen opacity-[.05]">
	<ShaderCanvas shader={shaderConfigMdr} />
</div>

<p class="font-display z-0 mx-auto w-fit pt-10 text-4xl text-white">previous work</p>

<div id="works" class="flex flex-col gap-4 overflow-x-hidden px-2 pt-10">
	{#each PROJECTS as project, i}
		{@const shader = shaders[i % shaders.length]}
		<div>
			<Record {...project} {shader} />
		</div>
	{/each}
</div>

<style>
	:global(html) {
		background: rgba(0, 0, 0, 0.92);
		scrollbar-gutter: stable both-edges;
	}
</style>
