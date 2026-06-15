type HeroProps = {
  category: string;
  title: string;
  summary: string;
};

export default function Hero({
  category,
  title,
  summary,
}: HeroProps) {
  return (
    <section className="mb-20">
      <p className="mb-4 text-sm opacity-60">
        {category}
      </p>

      <h1 className="mb-6 text-5xl md:text-7xl font-medium">
        {title}
      </h1>

      <p className="max-w-3xl text-xl leading-relaxed">
        {summary}
      </p>
    </section>
  );
}