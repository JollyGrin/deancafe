<script lang="ts">
	import ShaderCanvas from '$lib/shader/ShaderCanvas.svelte';
	import { shaderConfigWarpGrid } from '$lib/shader/shaders/shader-warpgrid';
	import { slide } from 'svelte/transition';

	let {
		title = 'title',
		img = 'https://picsum.photos/seed/6/1000',
		shader = shaderConfigWarpGrid
	}: { title?: string; img?: string; shader?: typeof shaderConfigWarpGrid } = $props();

	let isHovering = $state(false);
	const over = () => (isHovering = true);
	const out = () => (isHovering = false);

	let isOpen = $state(false);

	// Gallery state
	let currentImageIndex = $state(0);
	const images = [
		'https://picsum.photos/seed/1/1000/400',
		'https://picsum.photos/seed/2/1000/400',
		'https://picsum.photos/seed/3/1000/400',
		'https://picsum.photos/seed/4/1000/400'
	];

	const nextImage = () => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	};

	const prevImage = () => {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	};
</script>

{#snippet shelf()}
	<div class="relative min-h-[300px] w-full">
		<img
			class="min-h-[300px] w-full object-cover"
			src={images[currentImageIndex]}
			alt="gallery image {currentImageIndex + 1}"
		/>
		<button
			class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
			onclick={prevImage}
		>
			←
		</button>
		<button
			class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
			onclick={nextImage}
		>
			→
		</button>
		<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
			{#each images as _, i}
				<button
					class="h-2 w-2 rounded-full {i === currentImageIndex ? 'bg-white' : 'bg-white/50'}"
					onclick={() => (currentImageIndex = i)}
				/>
			{/each}
		</div>
	</div>
{/snippet}

<div
	tabindex="0"
	onkeydown={() => {}}
	role="checkbox"
	aria-checked={isOpen}
	class="container flex flex-col items-center"
	onmouseovercapture={over}
	onmouseoutcapture={out}
	onclick={() => (isOpen = !isOpen)}
>
	<div class="cube" class:isopen={isOpen}>
		<div class="grid h-full grid-cols-3 items-center justify-items-center px-4">
			<p class="justify-self-start text-2xl font-bold">{title}</p>
			<p>Videogame matchmaking</p>
			<p class="justify-self-end">(logo)</p>
		</div>
		<div
			class="topface"
			style="background:url({images[
				currentImageIndex
			]}); background-repeat: no-repeat; background-size:cover;"
		>
			<ShaderCanvas {shader} />
		</div>
	</div>
</div>
{#if isOpen}
	<div class="container w-full text-white" transition:slide>
		{@render shelf()}
	</div>
{/if}

<style>
	.container {
		perspective: 1200px;
		max-width: 700px;
		margin: 0 auto;
	}

	.cube {
		cursor: pointer;
		perspective: 1200px;
		height: 5rem;
		width: 100%;
		background: white;
		transition: all 0.5s ease;
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

	.cube.isopen {
		opacity: 1;
		rotate: x -40deg;
		box-shadow: inset 0 -10px 5px rgba(0, 0, 0, 0.05);
	}

	.topface {
		transition:
			transform,
			rotate 0.5s ease;
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

	.cube.isopen .topface {
		rotate: x 50deg;
		box-shadow: inset 0 -5px 5px rgba(255, 255, 255, 0.2);
	}
</style>
