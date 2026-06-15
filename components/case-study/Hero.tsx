type HeroProps = {
  category: string;
  title: string;
  summary: string;
};

export default function Hero({ category, title, summary }: HeroProps) {
  return (
    <section className="pt-24 pb-20 mb-8">
      <p className="text-xs uppercase tracking-widest opacity-40 mb-6">
        {category}
      </p>
      <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8">
        {title}.
      </h1>
      <p className="max-w-2xl text-base opacity-50 leading-relaxed">
        {summary}
      </p>
    </section>
  );
}