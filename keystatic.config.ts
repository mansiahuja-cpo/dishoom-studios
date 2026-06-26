import { config, collection, singleton, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    featuredProject: singleton({
      label: "Featured Project (Homepage)",
      path: "content/settings/featured-project",
      schema: {
        slug: fields.text({
          label: "Project Slug",
          description:
            'The URL slug of the project to feature on the homepage (e.g. "a-one-advisory"). Must exactly match one of the project entries.',
        }),
      },
    }),
    clientLogos: singleton({
      label: "Client Logos (Homepage Scroller)",
      path: "content/settings/client-logos",
      schema: {
        logos: fields.array(
          fields.image({
            label: "Logo",
            directory: "public/logos",
            publicPath: "/logos/",
            description: "Transparent PNG recommended.",
          }),
          {
            label: "Logos",
            itemLabel: () => "Logo",
          }
        ),
      },
    }),
    featuredInsights: singleton({
      label: "Featured Insights (Homepage)",
      path: "content/settings/featured-insights",
      schema: {
        articles: fields.array(
          fields.text({
            label: "Article Slug",
            description: "Must exactly match an Insights article slug.",
          }),
          {
            label: "Featured Articles (pick 3)",
            description: "The 3 articles shown in the Latest Thinking section on the homepage.",
            itemLabel: (props) => props.value || "Article slug",
          }
        ),
      },
    }),
  },
  collections: {
    insights: collection({
      label: "Insights",
      slugField: "slug",
      path: "content/insights/*",
      format: { contentField: "content" },
      schema: {
        slug: fields.slug({
          name: { label: "Title" },
          slug: { label: "URL Slug" },
        }),
        category: fields.text({ label: "Category" }),
        date: fields.text({ label: "Date", description: 'e.g. "2026"' }),
        excerpt: fields.text({ label: "Excerpt", multiline: true }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/insights",
          publicPath: "/insights/",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          links: true,
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "slug",
      path: "content/projects/*",
      schema: {
        slug: fields.slug({
          name: { label: "Title" },
          slug: { label: "URL Slug" },
        }),
        category: fields.text({ label: "Category" }),
        year: fields.text({ label: "Year" }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/projects",
          publicPath: "/projects/",
        }),
        featured: fields.checkbox({
          label: "Show in homepage grid",
          defaultValue: true,
        }),
        order: fields.number({
          label: "Display Order",
          description: "Controls the order projects appear on the site. Lower number = appears first.",
          defaultValue: 99,
        }),
        summary: fields.text({
          label: "Summary",
          multiline: true,
          description: "Short summary shown on the project card and detail page hero.",
        }),
        challenge: fields.text({ label: "Challenge", multiline: true }),
        insight: fields.text({ label: "Insight", multiline: true }),
        approach: fields.text({ label: "Approach", multiline: true }),
        outcome: fields.text({ label: "Outcome", multiline: true }),
        images: fields.array(
          fields.image({
            label: "Image",
            directory: "public/projects",
            publicPath: "/projects/",
          }),
          {
            label: "Project Images",
            itemLabel: () => "Image",
          }
        ),
        deliverables: fields.array(
          fields.text({ label: "Deliverable" }),
          {
            label: "Deliverables",
            description: 'e.g. "Brand Strategy & Positioning"',
            itemLabel: (props) => props.value || "Deliverable",
          }
        ),
      },
    }),
  },
});
