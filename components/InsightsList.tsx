import Link from "next/link";
import Image from "next/image";
import { reader } from "@/lib/keystatic";
import { RevealStagger, RevealItem } from "@/components/RevealStagger";

export default async function InsightsList() {
  const articles = await reader.collections.insights.all();

  return (
    <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
      {articles.map((post, index) => (
        <RevealItem key={post.slug} index={index}>
          <Link
            href={`/insights/${post.slug}`}
            className="group relative block overflow-hidden bg-black h-full"
          >
            <div className="relative h-[40vw] md:h-[22vw] overflow-hidden">
              {post.entry.coverImage ? (
                <Image
                  src={post.entry.coverImage}
                  alt={post.entry.slug}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-white/5" />
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-widest opacity-40">
                  {post.entry.category}
                </p>
                <p className="text-xs uppercase tracking-widest opacity-40">
                  {post.entry.date}
                </p>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-[1.1] mb-3 group-hover:text-accent transition-colors duration-300">
                {post.entry.slug}
              </h3>
              <p className="text-sm leading-relaxed opacity-40">
                {post.entry.excerpt}
              </p>
            </div>
          </Link>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}
