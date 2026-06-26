import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-16">
          <div>
            <Image src="/dishoom.svg" alt="Dishoom Studio" width={100} height={15} className="mb-4" />
            <p className="text-xs opacity-40">
              Punched by Dishoom Studio © {new Date().getFullYear()}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-4">Pages</p>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">Home</Link>
                <Link href="/work" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">Work</Link>
                <Link href="/about" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">About</Link>
                <Link href="/insights" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">Insights</Link>
                <Link href="/contact" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">Contact</Link>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-4">Social</p>
              <a href="https://www.instagram.com/dishoom.studio/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 hover:text-accent transition-all inline-block" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-4">Contact</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href="mailto:hello@dishoomstudio.com" className="opacity-60 hover:opacity-100 hover:text-accent transition-all">
                  hello@dishoomstudio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-[9vw] font-medium leading-none tracking-tight text-white/5 select-none m-0 overflow-hidden whitespace-nowrap">
        Dishoom Studio.
      </p>
    </footer>
  );
}