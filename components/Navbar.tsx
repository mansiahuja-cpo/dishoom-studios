import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/dishoom.svg"
            alt="Dishoom Studio"
            width={120}
            height={32}
            priority
          />
        </Link>

        <nav className="flex gap-8 text-sm">
          <Link href="/" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">Home</Link>
          <Link href="/work" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">Work</Link>
          <Link href="/about" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">About</Link>
          <Link href="/insights" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">Insights</Link>
          <Link href="/contact" className="opacity-50 hover:opacity-100 hover:text-accent transition-all">Contact</Link>
        </nav>
      </div>
    </header>
  );
}