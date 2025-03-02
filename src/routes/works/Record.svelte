<script lang="ts">
	import ShaderCanvas from '$lib/shader/ShaderCanvas.svelte';
	import { shaderConfigWarpGrid } from '$lib/shader/shaders/shader-warpgrid';

	let {
		title = 'title',
		img = 'https://picsum.photos/seed/6/1000',
		shader = shaderConfigWarpGrid
	}: { title?: string; img?: string; shader?: typeof shaderConfigWarpGrid } = $props();

	let isHovering = $state(false);
	const over = () => (isHovering = true);
	const out = () => (isHovering = false);
</script>

<div class="container flex flex-col items-center" onmouseovercapture={over} onmouseoutcapture={out}>
	<div class="cube">
		<div class=" grid h-full grid-cols-3 items-center justify-items-center px-4">
			<p class="justify-self-start text-2xl font-bold">{title}</p>
			<p>Videogame matchmaking</p>
			<p class="justify-self-end">(logo)</p>
		</div>
		<div
			class="topface"
			style="background:url({img}); background-repeat: no-repeat; background-size:cover;"
		>
			<ShaderCanvas {shader} />
		</div>
	</div>
</div>

<style>
	.container {
		perspective: 1200px;
		max-width: 700px;
		margin: 0 auto;
	}

	.cube {
		perspective: 1200px;
		height: 5rem;
		width: 100%;
		background: white;
		transition: all 0.4s ease;
		position: relative;
		transform-origin: bottom;
		z-index: 100;
		opacity: 0.6;
	}

	.cube:hover {
		opacity: 1;
		rotate: x -40deg;
		box-shadow: inset 0 -10px 5px rgba(0, 0, 0, 0.05);
	}

	.topface {
		transition:
			transform,
			rotate 0.4s ease;
		position: absolute;
		top: 0;
		background-position: cover;
		width: 100%;
		height: 5rem;
		transform-origin: 100% 0%;
		rotate: x 88.2deg;
		transform: translateY(-5rem);
	}

	.cube:hover .topface {
		rotate: x 50deg;
		box-shadow: inset 0 -5px 5px rgba(255, 255, 255, 0.2);
	}
</style>
