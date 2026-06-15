import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectList() {
  return (
    <div className="divide-y divide-white/10">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group block py-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-4xl font-medium">
                {project.title}
              </h3>
              <p className="mt-2 text-sm opacity-60">
                {project.category}
              </p>
            </div>

            <span className="text-sm opacity-50">
              {project.year}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}