<script lang="ts">
</script>

{#snippet cube()}
	<div class="container flex flex-col items-center">
		<a href="/" class="cube">
			<div class=" grid h-full grid-cols-3 items-center justify-items-center px-4">
				<p class="justify-self-start text-2xl font-bold">Teamplay</p>
				<p>Videogame matchmaking</p>
				<p class="justify-self-end">(logo)</p>
			</div>
			<div class="topface" style="background:url('https://picsum.photos/seed/1/200')"></div>
		</a>
	</div>
{/snippet}

<div class="flex flex-col gap-4 overflow-hidden px-2 pt-10">
	{@render cube()}
	{@render cube()}
	{@render cube()}
</div>

<style>
	:global(body) {
		background: black;
	}
	.container {
		perspective: 1200px;
		max-width: 900px;
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
	}

	.cube:hover {
		rotate: x -40deg;
		box-shadow: inset 0 -10px 5px rgba(0, 0, 0, 0.05);
	}

	.topface {
		transition:
			transform,
			rotate 0.4s ease;
		position: absolute;
		top: 0;
		background: red;
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
