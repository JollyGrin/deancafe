<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, Grid, Stars } from '@threlte/extras';
	import Cup from './cup.svelte';
</script>

<Stars />

<T.PerspectiveCamera makeDefault position.y={1} position.z={8} fov={90}>
	<OrbitControls enableDamping enablePan={false} enableZoom={false} />
</T.PerspectiveCamera>
<Cup />
