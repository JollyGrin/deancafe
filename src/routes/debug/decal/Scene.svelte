<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, useGltf, useTexture } from '@threlte/extras';
	import * as THREE from 'three';
	import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry.js';

	// Load the bunny model using useGltf
	const gltfPromise = useGltf(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf'
	);

	// Load textures for stickers using useTexture
	const stickerUrls = {
		sticker1: '/Sticjer_1024x1024@2x.png',
		sticker2: '/Twemoji_1f600.svg.png',
		sticker3: '/D64aIWkXoAAFI08.png',
		sticker4: '/three.png'
	};

	const texturesPromise = useTexture(stickerUrls);

	// Debug state
	let debug = false;

	// Sticker positions and configurations
	const stickerConfigs = [
		{ position: [-0.1, 1.3, 0.55], rotation: [-0.5, 0, 0], scale: [0.45, 0.45, 1] },
		{ position: [0.4, 1, 0.55], rotation: [0, 0, 0], scale: [0.3, 0.3, 1] },
		{ position: [0, 0.7, 0.85], rotation: [0, 0, 0], scale: [0.35, 0.35, 1] },
		{ position: [-0.5, 1, 0.7], rotation: [0, 1, 0], scale: [0.3, 0.3, 1] }
	];

	let bunnyMesh: THREE.Mesh;
</script>

{#await Promise.all([gltfPromise, texturesPromise]) then [gltf, textures]}
	<T.PerspectiveCamera position={[2, 2, 10]} fov={20} makeDefault>
		<OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
	</T.PerspectiveCamera>

	<T.Scene>
		<T.AmbientLight intensity={7} />
		<T.SpotLight
			position={[4, 8, 4]}
			intensity={1.5}
			angle={0.4}
			penumbra={0.8}
			decay={1.5}
			distance={20}
			castShadow
		/>
		<T.SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
		<T.DirectionalLight position={[-4, 2, -4]} intensity={0.3} color="#b6ceff" />
		<T.DirectionalLight position={[0, -2, -6]} intensity={0.2} color="#ffd0d0" />

		<!-- Ground plane for shadow -->
		<T.Mesh rotation.x={-Math.PI / 2} position.y={-1.01} receiveShadow>
			<T.PlaneGeometry args={[20, 20]} />
			<T.ShadowMaterial opacity={0.2} />
		</T.Mesh>

		<T.Group position={[0.25, -1, 0]}>
			<!-- Bunny mesh -->
			<T.Mesh bind:ref={bunnyMesh} castShadow receiveShadow geometry={gltf.nodes.bunny.geometry}>
				<T.MeshStandardMaterial
					color="black"
					roughness={0.6}
					metalness={0.1}
					envMapIntensity={1.2}
				/>

				<!-- Stickers -->
				{#each Object.entries(textures) as [key, texture], i}
					{#if i < stickerConfigs.length && bunnyMesh}
						<T.Mesh
							geometry={new DecalGeometry(
								bunnyMesh,
								new THREE.Vector3(...stickerConfigs[i].position),
								new THREE.Euler(...stickerConfigs[i].rotation),
								new THREE.Vector3(...stickerConfigs[i].scale)
							)}
						>
							<T.MeshPhysicalMaterial
								map={texture}
								transparent
								depthTest={true}
								depthWrite={false}
								polygonOffset={true}
								polygonOffsetFactor={-4}
								wireframe={debug}
								iridescence={1}
								iridescenceIOR={2.2}
								iridescenceThicknessRange={[100, 400]}
								roughness={0.2}
								metalness={0.8}
								clearcoat={1}
								clearcoatRoughness={0.1}
								toneMapped={false}
								envMapIntensity={2}
							/>
						</T.Mesh>
					{/if}
				{/each}
			</T.Mesh>

			<!-- Shadows -->
			<T.Group position={[0, 0.04, 0]}>
				<T.DirectionalLight
					castShadow
					position={[2.5, 5, -5]}
					intensity={0.5}
					shadow-bias={0.001}
				/>
			</T.Group>
		</T.Group>

		<!-- Environment -->
		<T.AmbientLight intensity={0.5} />
		<T.DirectionalLight position={[5, 5, 5]} intensity={0.5} />
	</T.Scene>
{/await}
