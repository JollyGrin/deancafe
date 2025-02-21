<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<Canvas>
	<Scene />
</Canvas>

<style>
	:global(html, body) {
		margin: 0;
		height: 100%;
	}
</style>
