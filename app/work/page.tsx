import Container from "@/components/Container";
import ProjectList from "@/components/ProjectList";

export default function WorkPage() {
  return (
    <main className="py-24">
      <Container>
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

        <ProjectList />
      </Container>
    </main>
  );
}