<script lang="ts">
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	let { fallback, error, children, ref = $bindable(), ...props }: Record<string, any> = $props();

	const gltf = useGltf('/cup.glb');
</script>

<T.Group bind:ref dispose={false} {...props}>
	{#await gltf}
		{@render fallback?.()}
	{:then gltf}
		<T.Group rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={props.scale ?? 2} position.y={-1}>
			<T.Group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
				<T.Mesh geometry={gltf.nodes.Cylinder_0.geometry} material={gltf.materials.Porcelain} />
				<T.Mesh geometry={gltf.nodes.Cylinder_1.geometry} material={gltf.materials.Coffee} />
			</T.Group>
		</T.Group>
	{:catch err}
		{@render error?.({ error: err })}
	{/await}

	{@render children?.({ ref })}
</T.Group>
