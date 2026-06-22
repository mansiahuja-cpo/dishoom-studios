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
  },
  collections: {
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
