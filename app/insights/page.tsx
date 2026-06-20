import Container from "@/components/Container";
import InsightsList from "@/components/InsightsList";

export default function InsightsPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-4">
            Insights
          </p>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8">
            Latest Thinking.
          </h1>
          <p className="max-w-xl text-base opacity-50 leading-relaxed">
            Perspectives on brand strategy, identity systems, and the work
            of building organisations people recognise, trust, and connect
            with.
          </p>
        </div>

        <InsightsList />
      </Container>
    </main>
  );
}
