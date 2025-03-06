<script>
	import { Canvas } from '@threlte/core';
	import SceneCup from './SceneCup.svelte';
</script>

<div id="container">
	<Canvas>
		<SceneCup />
	</Canvas>
</div>

<style>
	#container {
		margin: 0;
		width: 100%;
		height: 100%;
	}
</style>
