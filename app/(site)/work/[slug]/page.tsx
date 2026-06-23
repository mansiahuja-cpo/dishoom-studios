import Container from "@/components/Container";
import { reader } from "@/lib/keystatic";

import Hero from "@/components/case-study/Hero";
import TextBlock from "@/components/case-study/TextBlock";
import FullWidthImage from "@/components/case-study/FullWidthImage";
import ImageShowcase from "@/components/case-study/ImageShowcase";
import Deliverables from "@/components/case-study/Deliverables";
import NextProject from "@/components/case-study/NextProject";

export async function generateStaticParams() {
  const projects = await reader.collections.projects.all();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allProjects = await reader.collections.projects.all();
  const projects = [...allProjects].sort((a, b) => (a.entry.order ?? 99) - (b.entry.order ?? 99));

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <Container>
        <h1>Project not found</h1>
      </Container>
    );
  }

  const { entry } = project;
  const hasDetail = entry.challenge || entry.insight || entry.approach || entry.outcome;

  if (!hasDetail) {
    return (
      <Container>
        <h1>Case study coming soon</h1>
      </Container>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="pb-24">
      <Container>
        <Hero
          category={entry.category ?? ""}
          title={entry.slug}
          summary={entry.summary ?? ""}
        />
      </Container>

      {entry.coverImage && (
        <FullWidthImage
          src={entry.coverImage}
          alt={`${entry.slug} — cover`}
        />
      )}

      <Container>
        {entry.challenge && <TextBlock title="Challenge" content={entry.challenge} />}
        {entry.insight && <TextBlock title="Insight" content={entry.insight} />}
        {entry.approach && <TextBlock title="Approach" content={entry.approach} />}
        {entry.outcome && <TextBlock title="Outcome" content={entry.outcome} />}
      </Container>

      {entry.images && entry.images.length > 0 && (
        <ImageShowcase
          images={[...entry.images] as string[]}
          alt={entry.slug}
        />
      )}

      <Container>
        {entry.deliverables && entry.deliverables.length > 0 && (
          <Deliverables items={[...entry.deliverables]} />
        )}
        <NextProject
          slug={nextProject.slug}
          title={nextProject.entry.slug}
          category={nextProject.entry.category ?? ""}
        />
      </Container>
    </main>
  );
}