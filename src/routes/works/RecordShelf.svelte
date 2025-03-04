<script lang="ts">
	import type { RecordDTO } from '$lib/types-record';
	import { base } from '$app/paths';

	let {
		client = '',
		date = '',
		techStack = [],
		highlights = [],
		demoUrl = '/',
		...record
	}: RecordDTO = $props();

	// Gallery state
	let currentImageIndex = $state(0);
	const images = $derived(record?.media ?? []);
	// const images = [
	// 	base + '/teamplay/demo.mp4',
	// 	'https://picsum.photos/seed/2/1000/400',
	// 	'https://picsum.photos/seed/3/1000/400',
	// 	'https://picsum.photos/seed/4/1000/400'
	// ];

	console.log(record, record?.media);

	const nextImage = () => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	};

	const prevImage = () => {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	};
</script>

{#snippet image()}
	<img
		class="min-h-[350px] w-full object-cover"
		src={images[currentImageIndex]}
		alt="gallery image {currentImageIndex + 1}"
	/>
{/snippet}

{#snippet video()}
	<video muted autoplay class="h-[350px] w-full object-cover" src={images[currentImageIndex]}
	></video>
{/snippet}

{#if !!images[currentImageIndex]}
	<div class="relative min-h-[350px] w-full">
		{#if images[currentImageIndex]?.endsWith('.mp4')}
			{@render video()}
		{:else}
			{@render image()}
		{/if}
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
					aria-label="gallery image {i + 1}"
					class="h-2 w-2 rounded-full {i === currentImageIndex ? 'bg-white' : 'bg-white/50'}"
					onclick={() => (currentImageIndex = i)}
				></button>
			{/each}
		</div>
	</div>
{/if}

<div class="mt-8 grid grid-cols-2 gap-8 px-8 pb-12 text-white">
	<div class="space-y-6">
		<div>
			<h3 class="text-sm tracking-wider text-white/60 uppercase">Client</h3>
			<p class="text-xl font-medium">{client}</p>
		</div>
		<div>
			<h3 class="text-sm tracking-wider text-white/60 uppercase">Date</h3>
			<p class="text-xl font-medium">{date}</p>
		</div>
		<div>
			<h3 class="text-sm tracking-wider text-white/60 uppercase">Tech Stack</h3>
			<div class="mt-2 flex flex-wrap gap-2">
				{#each techStack as tech}
					<span class="rounded bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">{tech}</span>
				{/each}
			</div>
		</div>
	</div>
	<div class="space-y-6">
		<div>
			<h3 class="text-sm tracking-wider text-white/60 uppercase">Highlights</h3>
			<ul class="mt-2 list-inside list-disc space-y-2">
				{#each highlights as highlight}
					<li class="text-lg">{highlight}</li>
				{/each}
			</ul>
		</div>
		{#if demoUrl}
			<a
				href={demoUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block rounded-lg bg-white px-6 py-3 text-lg font-medium text-black transition-transform hover:scale-105"
			>
				View Demo →
			</a>
		{/if}
	</div>
</div>
