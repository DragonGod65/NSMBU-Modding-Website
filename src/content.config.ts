import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const mods = defineCollection({
	loader: glob({ base: './src/content/mods', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		downloadLink: z.string(),
		author: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { mods };