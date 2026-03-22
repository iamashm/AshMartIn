import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {

    // ── Writing posts ──────────────────────────────────────────────
    writing: collection({
      label: 'Writing',
      slugField: 'title',
      path: 'src/content/writing/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.value }
        ),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
          description: 'Short description used in previews and meta tags.',
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Draft posts are excluded from the site.',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/writing',
              publicPath: '/images/writing/',
            },
          },
        }),
      },
    }),

    // ── Projects ───────────────────────────────────────────────────
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          description: 'Short description shown in project cards and the overview section.',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Live',        value: 'live' },
            { label: 'In Progress', value: 'in-progress' },
            { label: 'Archived',    value: 'archived' },
          ],
          defaultValue: 'in-progress',
        }),
        year: fields.text({ label: 'Year', description: 'e.g. 2026 or 2025–2026' }),
        type: fields.text({ label: 'Type', description: 'e.g. Web application, iOS app' }),
        role: fields.text({ label: 'Role', description: 'e.g. Design, engineering' }),
        stack: fields.array(
          fields.text({ label: 'Technology' }),
          { label: 'Stack', itemLabel: props => props.value }
        ),
        siteUrl: fields.url({ label: 'Live Site URL' }),
        repoUrl: fields.url({ label: 'Repo URL' }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        order: fields.number({
          label: 'Display Order',
          description: 'Lower numbers appear first.',
          defaultValue: 99,
        }),
        featured: fields.checkbox({
          label: 'Featured',
          description: 'Show on the home page.',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/projects',
              publicPath: '/images/projects/',
            },
          },
        }),
      },
    }),

  },
});
