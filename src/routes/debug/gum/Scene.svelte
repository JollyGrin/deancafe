<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut, elasticOut } from 'svelte/easing';
	import * as THREE from 'three';

	// Setup
	let width = 0;
	let height = 0;
	let maxDist = 0;

	// Mouse position
	let mouse = { x: 0, y: 0 };
	const spring = tweened(1, {
		duration: 900,
		easing: elasticOut
	});

	// Geometry
	let vertex = 40;

	// Utility functions
	function map(num: number, in_min: number, in_max: number, out_min: number, out_max: number) {
		return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
	}

	function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	// Event handlers
	function handleMouseMove(event: MouseEvent | TouchEvent) {
		const x = 'touches' in event ? event.touches[0].pageX : event.clientX;
		const y = 'touches' in event ? event.touches[0].pageY : event.clientY;
		mouse = { x, y };
	}

	function handleMouseDown() {
		spring.set(0.7, { duration: 700, easing: cubicOut });
	}

	function handleMouseUp() {
		spring.set(1, { duration: 900, easing: elasticOut });
	}

	function handleResize() {
		width = window.innerWidth;
		height = window.innerHeight;
		vertex = width > 575 ? 80 : 40;
		maxDist = distance({ x: width / 2, y: height / 2 }, { x: 0, y: 0 });
	}

	onMount(() => {
		handleResize();

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('touchmove', handleMouseMove);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('touchstart', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('touchend', handleMouseUp);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('touchmove', handleMouseMove);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('touchstart', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('touchend', handleMouseUp);
			window.removeEventListener('resize', handleResize);
		};
	});

	let bubbleRotationY = 0;
	let bubbleRotationZ = 0;
	$: {
		bubbleRotationY = -4 + map(mouse.x, 0, width, 0, 4);
		bubbleRotationZ = 4 + map(mouse.y, 0, height, 0, -4);
	}

	// Shadow camera helper for debugging
	let shadowCamera: THREE.DirectionalLight;
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 300]} fov={100} near={0.1} far={10000} />

<T.Scene>
	<T.Fog args={[0x000000, 10, 950]} />

	<!-- Lights -->
	<T.HemisphereLight args={[0xffffff, 0x000000, 0.5]} />

	<T.DirectionalLight
		bind:ref={shadowCamera}
		position={[0, 450, 350]}
		intensity={0.4}
		color="#ff8f16"
		castShadow
	/>

	<T.DirectionalLight position={[-600, 350, 350]} intensity={0.25} color="#fff150" />
	<T.DirectionalLight position={[0, -250, 300]} intensity={0.15} color="#fff150" />

	<!-- Bubble -->
	<T.Mesh
		castShadow
		rotation.y={bubbleRotationY}
		rotation.z={bubbleRotationZ}
		scale={[$spring, $spring, $spring]}
	>
		<T.SphereGeometry args={[120, vertex, vertex]} />
		<T.MeshStandardMaterial
			{...{
				emissive: new THREE.Color(0xbd4be3),
				emissiveIntensity: 0.5,
				roughness: 0.61,
				metalness: 0.21,
				side: THREE.FrontSide
			}}
		/>
	</T.Mesh>

	<!-- Floor Plane -->
	<T.Mesh position={[0, -150, 0]} rotation.x={-Math.PI / 2} receiveShadow>
		<T.PlaneGeometry args={[2000, 2000]} />
		<T.ShadowMaterial opacity={0.15} />
	</T.Mesh>
</T.Scene>
