type TextBlockProps = {
  title: string;
  content: string;
};

export default function TextBlock({
  title,
  content,
}: TextBlockProps) {
  return (
    <section className="max-w-3xl mb-20">
      <h2 className="mb-4 text-sm uppercase tracking-wider opacity-60">
        {title}
      </h2>

      <p>{content}</p>
    </section>
  );
}