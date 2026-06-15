import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectList() {
  return (
    <div className="divide-y divide-white/10">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group flex items-center justify-between py-8 md:py-10"
        >
          <div>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1] mb-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs uppercase tracking-widest opacity-40">
              {project.category}
            </p>
          </div>

          <span className="text-2xl opacity-30 group-hover:text-accent group-hover:opacity-100 transition-all duration-300">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}