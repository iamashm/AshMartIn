import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title:     z.string(),
    date:      z.coerce.date(),
    tags:      z.array(z.string()).default([]),
    excerpt:   z.string().optional(),
    draft:     z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    status:      z.enum(['live', 'in-progress', 'archived']),
    year:        z.string(),
    type:        z.string(),
    role:        z.string(),
    stack:       z.array(z.string()).default([]),
    siteUrl:     z.string().url().optional(),
    repoUrl:     z.string().url().optional(),
    heroImage:   z.string().optional(),
    order:       z.number().default(99),
    featured:    z.boolean().default(false),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { writing, projects };
