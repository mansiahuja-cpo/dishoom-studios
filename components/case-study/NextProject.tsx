import Link from "next/link";

type NextProjectProps = {
  slug: string;
  title: string;
  category: string;
};

export default function NextProject({ slug, title, category }: NextProjectProps) {
  return (
    <section className="border-t border-white/10 pt-16 mb-24">
      <p className="text-xs uppercase tracking-widest opacity-40 mb-6">
        Next Project
      </p>
      <Link href={`/work/${slug}`} className="group flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
            {category}
          </p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1] group-hover:text-accent transition-colors duration-300">
            {title}
          </h2>
        </div>
        <span className="text-2xl opacity-30 group-hover:text-accent group-hover:opacity-100 transition-all duration-300">
          →
        </span>
      </Link>
    </section>
  );
}