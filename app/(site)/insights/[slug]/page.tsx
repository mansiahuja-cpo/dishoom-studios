import Container from "@/components/Container";
import { reader } from "@/lib/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import FullWidthImage from "@/components/case-study/FullWidthImage";
import Hero from "@/components/case-study/Hero";

export async function generateStaticParams() {
  const articles = await reader.collections.insights.all();
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function InsightArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await reader.collections.insights.read(slug);

  if (!post) {
    return (
      <Container>
        <h1>Article not found</h1>
      </Container>
    );
  }

  const content = await post.content();

  return (
    <main className="pb-24">
      <Container>
        <Hero
          category={post.category ?? ""}
          title={post.slug}
          summary={post.excerpt ?? ""}
        />
      </Container>

      {post.coverImage && (
        <FullWidthImage src={post.coverImage} alt={post.slug} />
      )}

      <Container>
        <div className="max-w-3xl mx-auto mt-20 prose prose-invert prose-lg">
          <DocumentRenderer document={content} />
        </div>
      </Container>
    </main>
  );
}
