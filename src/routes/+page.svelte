<script lang="ts">
</script>

{#snippet fadeRight()}
	<div
		class="absolute right-0 hidden h-full w-10 bg-gradient-to-l from-black via-black/80 to-white/0 md:block"
	></div>
{/snippet}

{#snippet fadeBottom()}
	<div
		class="absolute bottom-0 hidden h-10 w-full bg-gradient-to-t from-black via-black/80 to-white/0 md:block"
	></div>
{/snippet}

<div class="h-screen w-screen bg-black">
	<div class="mx-auto grid h-full max-h-[800px] max-w-[1200px] grid-cols-1 md:grid-cols-[3fr_2fr]">
		<div id="bg-img" class="relative">
			{@render fadeRight()}
			{@render fadeBottom()}
		</div>
		<div class="grid place-content-center text-white">
			<p>Transform your digital footprint.</p>
		</div>
	</div>
	<div class="h-full bg-black"></div>
</div>

<style>
	#bg-img {
		background-image: url('/tree2.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 100% 100%;
		box-shadow:
			50px 50px 113px #000 inset,
			-50px -50px 110px #000 inset;
	}
</style>
