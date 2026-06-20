import Container from "@/components/Container";
import ProjectList from "@/components/ProjectList";
import Reveal from "@/components/Reveal";


export default function WorkPage() {
  return (
    <main className="py-24">
      <Container>
        <Reveal>
          <div className="mb-20">
            <p className="text-xs uppercase tracking-widest opacity-40 mb-4">
              Work
            </p>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8">
              Selected Work.
            </h1>
            <p className="max-w-xl text-base opacity-50 leading-relaxed">
              A selection of branding, apparel, and experience design
              projects built across industries, communities, and
              organizations.
            </p>
          </div>
        </Reveal>

        <ProjectList />
      </Container>
    </main>
  );
}