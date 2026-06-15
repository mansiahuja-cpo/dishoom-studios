import Container from "@/components/Container";
import ProjectList from "@/components/ProjectList";

export default function Work() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="mb-16 text-5xl md:text-7xl font-medium">
          Selected Work
        </h1>

        <ProjectList />
      </Container>
    </main>
  );
}