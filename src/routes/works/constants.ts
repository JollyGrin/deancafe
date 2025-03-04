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
		shader: shaderConfigWaterGreen,
		media: [
			`${base}/teamplay/demo.mp4`,
			'https://picsum.photos/seed/2/1000/400'
		]
	},
	{
		title: 'runepunk',
		description: 'videogame matchmaking',
		shader: shaderConfigWaterGreen
	},
	{
		title: 'dean.land',
		description: 'collection of my opensourced threejs experiments',
		shader: shaderConfigWarpGrid
	},
	{
		title: 'ruler',
		description: 'custom data entry for insurance handling',
		shader: shaderConfigRainbow
	},
	{
		title: 'mijn wo',
		description: 'custom data entry for insurance handling',
		shader: shaderConfigRainbow
	},
	{
		title: 'divorce rfp',
		description: 'custom data entry for insurance handling',
		shader: shaderConfigRainbow
	}
];
