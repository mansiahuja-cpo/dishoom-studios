"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111]/90 backdrop-blur-sm">
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
          <Link href="/work" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">Work</Link>
          <Link href="/about" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">About</Link>
          <Link href="/insights" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">Insights</Link>
          <Link href="/contact" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">Contact</Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-6 h-6 flex items-center justify-center z-50"
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

      {menuOpen && (
        <div className="w-full border-t border-white/10 px-6 lg:px-8 py-6 flex flex-col gap-4 text-sm bg-[#111]">
          <Link href="/work" onClick={() => setMenuOpen(false)} className="opacity-70 hover:opacity-100 hover:text-accent transition-all">Work</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="opacity-70 hover:opacity-100 hover:text-accent transition-all">About</Link>
          <Link href="/insights" onClick={() => setMenuOpen(false)} className="opacity-70 hover:opacity-100 hover:text-accent transition-all">Insights</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="opacity-70 hover:opacity-100 hover:text-accent transition-all">Contact</Link>
        </div>
      )}
    </header>
  );
}