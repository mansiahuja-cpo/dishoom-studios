export default function LogoScroller() {
  const clients = [
    "A One Advisory",
    "Goa Ironman",
    "Harvest School",
    "Tata Steel Marathon",
    "Trail O Thon",
    "CNG Cycling",
  ];

  const items = [...clients, ...clients];

  return (
    <section className="border-t border-b border-white/10 py-10 overflow-hidden">
      <div className="flex animate-scroll gap-16 whitespace-nowrap items-center">
        {items.map((client, i) => (
          <span key={i} className="flex items-center gap-16 shrink-0">
            <span className="text-sm uppercase tracking-widest opacity-30 shrink-0">
              {client}
            </span>
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}