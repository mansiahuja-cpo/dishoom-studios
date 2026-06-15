import Container from "@/components/Container";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

import Hero from "@/components/case-study/Hero";
import TextBlock from "@/components/case-study/TextBlock";
import FullWidthImage from "@/components/case-study/FullWidthImage";
import ImageShowcase from "@/components/case-study/ImageShowcase";
import Deliverables from "@/components/case-study/Deliverables";
import NextProject from "@/components/case-study/NextProject";

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <Container>
        <h1>Project not found</h1>
      </Container>
    );
  }

  const study = caseStudies[slug as keyof typeof caseStudies];

  if (!study) {
    return (
      <Container>
        <h1>Case study coming soon</h1>
      </Container>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="pb-24">
      <FullWidthImage
        src={project.coverImage}
        alt={`${project.title} — cover`}
      />

      <Container>
        <Hero
          category={project.category}
          title={project.title}
          summary={study.summary}
        />

        <TextBlock title="Challenge" content={study.challenge} />
        <TextBlock title="Insight" content={study.insight} />
        <TextBlock title="Approach" content={study.approach} />
      </Container>

      <ImageShowcase
        images={study.images}
        alt={project.title}
      />

      <Container>
        <TextBlock title="Outcome" content={study.outcome} />
        <Deliverables items={study.assets} />
        <NextProject
          slug={nextProject.slug}
          title={nextProject.title}
          category={nextProject.category}
        />
      </Container>
    </main>
  );
}