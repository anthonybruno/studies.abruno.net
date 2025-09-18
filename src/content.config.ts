import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/data/case-studies' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      subtitle: z.string(),
      slug: z.string(),
      primaryImage: image().optional(),
      links: z.array(
        z.object({
          url: z.string(),
          title: z.string(),
          new_window: z.boolean().optional(),
        }),
      ),
      technicalSkills: z.array(z.string()),
      strategySkills: z.array(z.string()),
    }),
});

export const collections = { caseStudies };
