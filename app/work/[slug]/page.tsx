import Container from "@/components/Container";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

import Hero from "@/components/case-study/Hero";
import TextBlock from "@/components/case-study/TextBlock";
import FullWidthImage from "@/components/case-study/FullWidthImage";

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

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

  return (
    <main className="pb-24">
      <FullWidthImage
        src={project.coverImage}
        alt={`${project.title} — cover image`}
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

        {study.images && study.images.length > 0 && (
          <section className="mb-20">
            {study.images.map((src) => (
              <FullWidthImage
                key={src}
                src={src}
                alt={`${project.title} — work`}
              />
            ))}
          </section>
        )}

        <TextBlock title="Outcome" content={study.outcome} />

        <section className="max-w-3xl mb-20">
          <h2 className="mb-4 text-sm uppercase tracking-wider opacity-60">
            Deliverables
          </h2>
          <ul className="space-y-2">
            {study.assets.map((asset) => (
              <li key={asset}>• {asset}</li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}