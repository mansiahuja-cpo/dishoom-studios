import Link from "next/link";

type NextProjectProps = {
  slug: string;
  title: string;
  category: string;
};

export default function NextProject({ slug, title, category }: NextProjectProps) {
  return (
    <section className="border-t border-white/10 pt-16 mb-24">
      <p className="mb-4 text-sm uppercase tracking-wider opacity-60">
        Next Project
      </p>
      <Link
        href={`/work/${slug}`}
        className="group flex items-end justify-between"
      >
        <div>
          <p className="mb-1 text-sm opacity-50">{category}</p>
          <h2 className="text-4xl md:text-6xl font-medium">
            {title}
          </h2>
        </div>
        <span className="text-3xl opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
          →
        </span>
      </Link>
    </section>
  );
}