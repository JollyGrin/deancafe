import {
	shaderConfigMatrix,
	shaderConfigOrganicRainbow,
	shaderConfigRainbow,
	shaderConfigWarpGrid,
	shaderConfigWaterGreen
} from '$lib/shader/shaders';
import { base } from '$app/paths';
import type { RecordDTO } from '$lib/types-record';

export const PROJECTS: RecordDTO[] = [
	{
		title: 'waterhouse',
		description: 'amsterdam music studios',
		logoUrl: `${base}/waterhouse/logo.svg`,
		demoUrl: `https://waterhousestudios.nl/`,
		client: 'Waterhouse Studios',
		shader: shaderConfigOrganicRainbow,
		media: [
			`${base}/waterhouse/1.png`,
			`${base}/waterhouse/2.png`,
			`${base}/waterhouse/3.png`
		]
	},
	{
		title: 'teamplay',
		description: 'videogame matchmaking',
		logoUrl: `${base}/teamplay/logo.png`,
		client: 'SpacemanGaming',
		shader: shaderConfigMatrix,
		media: [`${base}/teamplay/demo.mp4`]
	},
	{
		title: 'runepunk',
		description: 'runescape inspired dueling',
		logoUrl: `${base}/runepunk/logo.png`,
		client: 'SpacemanGaming',
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
		description: 'collection of 3d experiments',
		demoUrl: `https://dean.land/`,
		shader: shaderConfigWarpGrid,
		media: [
			`${base}/deanland/html.webm`,
			`${base}/deanland/gallery.webm`,
			`${base}/deanland/decal.mp4`,
			`${base}/deanland/globe.webm`
		]
	},
	{
		blur: true,
		title: 'ruler',
		client: 'Projective Group',
		description: 'insurance claim handling',
		logoUrl: `${base}/ruler/logo.svg`,
		demoUrl: `https://ruler.nl/`,
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
		client: 'Hyen',
		description: 'manage & migrate pensions',
		logoUrl: `${base}/mwo/logo.svg`,
		demoUrl: `https://www.mijnwaardeoverdracht.nl/en`,
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
		client: 'Hyfen',
		description: 'divide pension during divorce',
		shader: shaderConfigRainbow,
		media: [`${base}/rfp/demo.mp4`]
	}
];
