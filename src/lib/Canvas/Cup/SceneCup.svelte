<script>
	import Cup from '$lib/Models/Cup.svelte';
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault position={[0, 7, 7]} fov={30}>
	<OrbitControls
		autoRotate={true}
		enableZoom={true}
		enableDamping
		autoRotateSpeed={0.5}
		minPolarAngle={0.5}
		maxPolarAngle={1}
	/>
</T.PerspectiveCamera>

<Cup />
