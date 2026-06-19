import Reveal from "@/components/Reveal";
import { RevealStagger, RevealItem } from "@/components/RevealStagger";

type DeliverablesProps = {
  items: string[];
};

export default function Deliverables({ items }: DeliverablesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="max-w-3xl mb-20">
      <Reveal>
        <h2 className="mb-6 text-sm uppercase tracking-wider opacity-60">
          Deliverables
        </h2>
      </Reveal>
      <RevealStagger className="space-y-3">
        {items.map((item, i) => (
          <RevealItem key={item} index={i}>
            <li className="flex items-start gap-3 list-none">
              <span className="opacity-30 mt-1">—</span>
              <span>{item}</span>
            </li>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}