import Container from "@/components/Container";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center py-24">
        <Container>
          <h1 className="max-w-5xl text-5xl md:text-7xl font-medium leading-tight">
            Building distinctive brands and experiences through strategy,
            design and storytelling.
          </h1>

          <p className="mt-12 text-sm uppercase tracking-widest">
            Selected Work ↓
          </p>
        </Container>
      </section>

      {/* Selected Work */}
      <section className="py-32 border-t">
        <Container>
          <h2 className="text-3xl font-medium mb-12">Selected Work</h2>

          <div className="space-y-6">
            <p>A One Advisory</p>
            <p>Goa Ironman</p>
            <p>Harvest School</p>
            <p>Tata Steel Marathon</p>
            <p>Trail O Thon</p>
            <p>CNG Cycling Jersey</p>
          </div>
        </Container>
      </section>

      {/* Studio */}
      <section className="py-32 border-t">
        <Container>
          <h2 className="text-3xl font-medium mb-8">Studio</h2>

          <p className="max-w-3xl text-xl leading-relaxed">
            Dishoom Studios creates brands, digital experiences and apparel
            systems that help organisations stand apart.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="py-32 border-t">
        <Container>
          <h2 className="text-3xl font-medium mb-12">Services</h2>

          <div className="space-y-4 text-xl">
            <p>Brand Strategy</p>
            <p>Identity Design</p>
            <p>Web Design</p>
            <p>Employer Branding</p>
            <p>Apparel & Merchandise</p>
          </div>
        </Container>
      </section>

      {/* Featured Case Study */}
      <section className="py-32 border-t">
        <Container>
          <h2 className="text-3xl font-medium mb-12">
            Featured Case Study
          </h2>

          <h3 className="text-4xl font-medium mb-4">
            A One Advisory
          </h3>

          <p className="max-w-2xl text-xl mb-8">
            Strategic brand refresh for a credit rating advisory firm.
          </p>

          <button className="border px-6 py-3">
            View Case Study →
          </button>
        </Container>
      </section>

      {/* Insights */}
      <section className="py-32 border-t">
        <Container>
          <h2 className="text-3xl font-medium mb-12">
            Latest Thinking
          </h2>

          <div className="space-y-6">
            <p>Why strong brands outperform strong marketing.</p>
            <p>Designing for trust in financial services.</p>
            <p>What makes a memorable event identity.</p>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-32 border-t">
        <Container>
          <h2 className="text-5xl font-medium mb-6">
            Have a project in mind?
          </h2>

          <p className="text-xl">
            Let's talk.
          </p>
        </Container>
      </section>
    </main>
  );
}