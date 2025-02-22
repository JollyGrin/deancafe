<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { useViewport } from '@threlte/extras';
	const viewport = useViewport();

	let { textures }: { textures: Record<string, THREE.Texture> } = $props();
</script>

<T.Mesh position={[$viewport.width / 2 - 1, $viewport.height / 2 - 1, 0]} scale={1}>
	<T.PlaneGeometry args={[1, 1]} />
	<T.MeshToonMaterial color="gray" />
</T.Mesh>

<T.Mesh position={[0, 0, 0]}>
	<T.SphereGeometry args={[0.02, 32, 16]} />
	<T.MeshBasicMaterial color="#ff0000" depthTest={false} />
</T.Mesh>
