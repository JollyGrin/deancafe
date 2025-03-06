<script lang="ts">
	import IconLogo from '$lib/icon/IconLogo.svelte';
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

<div class="text-brand-primary z-0 mx-auto grid w-full grid-cols-3 items-center px-6 pt-10">
	<a href="/" class="w-fit opacity-30 transition-all hover:scale-110 hover:opacity-100">
		<IconLogo w={40} />
	</a>
	<p class="font-readex w-fit justify-self-center text-2xl">some previous work</p>
	<div></div>
</div>

<div id="works" class="flex flex-col gap-4 overflow-x-hidden px-2 pt-10">
	{#each PROJECTS as project, i}
		{@const shader = shaders[i % shaders.length]}
		<div>
			<Record {...project} {shader} />
		</div>
	{/each}
</div>
