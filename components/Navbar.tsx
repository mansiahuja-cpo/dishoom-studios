import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="font-medium">
          Dishoom Studios
        </Link>

        <nav className="flex gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}