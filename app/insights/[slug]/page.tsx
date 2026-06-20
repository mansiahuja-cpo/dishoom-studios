import Container from "@/components/Container";
import { insights } from "@/data/insights";
import FullWidthImage from "@/components/case-study/FullWidthImage";
import TextBlock from "@/components/case-study/TextBlock";
import Hero from "@/components/case-study/Hero";

export default async function InsightArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = insights.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container>
        <h1>Article not found</h1>
      </Container>
    );
  }

  return (
    <main className="pb-24">
      <Container>
        <Hero
          category={post.category}
          title={post.title}
          summary={post.excerpt}
        />
      </Container>

      <FullWidthImage src={post.coverImage} alt={`${post.title} — cover`} />

      <Container>
        {post.content.map((paragraph, i) => (
          <TextBlock
            key={i}
            title={i === 0 ? post.date : ""}
            content={paragraph}
          />
        ))}
      </Container>
    </main>
  );
}
