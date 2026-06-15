type DeliverablesProps = {
  items: string[];
};

export default function Deliverables({ items }: DeliverablesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="max-w-3xl mb-20">
      <h2 className="mb-6 text-sm uppercase tracking-wider opacity-60">
        Deliverables
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="opacity-30 mt-1">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}