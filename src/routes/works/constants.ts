import {
	shaderConfigRainbow,
	shaderConfigWarpGrid,
	shaderConfigWaterGreen
} from '$lib/shader/shaders';
import { base } from '$app/paths';
import type { RecordDTO } from '$lib/types-record';

export const PROJECTS: RecordDTO[] = [
	{
		title: 'teamplay',
		description: 'videogame matchmaking',
		logoUrl: `${base}/teamplay/logo.png`,
		shader: shaderConfigWaterGreen,
		media: [`${base}/teamplay/demo.mp4`]
	},
	{
		title: 'runepunk',
		description: 'pvp',
		logoUrl: `${base}/runepunk/logo.png`,
		demoUrl: `https://jollygrin.github.io/demo-runepunk/`,
		shader: shaderConfigWaterGreen,
		media: [
			`${base}/runepunk/demo.mp4`,
			`${base}/runepunk/bg.webp`,
			`${base}/runepunk/bg.jpg`
		]
	},
	{
		title: 'dean.land',
		description: 'collection of my opensourced threejs experiments',
		shader: shaderConfigWarpGrid,
		media: [
			`${base}/deanland/html.webm`,
			`${base}/deanland/decal.mp4`,
			`${base}/deanland/globe.webm`,
			`${base}/deanland/dragdrop.webm`
		]
	},
	{
		blur: true,
		title: 'ruler',
		description: 'custom data entry for insurance handling',
		shader: shaderConfigRainbow,
		media: [
			`${base}/ruler/demo.mp4`,
			`${base}/ruler/1.png`,
			`${base}/ruler/2.png`,
			`${base}/ruler/3.png`,
			`${base}/ruler/4.png`
		]
	},
	{
		blur: true,
		title: 'mijn wo',
		description: 'custom data entry for insurance handling',
		shader: shaderConfigRainbow,
		media: [
			`${base}/mwo/demo.mp4`,
			`${base}/mwo/1.png`,
			`${base}/mwo/2.png`,
			`${base}/mwo/3.png`
		]
	},
	{
		blur: true,
		title: 'divorce rfp',
		description: 'custom data entry for insurance handling',
		shader: shaderConfigRainbow,
		media: [`${base}/rfp/demo.mp4`]
	}
];
