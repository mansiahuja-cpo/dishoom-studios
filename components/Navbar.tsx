"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { href: "/work", label: "Work", prefetch: true },
  { href: "/about", label: "About", prefetch: false },
  { href: "/insights", label: "Insights", prefetch: false },
  { href: "/contact", label: "Contact", prefetch: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111]/90 backdrop-blur-sm relative">
      <div className="flex items-center justify-between px-6 lg:px-8 py-4">
        <Link href="/">
          <Image
            src="/dishoom.svg"
            alt="Dishoom Studio"
            width={120}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden md:flex flex-1 justify-evenly items-center mx-12 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={link.prefetch}
              className="opacity-50 hover:opacity-100 hover:text-accent transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-6 h-6 flex items-center justify-center z-[60]"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block h-[1.5px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full h-[60vh] flex flex-col overflow-hidden"
            style={{ backgroundColor: "rgb(39, 39, 39)" }}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.6,
                    ease: EASE,
                    delay: 0.15 + i * 0.07,
                  }}
                >
                  <Link
                    href={link.href}
                    prefetch={link.prefetch}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl sm:text-6xl font-medium tracking-tight hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

<motion.div
  className="flex items-center justify-between px-6 py-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
>
<a href="mailto:hello@dishoomstudio.com" className="text-base font-medium normal-case hover:text-accent hover:opacity-100 transition-all">
  hello@dishoomstudio.com
</a>
<span className="text-xs opacity-40 leading-relaxed">
    © 2026 Dishoom Studio.
  </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}