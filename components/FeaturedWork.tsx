import Link from "next/link";
import Image from "next/image";
import { reader } from "@/lib/keystatic";
import { RevealStagger, RevealItem } from "@/components/RevealStagger";

export default async function FeaturedWork() {
  const projects = await reader.collections.projects.all();
  const featured = projects.filter((p) => p.entry.featured);

  return (
    <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
      {featured.map((project, index) => (
        <RevealItem key={project.slug} index={index}>
          <Link
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden bg-black h-full"
          >
            <div className="relative h-[60vw] sm:h-[30vw] md:h-[25vw] overflow-hidden">
              {project.entry.coverImage ? (
                <Image
                  src={project.entry.coverImage}
                  alt={project.entry.slug}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full bg-white/5" />
              )}
            </div>

            <div className="p-4 md:p-6">
              <p className="text-xs uppercase tracking-wider opacity-50 mb-1">
                {project.entry.category}
              </p>
              <h3 className="text-sm md:text-base font-medium">
                {project.entry.slug}
              </h3>
            </div>
          </Link>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}