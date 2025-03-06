<script lang="ts">
	import ShaderCanvas from '$lib/shader/ShaderCanvas.svelte';
	import { slide } from 'svelte/transition';
	import RecordShelf from './RecordShelf.svelte';
	import type { RecordDTO } from '$lib/types-record';

	let record: RecordDTO = $props();

	let isHovering = $state(false);
	const over = () => (isHovering = true);
	const out = () => (isHovering = false);

	let isOpen = $state(false);
</script>

{#snippet faceDisplay()}
	<div
		class="grid h-full grid-cols-[2fr_4fr_1fr] items-center justify-items-center px-4 md:grid-cols-3"
	>
		<p class="font-readex justify-self-start text-lg font-bold md:text-2xl">{record?.title}</p>
		<p class="font-readex md:text-md justify-self-center text-center text-xs">
			{record?.description}
		</p>
		{#if record?.logoUrl}
			<img src={record.logoUrl} alt="{record?.title} logo" class="w-12 justify-self-end" />
		{/if}
	</div>
{/snippet}

{#snippet faceTop()}
	<div class="topface">
		<ShaderCanvas shader={record.shader} />
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
		{@render faceDisplay()}
		{@render faceTop()}
	</div>
</div>

{#if isOpen}
	<div class="text-brand-primary container w-full" transition:slide>
		<RecordShelf {...record} />
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
		border: solid 1px rgba(0, 0, 0, 0);
	}

	.cube:hover {
		opacity: 1;
		rotate: x -40deg;
		box-shadow: inset 0 -10px 5px rgba(0, 0, 0, 0.05);
		border: solid 0.5px rgba(0, 0, 0, 0.05);
	}

	.cube.isopen {
		opacity: 1;
		rotate: x -40deg;
		box-shadow: inset 0 -10px 5px rgba(0, 0, 0, 0.05);
		border: solid 0.5px rgba(0, 0, 0, 0.05);
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
