import Container from "@/components/Container";
import ProjectList from "@/components/ProjectList";

export default function WorkPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-wider opacity-60 mb-4">
            Work
          </p>

          <h1 className="text-5xl md:text-7xl font-medium mb-6">
            Selected Work
          </h1>

          <p className="text-xl opacity-80">
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