<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { AsciiRenderer } from '@threlte/extras';
</script>

{#snippet fadeLeft()}
	<div
		class="from-brand-back via-brand-back/80 to-brand-back/0 absolute left-0 hidden h-full w-10 bg-gradient-to-r xl:block"
	></div>
{/snippet}
{#snippet fadeRight()}
	<div
		class="from-brand-back via-brand-back/80 to-brand-back/0 absolute right-0 hidden h-full w-20 bg-gradient-to-l md:block"
	></div>
{/snippet}

{#snippet fadeBottom()}
	<div
		class="from-brand-back via-brand-back/80 absolute bottom-0 hidden h-10 w-full bg-gradient-to-t to-white/0 md:block"
	></div>
{/snippet}

{#snippet content()}
	<div
		class="bg-back/10 absolute z-20 flex h-full w-full flex-col justify-between font-[Ovo] text-white"
	>
		<div class="px-4 py-2"></div>
		<div class="flex items-center justify-between px-4 py-2">
			<p class="text-2xl">dean.cafe</p>
			<div class="flex gap-2 md:mx-20">
				<p>web</p>
				<p>■</p>
				<p>design</p>
				<p>■</p>
				<p>3d</p>
			</div>
		</div>
	</div>
{/snippet}

{#snippet cup()}
	<Canvas>
		<Scene />
	</Canvas>
{/snippet}

<div class="bg-brand-back h-screen">
	<div class="mx-auto grid h-full grid-cols-1 md:grid-cols-[3fr_2fr]">
		<div id="bg-img" class="relative">
			<div class="absolute z-10 h-[400px] w-full md:hidden">
				{@render cup()}
			</div>
			{@render content()}
			{@render fadeRight()}
			{@render fadeLeft()}
			<!-- {@render fadeBottom()} -->
		</div>
		<div class="relative hidden place-content-center text-white md:grid">
			<p class="font-display mb-2 text-xl">Transform your digital footprint.</p>
			<div class="absolute top-20 h-[250px]">
				{@render cup()}
			</div>
			<!-- <button -->
			<!-- 	class="w-fit rounded-full border-[1px] border-gray-800/50 bg-gradient-to-t from-gray-900 to-gray-700/50 px-2 font-sans text-sm" -->
			<!-- > -->
			<!-- 	Start Now -->
			<!-- </button> -->
		</div>
	</div>
</div>

<style>
	#bg-img {
		background-image: url('/tree2.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 100% 100%;
		box-shadow:
			/* 50px 50px 113px #000 inset, */ -50px -50px 110px #000 inset;
	}
</style>
