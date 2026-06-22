import Image from "next/image";
import { reader } from "@/lib/keystatic";

export default async function LogoScroller() {
  const data = await reader.singletons.clientLogos.read();
  const logos = data?.logos?.filter(Boolean) ?? [];

  // Fall back to text names if no logos have been uploaded yet
  const fallbackClients = [
    "A One Advisory",
    "Goa Ironman",
    "Harvest School",
    "Tata Steel Marathon",
    "Trail O Thon",
    "CNG Cycling",
  ];

  const hasLogos = logos.length > 0;
  const items = hasLogos ? [...logos, ...logos] : [...fallbackClients, ...fallbackClients];

  return (
    <section className="border-t border-b border-white/10 py-10 overflow-hidden">
      <div className="flex animate-scroll gap-5 items-center">
        {items.map((item, i) =>
          hasLogos ? (
            <div key={i} className="shrink-0 flex items-center gap-5">
              <div className="relative h-18 w-54">
                <Image
                  src={item as string}
                  alt="Client logo"
                  fill
                  className="object-contain opacity-100"
                />
              </div>
              <span className="text-accent text-xs">✦</span>
            </div>
          ) : (
            <span key={i} className="flex items-center gap-10 shrink-0 whitespace-nowrap">
              <span className="text-sm uppercase tracking-widest opacity-30 shrink-0">
                {item as string}
              </span>
              <span className="text-accent text-xs">✦</span>
            </span>
          )
        )}
      </div>
    </section>
  );
}