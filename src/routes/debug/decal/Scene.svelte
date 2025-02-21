<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, useGltf, useTexture } from '@threlte/extras';
	import * as THREE from 'three';

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
		{ position: [-0.1, 1.3, 0.55], rotation: -0.5, scale: 0.45 },
		{ position: [0.4, 1, 0.55], rotation: 0, scale: 0.3 },
		{ position: [0, 0.7, 0.85], rotation: 0, scale: 0.35 },
		{ position: [-0.5, 1, 0.7], rotation: 1, scale: 0.3 }
	];
</script>

{#await Promise.all([gltfPromise, texturesPromise]) then [gltf, textures]}
	<T.PerspectiveCamera position={[2, 2, 10]} fov={20} makeDefault>
		<OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
	</T.PerspectiveCamera>

	<T.Scene>
		<T.AmbientLight intensity={1} />
		<T.SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

		<T.Group position={[0.25, -1, 0]}>
			<!-- Bunny mesh -->
			<T.Mesh castShadow receiveShadow geometry={gltf.nodes.bunny.geometry}>
				<T.MeshStandardMaterial color="black" roughness={0.9} />

				<!-- Stickers -->
				{#each Object.entries(textures) as [key, texture], i}
					{#if i < stickerConfigs.length}
						<T.Mesh
							position={stickerConfigs[i].position as [number, number, number]}
							rotation.y={stickerConfigs[i].rotation}
							scale={stickerConfigs[i].scale}
						>
							<T.PlaneGeometry />
							<T.MeshPhysicalMaterial
								map={texture}
								transparent
								polygonOffset
								polygonOffsetFactor={-10}
								flipY={false}
								iridescence={1}
								iridescenceIOR={1}
								iridescenceThicknessRange={[0, 1400]}
								roughness={1}
								clearcoat={0.5}
								metalness={0.75}
								toneMapped={false}
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
