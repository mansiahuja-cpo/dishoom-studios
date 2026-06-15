type TextBlockProps = {
  title: string;
  content: string;
};

export default function TextBlock({ title, content }: TextBlockProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 border-t border-white/10 pt-8">
      <div>
        <h2 className="text-xs uppercase tracking-widest opacity-40">
          {title}
        </h2>
      </div>
      <div className="md:col-span-3">
        <p className="text-xl leading-relaxed opacity-80">{content}</p>
      </div>
    </section>
  );
}