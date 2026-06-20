import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "slug",
      path: "content/projects/*",
      schema: {
        slug: fields.slug({
          name: {
            label: "Title",
            description: "Used as the project's display title.",
          },
          slug: {
            label: "URL Slug",
            description:
              "Used in the page URL (/work/[slug]) and filename. Auto-generated from the title, but editable.",
          },
        }),
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
        summary: fields.text({
          label: "Summary",
          multiline: true,
          description:
            "Short one-line summary shown on the project card and case study hero.",
        }),
      },
    }),
    caseStudies: collection({
      label: "Case Studies",
      slugField: "projectSlug",
      path: "content/case-studies/*",
      schema: {
        projectSlug: fields.slug({
          name: {
            label: "Reference Name",
            description: "Just for identifying this entry in the list.",
          },
          slug: {
            label: "Project Slug",
            description:
              "Must exactly match the Project's URL slug for this case study to attach correctly.",
          },
        }),
        challenge: fields.text({ label: "Challenge", multiline: true }),
        insight: fields.text({ label: "Insight", multiline: true }),
        approach: fields.text({ label: "Approach", multiline: true }),
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
        outcome: fields.text({ label: "Outcome", multiline: true }),
      },
    }),
  },
});
