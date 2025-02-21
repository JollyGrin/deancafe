<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { AsciiRenderer } from '@threlte/extras';
</script>

<Canvas>
	<AsciiRenderer colors={true} />
	<Scene />
</Canvas>

<style>
	:global(html, body) {
		background-color: black;
		margin: 0;
		height: 100%;
	}
</style>
