<script lang="ts">
	import ShaderCanvas from '$lib/shader/ShaderCanvas.svelte';
	import { shaderConfigMdr } from '$lib/shader/shaders';
	import { shaderConfigWarpGrid } from '$lib/shader/shaders/shader-warpgrid';
	import { PROJECTS } from './constants';
	import Record from './Record.svelte';
</script>

<div class="fixed z-[-1] h-screen w-screen opacity-[.05]">
	<ShaderCanvas shader={shaderConfigMdr} />
</div>

<div class="absolute isolate z-10 h-screen w-screen justify-center bg-black/10">
	<div
		class="relative mx-auto mt-5 grid min-h-[600px] w-[calc(100%-10rem)] place-items-center overflow-hidden rounded bg-white"
	>
		<div class="absolute h-full w-full">
			<ShaderCanvas shader={shaderConfigWarpGrid} />
		</div>
		<div class="absolute min-h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] rounded-sm bg-white p-2">
			hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka
			lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas
			lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas
			lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas
			lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas
			lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas
			hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl
			ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah
			dlasd kla sd hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka
			lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas
			hdlahdl ahsdklah dlasd kla sd hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah
			dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd
			kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdlahdl ahsdklah dlasd kla sd hdhsjka lkas
			hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl
			ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdlahdl ahsdklah dlasd kla sd
			hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd hdhsjka
			lkas hdlahdl ahsdklah dlasd kla sd hdhsjka lkas hdlahdl ahsdklah dlasd kla sd
		</div>
	</div>
</div>

<p class="font-display z-0 mx-auto w-fit py-10 text-4xl text-white">previous work</p>
<div class="flex flex-col gap-4 overflow-hidden px-2 pt-5">
	{#each PROJECTS as project}
		<Record title={project.title} shader={project.shader} />
	{/each}
</div>

<style>
	:global(body) {
		background: rgba(0, 0, 0, 0.92);
	}
</style>
