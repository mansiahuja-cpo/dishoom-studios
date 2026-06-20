import Container from "@/components/Container";
import Link from "next/link";
import FeaturedWork from "@/components/FeaturedWork";
import LogoScroller from "@/components/LogoScroller";
import Capabilities from "@/components/Capabilities";
import HeroFlip from "@/components/HeroFlip";
import GrainOverlay from "@/components/GrainOverlay";
import Reveal from "@/components/Reveal";
import { RevealStagger, RevealItem } from "@/components/RevealStagger";
import ContactForm from "@/components/ContactForm";
import { insights } from "@/data/insights";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative md:min-h-[calc(100vh-73px)] flex flex-col justify-center px-6 lg:px-8 py-20 md:py-0 overflow-hidden">
        <GrainOverlay />
        <HeroFlip />
        <p className="mt-6 max-w-xl text-base opacity-50 leading-relaxed">
Building distinctive brands and meaningful experiences through strategy, design and storytelling.
        </p>
      </section>

      {/* Logo Scroller — alt #0a0a0a */}
      <div className="bg-background-alt">
        <LogoScroller />
      </div>

      {/* Selected Work — base #111 */}
      <section className="pt-32 pb-20 border-t border-white/10">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between mb-3">
              <p className="text-xs uppercase tracking-widest opacity-40">
                Selected Work
              </p>
              <Link
                href="/work"
                className="text-xs opacity-40 hover:text-accent hover:opacity-100 transition-all"
              >
                View all →
              </Link>
            </div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-16">
              Work
            </h2>
          </Reveal>
        </Container>

<FeaturedWork />
      </section>

      {/* Who we are — alt #0a0a0a */}
      <section className="bg-background-alt pt-32 pb-20 border-t border-white/10">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
              Studio
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8 max-w-3xl">
              We don't just design what you look like.
              <br />
              We define what you stand for.
            </h2>
            <p className="max-w-2xl text-base opacity-50 leading-relaxed">
              Dishoom Studio creates brands, digital experiences and apparel
              systems that help organisations stand apart.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Capabilities — base #111 */}
      <section className="pt-32 pb-20 border-t border-white/10">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
              Capabilities
            </p>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-16">
              What we do
            </h2>
            <Capabilities />
          </Reveal>
        </Container>
      </section>

      {/* Featured Case Study — alt #0a0a0a */}
      <section className="bg-background-alt pt-32 pb-20 border-t border-white/10">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-6">
              Featured Case Study
            </p>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-6">
              A One Advisory
            </h2>
            <p className="max-w-xl text-sm opacity-40 leading-relaxed mb-12">
              Helping a growing credit advisory firm build trust, clarity, and credibility across every touchpoint.
            </p>
            <Link
              href="/work/a-one-advisory"
              className="text-xs uppercase tracking-widest opacity-40 hover:text-accent hover:opacity-100 transition-all"
            >
              View Case Study →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Latest Thinking — base #111 */}
      <section className="pt-32 pb-20 border-t border-white/10">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between mb-3">
              <p className="text-xs uppercase tracking-widest opacity-40">
                Insights
              </p>
              <Link
                href="/insights"
                className="text-xs opacity-40 hover:text-accent hover:opacity-100 transition-all"
              >
                View all →
              </Link>
            </div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-16">
              Latest Thinking
            </h2>
          </Reveal>
          <RevealStagger className="space-y-8">
            {insights.slice(0, 3).map((post, index) => (
              <RevealItem key={post.slug} index={index}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="block text-xl opacity-50 hover:opacity-100 hover:text-accent transition-all"
                >
                  {post.title}
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

{/* Contact — alt #0a0a0a */}
<section className="bg-background-alt pt-32 pb-32 border-t border-white/10">
  <Container>
    <Reveal>
      <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
        Contact
      </p>
      <h2 className="text-6xl md:text-[8vw] font-medium tracking-tight leading-[1] mb-12">
        Have a project in mind<span className="text-accent">?</span>
      </h2>
      <ContactForm />
    </Reveal>
  </Container>
</section>
    </main>
  );
}