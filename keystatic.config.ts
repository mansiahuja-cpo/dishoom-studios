import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      format: { contentField: "summary" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        category: fields.text({
          label: "Category",
          description:
            'e.g. "Brand Identity", "Performance Apparel", "Event Branding"',
        }),
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
        summary: fields.markdoc({
          label: "Summary",
          description:
            "Short one-line summary shown on the project card and case study hero.",
        }),
      },
    }),
    caseStudies: collection({
      label: "Case Studies",
      slugField: "slug",
      path: "content/case-studies/*",
      format: { contentField: "outcome" },
      schema: {
        slug: fields.slug({
          name: {
            label: "Project Slug",
            description:
              "Must exactly match the Project's slug (the project entry's URL) for this case study to attach correctly.",
          },
        }),
        challenge: fields.markdoc({ label: "Challenge" }),
        insight: fields.markdoc({ label: "Insight" }),
        approach: fields.markdoc({ label: "Approach" }),
        images: fields.array(
          fields.image({
            label: "Image",
            directory: "public/projects",
            publicPath: "/projects/",
          }),
          {
            label: "Gallery Images",
            itemLabel: () => "Image",
          }
        ),
        assets: fields.array(
          fields.text({ label: "Deliverable" }),
          {
            label: "Deliverables",
            description: 'e.g. "Brand Strategy & Positioning"',
            itemLabel: (props) => props.value || "Deliverable",
          }
        ),
        outcome: fields.markdoc({ label: "Outcome" }),
      },
    }),
  },
});
