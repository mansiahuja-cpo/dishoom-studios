"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type HeroProps = {
  category: string;
  title: string;
  summary: string;
};

export default function Hero({ category, title, summary }: HeroProps) {
  return (
    <section className="pt-24 pb-20 mb-8">
      <motion.p
        className="text-xs uppercase tracking-widest opacity-40 mb-6"
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 0.4, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {category}
      </motion.p>
      <motion.h1
        className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8"
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
      >
        {title}.
      </motion.h1>
      <motion.p
        className="max-w-2xl text-base opacity-50 leading-relaxed"
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
      >
        {summary}
      </motion.p>
    </section>
  );
}