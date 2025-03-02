import type { shaderConfigWarpGrid } from './shader/shaders';

export type RecordDTO = {
	title?: string;
	img?: string;
	shader?: typeof shaderConfigWarpGrid;
	client?: string;
	date?: string;
	techStack?: string[];
	highlights?: string[];
	demoUrl?: string;
	galleryImages?: string[];
	galleryVideos?: string[];
};
