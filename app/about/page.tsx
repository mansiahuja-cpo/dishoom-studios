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

export default function About() {
  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-6">
              About
            </p>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1]">
              About Dishoom<span className="text-accent">.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Content — headline / sub-headline / copy, one continuous block */}
      <section className="py-20 border-t border-white/10">
        <Container>
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-3xl mb-8">
              Organisations evolve.   <br />Their brands don&apos;t always keep up.
            </h2>

            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug max-w-2xl mb-12 text-accent">
              Dishoom helps bridge that gap.
            </p>

            <div className="max-w-2xl space-y-6">
              <p className="text-base opacity-50 leading-relaxed">
                As businesses grow, perceptions become fragmented. Expertise
                outpaces communication. Culture changes. New audiences
                emerge. What once worked no longer reflects who they are or
                where they&apos;re headed.
              </p>
              <p className="text-base opacity-50 leading-relaxed">
                We work with organisations to define who they are,
                articulate what they stand for, and express it consistently
                across every touchpoint. From brand strategy and identity
                systems to employer branding, digital experiences, and brand
                experiences, our work is focused on creating clarity,
                consistency, and connection.
              </p>
              <p className="text-base opacity-50 leading-relaxed">
                We believe strong brands are not built through logos alone.
                They are built through every interaction, every experience,
                and every impression people take away.
              </p>
              <p className="text-base opacity-50 leading-relaxed">
                That&apos;s why we approach branding as a system, not a
                single deliverable. One that helps organisations show up
                with confidence, communicate with purpose, and be remembered
                for the right reasons.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Closing statement — alt #0a0a0a */}
      <section className="bg-background-alt py-32 border-t border-white/10">
        <Container>
          <Reveal>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-6">
              Our Purpose
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] max-w-3xl">
              To align perception with reality and create brands that people
              recognise, trust, and connect with
              <span className="text-accent">.</span>
            </h2>
          </Reveal>
        </Container>
      </section>

      {/* Bridge — Capabilities */}
      <section className="py-20 border-t border-white/10">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="max-w-xl text-xl leading-relaxed opacity-80">
                Brand strategy, identity systems, employer branding, digital
                experiences, and brand experiences — five disciplines, one
                connected practice.
              </p>
              <Link
                href="/#capabilities"
                className="shrink-0 text-xs uppercase tracking-widest opacity-40 hover:text-accent hover:opacity-100 transition-all"
              >
                See our capabilities →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Bridge — Work */}
      <section className="bg-background-alt py-20 border-t border-white/10">
        <Container>
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="max-w-xl text-xl leading-relaxed opacity-80">
                From a credit advisory firm to a school wardrobe system to
                event branding for thousands of runners — see how this
                comes to life.
              </p>
              <Link
                href="/work"
                className="shrink-0 text-xs uppercase tracking-widest opacity-40 hover:text-accent hover:opacity-100 transition-all"
              >
                See selected work →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

{/* Contact — alt #0a0a0a */}
<section className="bg-background-alt py-32 border-t border-white/10">
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