import {
	shaderConfigMdr,
	shaderConfigRainbow,
	shaderConfigWarpGrid,
	shaderConfigWaterGreen
} from '$lib/shader/shaders';

export const PROJECTS = [
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
	},
	{
		title: 'teamplay',
		description: 'videogame matchmaking',
		shader: shaderConfigWaterGreen
	}
];
