<script lang="ts">
	import CanvasCup from '$lib/Canvas/Cup/CanvasCup.svelte';
	import IconHistory from '$lib/icon/IconHistory.svelte';
	import IconLogo from '$lib/icon/IconLogo.svelte';

	import ShaderCanvas from '$lib/shader/ShaderCanvas.svelte';
	import {
		shaderConfigMdr,
		shaderConfigOrganicRainbow,
		shaderConfigRainbow,
		shaderConfigWarpGrid
	} from '$lib/shader/shaders';
	import SvgMockup from '$lib/svg/SVGMockup.svelte';

	const shaders = [
		shaderConfigOrganicRainbow,
		shaderConfigRainbow,
		shaderConfigMdr,
		shaderConfigWarpGrid
	];

	const randomIndex = Math.round(Math.random() * shaders.length);
	const randomShader = shaders[randomIndex];
</script>

<div class="font-readex text-brand-primary flex min-h-screen flex-col justify-between bg-white">
	<header class="flex items-center justify-between p-4">
		<a href="/" class="flex items-center gap-2">
			<IconLogo w={50} />
		</a>
		<nav class="flex gap-4 font-bold">
			<a href="/works" class="bg-brand-light flex items-center gap-2 rounded-xl px-3 py-2">
				<IconHistory w={22} />
				<span> past orders</span>
			</a>
			<!-- <a href="/quote" class="bg-brand-light flex items-center gap-2 rounded-xl px-3 py-2"> -->
			<!-- 	<IconQuote /> -->
			<!-- 	<span>quote</span> -->
			<!-- </a> -->
		</nav>
	</header>

	<div class="grid place-items-center">
		<h1 class="font-potta mb-4 text-6xl font-bold">dean.cafe</h1>
		<p class="mb-16 text-xl text-[#C16A08]">I'll make you a website</p>
	</div>

	{#snippet card(text: string)}
		<div
			class="bg-brand-light min-h-[5vh] rounded-4xl p-8 transition-all hover:translate-x-[0.5rem] hover:translate-y-[-0.5rem] hover:shadow-[-2px_2px_4px_rgba(0,0,0,0.1)] md:min-h-[30vh]"
		>
			<h2>{text}</h2>
		</div>
	{/snippet}

	<div class="flex flex-col items-center justify-center gap-10">
		<div class="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
			<!-- CARDS -->
			<div
				class="group/mockup bg-brand-light relative min-h-[5vh] overflow-clip rounded-4xl p-8 transition-all hover:translate-x-[0.5rem] hover:translate-y-[-0.5rem] hover:shadow-[-2px_2px_4px_rgba(0,0,0,0.1)] md:min-h-[30vh]"
			>
				<h2>mockups</h2>
				<div
					class="absolute top-[10px] left-32 scale-90 opacity-80 transition-all group-hover/mockup:translate-y-[-15px] md:top-[60px] md:left-4"
				>
					<SvgMockup />
				</div>
			</div>
			<div
				class="bg-brand-light relative min-h-[5vh] overflow-clip rounded-4xl p-8 saturate-50 transition-all hover:translate-x-[0.5rem] hover:translate-y-[-0.5rem] hover:shadow-[-2px_2px_4px_rgba(0,0,0,0.1)] hover:saturate-110 active:saturate-110 md:min-h-[30vh]"
			>
				<h2 class="bg-brand-light/50 relative z-50 w-fit rounded-full p-2">websites</h2>
				<div class="absolute top-0 left-0 z-0 h-full w-full">
					<ShaderCanvas shader={randomShader} />
				</div>
			</div>
			<div
				class="bg-brand-light relative min-h-[5vh] overflow-clip rounded-4xl p-8 transition-all hover:translate-x-[0.5rem] hover:translate-y-[-0.5rem] hover:shadow-[-2px_2px_6px_rgba(0,0,0,0.08)] md:min-h-[30vh]"
			>
				<h2>3d</h2>
				<div
					class="absolute top-[-30px] left-[100px] min-h-10 min-w-10 scale-70 opacity-80 md:top-10 md:left-4 md:scale-90"
				>
					<CanvasCup />
				</div>
			</div>
			<!-- CARDS END -->
		</div>
		<div class="bg-brand-primary text-brand-light grid h-20 w-full place-items-center">
			<div class="flex flex-col items-center">
				<div class="flex items-center gap-2">
					<span class="h-4 w-4 animate-pulse rounded-full bg-amber-500"> </span>
					<span> Currently engaged in client work </span>
				</div>
				<span class="text-xs opacity-30"> Reach out to schedule future appointment </span>
			</div>
		</div>
	</div>
</div>
