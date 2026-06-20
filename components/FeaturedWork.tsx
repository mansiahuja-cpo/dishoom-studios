"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { RevealStagger, RevealItem } from "@/components/RevealStagger";

export default function FeaturedWork() {
  return (
    <RevealStagger className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
      {projects.map((project, index) => (
        <RevealItem key={project.slug} index={index}>
          <Link
            href={`/work/${project.slug}`}
            className="group relative block overflow-hidden bg-black h-full"
          >
            <div className="relative h-[30vw] md:h-[25vw] overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="p-4 md:p-6">
              <p className="text-xs uppercase tracking-wider opacity-50 mb-1">
                {project.category}
              </p>
              <h3 className="text-sm md:text-base font-medium">{project.title}</h3>
            </div>
          </Link>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}