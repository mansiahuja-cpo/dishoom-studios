import type { Metadata } from "next";
import Container from "@/components/Container";
import { reader } from "@/lib/keystatic";
import { DocumentRenderer } from "@keystatic/core/renderer";
import FullWidthImage from "@/components/case-study/FullWidthImage";
import Hero from "@/components/case-study/Hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await reader.collections.insights.read(slug);
  if (!post) return {};
  return {
    title: post.slug,
    description: post.excerpt ?? undefined,
    openGraph: post.coverImage
      ? { images: [{ url: post.coverImage }] }
      : undefined,
  };
}

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
        <div className="max-w-3xl mx-auto mt-20">
          <DocumentRenderer
            document={content}
            renderers={{
              block: {
                paragraph: ({ children }) => (
                  <p className="text-base opacity-70 leading-relaxed mb-6">{children}</p>
                ),
                heading: ({ level, children }) => {
                  if (level === 1) return <h1 className="text-4xl font-medium tracking-tight mb-6">{children}</h1>;
                  if (level === 2) return <h2 className="text-3xl font-medium tracking-tight mb-5">{children}</h2>;
                  if (level === 3) return <h3 className="text-2xl font-medium tracking-tight mb-4">{children}</h3>;
                  return <h4 className="text-xl font-medium mb-4">{children}</h4>;
                },
                list: ({ type, children }) =>
                  type === "ordered" ? (
                    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 opacity-70">{children}</ol>
                  ) : (
                    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 opacity-70">{children}</ul>
                  ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-accent pl-6 my-8 opacity-70">{children}</blockquote>
                ),
                divider: () => <hr className="border-white/10 my-12" />,
              },
              inline: {
                bold: ({ children }) => <strong className="font-semibold">{children}</strong>,
                italic: ({ children }) => <em className="italic">{children}</em>,
                underline: ({ children }) => <span className="underline">{children}</span>,
                link: ({ href, children }) => (
                  <a href={href} className="text-accent hover:opacity-80 transition-opacity">{children}</a>
                ),
              },
            }}
          />
        </div>
      </Container>
    </main>
  );
}
