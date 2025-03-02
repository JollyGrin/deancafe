<script lang="ts">
	import { Canvas } from '@threlte/core';
	import ShaderScene from './ShaderScene.svelte';
	import { shaderConfigWarpGrid } from './shaders/shader-warpgrid';

	let { shader }: { shader: typeof shaderConfigWarpGrid } = $props();
</script>

<div class="h-full w-full">
	<Canvas>
		<ShaderScene {shader} />
	</Canvas>
</div>
