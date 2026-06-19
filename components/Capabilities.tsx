"use client";

import { useState } from "react";
import { RevealStagger, RevealItem } from "@/components/RevealStagger";

const capabilities = [
  {
    title: "Brand Strategy",
    description: "Where you stand, what you say, and why it matters.",
    tags: ["Positioning", "Naming", "Messaging", "Brand Voice"],
  },
  {
    title: "Identity Systems",
    description: "Visual language built to last across every touchpoint.",
    tags: ["Logo Design", "Typography", "Colour Systems", "Brand Guidelines"],
  },
  {
    title: "Employer Branding",
    description: "Because keeping great people is harder than finding them.",
    tags: ["Internal Brand", "Culture Design", "Recruitment Marketing", "EVP"],
  },
  {
    title: "Digital Experiences",
    description: "Websites and digital experiences that do more than look good.",
    tags: ["Websites", "UX/UI", "Content Systems", "Digital Communications"],
  },
  {
    title: "Brand Experiences",
    description: "Turning brands into things people can see, wear, and remember.",
    tags: ["Apparel Systems", "Merchandise", "Event Branding", "Environmental Graphics"],
  },
];

export default function Capabilities() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <RevealStagger className="divide-y divide-white/10">
      {capabilities.map((item, i) => (
        <RevealItem key={i} index={i}>
          <div
            className="group cursor-pointer py-6 md:py-8"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-6">
                <span className="text-xs opacity-30 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors duration-300 ${open === i ? "text-accent" : "group-hover:text-accent"}`}>
                  {item.title}
                </h3>
              </div>
              <span className={`text-xl transition-all duration-300 ${open === i ? "text-accent rotate-45" : "opacity-30 group-hover:opacity-100"}`}>
                +
              </span>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="mt-4 ml-14 space-y-4">
                <p className="text-sm opacity-50 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest border border-accent text-accent opacity-80 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}