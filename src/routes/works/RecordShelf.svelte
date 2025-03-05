<script lang="ts">
	import type { RecordDTO } from '$lib/types-record';
	import { page } from '$app/state';

	const showMore = page.url.search === '?more';
	let { client = '', date = '', techStack = [], highlights = [], ...record }: RecordDTO = $props();
	const isRevealingMedia = $derived(showMore || record?.blur !== true);

	// Gallery state
	let currentImageIndex = $state(0);
	const images = $derived(record?.media ?? []);

	// Drag state
	let isDragging = $state(false);
	let startX = $state(0);
	let currentX = $state(0);
	let dragThreshold = 100; // pixels needed to trigger next/prev

	const nextImage = () => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	};

	const prevImage = () => {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	};

	const handleDragStart = (e: MouseEvent | TouchEvent) => {
		e.preventDefault();
		isDragging = true;
		startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		currentX = startX;
	};

	const handleDragMove = (e: MouseEvent | TouchEvent) => {
		if (!isDragging) return;
		e.preventDefault();
		currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
	};

	const handleDragEnd = (e: MouseEvent | TouchEvent) => {
		if (!isDragging) return;
		e.preventDefault();
		const dragDistance = currentX - startX;

		if (Math.abs(dragDistance) >= dragThreshold) {
			if (dragDistance > 0) {
				prevImage();
			} else {
				nextImage();
			}
		}

		isDragging = false;
		startX = 0;
		currentX = 0;
	};

	const preventDrag = (e: Event) => {
		e.preventDefault();
	};
</script>

{#snippet image()}
	<img
		class="pointer-events-none min-h-[350px] w-full object-cover select-none"
		style="transform: translateX({isDragging ? currentX - startX : 0}px); transition: {isDragging
			? 'none'
			: 'transform 0.3s ease'}"
		src={images[currentImageIndex]}
		alt="gallery image {currentImageIndex + 1}"
		ondragstart={preventDrag}
	/>
{/snippet}

{#snippet video()}
	<video
		muted
		autoplay
		class="pointer-events-none h-[350px] w-full object-cover select-none"
		style="transform: translateX({isDragging ? currentX - startX : 0}px); transition: {isDragging
			? 'none'
			: 'transform 0.3s ease'}"
		src={images[currentImageIndex]}
		ondragstart={preventDrag}
	></video>
{/snippet}

{#snippet media()}
	{@const mediaUrl = images[currentImageIndex]}
	<div
		tabindex="0"
		role="button"
		class="relative min-h-[350px] w-full cursor-grab {isDragging ? 'cursor-grabbing' : ''}"
		onmousedown={handleDragStart}
		onmousemove={handleDragMove}
		onmouseup={handleDragEnd}
		onmouseleave={handleDragEnd}
		ontouchstart={handleDragStart}
		ontouchmove={handleDragMove}
		ontouchend={handleDragEnd}
		ontouchcancel={handleDragEnd}
		ondragstart={preventDrag}
	>
		{#if mediaUrl?.endsWith('.mp4') || mediaUrl?.endsWith('.webm')}
			{@render video()}
		{:else}
			{@render image()}
		{/if}
		<button
			class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
			onclick={prevImage}
			ondragstart={preventDrag}
		>
			←
		</button>
		<button
			class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
			onclick={nextImage}
			ondragstart={preventDrag}
		>
			→
		</button>
		<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
			{#each images as _, i}
				<button
					aria-label="gallery image {i + 1}"
					class="h-2 w-2 rounded-full {i === currentImageIndex ? 'bg-white' : 'bg-white/50'}"
					onclick={() => (currentImageIndex = i)}
					ondragstart={preventDrag}
				></button>
			{/each}
		</div>
	</div>
{/snippet}

{#if !!images[currentImageIndex] && isRevealingMedia}
	{@render media()}
{/if}

<div class="mt-8 grid grid-cols-2 gap-8 px-8 pb-12 text-white">
	<div class="space-y-6">
		{#if client}
			<div>
				<h3 class="text-sm tracking-wider text-white/60 uppercase">Client</h3>
				<p class="text-xl font-medium">{client}</p>
			</div>
		{/if}
		{#if date}
			<div>
				<h3 class="text-sm tracking-wider text-white/60 uppercase">Date</h3>
				<p class="text-xl font-medium">{date}</p>
			</div>
		{/if}
		{#if techStack.length > 0}
			<div>
				<h3 class="text-sm tracking-wider text-white/60 uppercase">Tech Stack</h3>
				<div class="mt-2 flex flex-wrap gap-2">
					{#each techStack as tech}
						<span class="rounded bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">{tech}</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>
	{#if record?.demoUrl}
		<a
			href={record?.demoUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="w-full rounded-lg bg-white px-6 py-3 text-end text-lg font-medium text-black transition-transform hover:scale-105"
		>
			View →
		</a>
	{/if}
</div>
