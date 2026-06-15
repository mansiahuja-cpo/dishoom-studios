import Container from "@/components/Container";
import Link from "next/link";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <main>
{/* Hero */}
      <section className="min-h-[90vh] flex items-end pb-24 pt-32">
        <Container>
          <h1 className="text-[18vw] font-medium leading-[0.9] tracking-tight">
            Dishoom<br />Studios.
          </h1>
          <p className="mt-8 max-w-xl text-base opacity-50 leading-relaxed">
            Building distinctive brands and experiences through strategy,
            design and storytelling.
          </p>
        </Container>
      </section>
      

      {/* Selected Work */}
      <section className="py-32 border-t border-white/10">
        <Container>
          <div className="flex items-end justify-between mb-3">
            <p className="text-xs uppercase tracking-widest opacity-40">
              Selected Work
            </p>
            <Link
              href="/work"
              className="text-xs opacity-40 hover:opacity-100 transition-opacity"
            >
              View all →
            </Link>
          </div>
          <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-16">
            Work.
          </h2>
        </Container>

        <FeaturedWork />
      </section>

      {/* Studio */}
      <section className="py-32 border-t border-white/10">
        <Container>
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
            Studio
          </p>
          <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-16">
            Who we are.
          </h2>

          <p className="max-w-2xl text-xl leading-relaxed opacity-80">
            Dishoom Studios creates brands, digital experiences and apparel
            systems that help organisations stand apart.
          </p>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-32 border-t border-white/10">
        <Container>
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
            Capabilities
          </p>
          <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-16">
            What we do.
          </h2>

          <div className="space-y-4 text-2xl opacity-80">
            <p>Brand Strategy</p>
            <p>Identity Systems</p>
            <p>Employer Branding</p>
            <p>Digital Experiences</p>
            <p>Apparel & Merchandise Design</p>
          </div>
        </Container>
      </section>

      {/* Featured Case Study */}
      <section className="py-32 border-t border-white/10">
        <Container>
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
            Featured Case Study
          </p>
          <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-6">
            A One Advisory.
          </h2>

          <p className="max-w-2xl text-xl opacity-60 mb-12">
            Strategic brand refresh for a credit rating advisory firm.
          </p>

          <Link
            href="/work/a-one-advisory"
            className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
          >
            View Case Study →
          </Link>
        </Container>
      </section>

      {/* Insights */}
      <section className="py-32 border-t border-white/10">
        <Container>
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
            Insights
          </p>
          <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-16">
            Latest Thinking.
          </h2>

          <div className="space-y-8">
            <p className="text-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              Why strong brands outperform strong marketing.
            </p>
            <p className="text-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              Designing for trust in financial services.
            </p>
            <p className="text-xl opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              What makes a memorable event identity.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-32 border-t border-white/10">
        <Container>
          <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
            Contact
          </p>
          <h2 className="text-6xl md:text-[8vw] font-medium tracking-tight leading-[1] mb-12">
            Have a project in mind?
          </h2>

          <Link
            href="/contact"
            className="text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
          >
            Let's talk →
          </Link>
        </Container>
      </section>
    </main>
  );
}