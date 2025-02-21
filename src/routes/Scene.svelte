<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, Grid, Stars } from '@threlte/extras';
	import Cup from '$lib/Models/Cup.svelte';
</script>

<T.PerspectiveCamera makeDefault position.y={17} position.z={35} fov={50}>
	<OrbitControls
		enableDamping
		enablePan={false}
		enableZoom={false}
		autoRotate
		maxPolarAngle={Math.PI}
		minPolarAngle={-2}
	/>
</T.PerspectiveCamera>

<Cup scale={2.6} />
