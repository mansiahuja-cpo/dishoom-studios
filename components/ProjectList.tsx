import Link from "next/link";
import { reader } from "@/lib/keystatic";
import { RevealStagger, RevealItem } from "@/components/RevealStagger";

export default async function ProjectList() {
  const projects = await reader.collections.projects.all();
  const sorted = [...projects].sort((a, b) => (a.entry.order ?? 99) - (b.entry.order ?? 99));

  return (
    <RevealStagger className="divide-y divide-white/10">
      {sorted.map((project, index) => (
        <RevealItem key={project.slug} index={index}>
          <Link
            href={`/work/${project.slug}`}
            className="group flex items-center justify-between py-8 md:py-10"
          >
            <div>
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1] mb-2 group-hover:text-accent transition-colors duration-300">
                {project.entry.slug}
              </h3>
              <p className="text-xs uppercase tracking-widest opacity-40">
                {project.entry.category}
              </p>
            </div>

            <span className="text-2xl opacity-30 group-hover:text-accent group-hover:opacity-100 transition-all duration-300">
              →
            </span>
          </Link>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}