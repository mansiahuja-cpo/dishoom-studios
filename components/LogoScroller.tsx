import Image from "next/image";
import { reader } from "@/lib/keystatic";

export default async function LogoScroller() {
  const data = await reader.singletons.clientLogos.read();
  const logos = data?.logos?.filter(Boolean) ?? [];

  const fallbackClients = [
    "A One Advisory",
    "Goa Ironman",
    "Harvest School",
    "Tata Steel Marathon",
    "Trail O Thon",
    "CNG Cycling",
  ];

  const hasLogos = logos.length > 0;
  const items = hasLogos
    ? [...logos, ...logos]
    : [...fallbackClients, ...fallbackClients];

  return (
    <section className="overflow-hidden border-y border-white/10 py-10">
      <div className="flex animate-scroll items-center gap-3 md:gap-5">
        {items.map((item, i) =>
          hasLogos ? (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 md:gap-5"
            >
              <div className="relative h-18 w-54">
                <Image
                  src={item as string}
                  alt="Client logo"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-accent text-xs">✦</span>
            </div>
          ) : (
            <span
              key={i}
              className="flex shrink-0 items-center gap-6 md:gap-10 whitespace-nowrap"
            >
              <span className="text-sm uppercase tracking-widest opacity-30">
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