import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="py-24">
      <Container>
        <Reveal>
          <div className="mb-20">
            <p className="text-xs uppercase tracking-widest opacity-40 mb-4">
              Contact
            </p>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8">
              Have a project<br />in mind<span className="text-accent">?</span>
            </h1>
            <p className="max-w-xl text-base opacity-50 leading-relaxed">
              Tell us a little about what you&apos;re working on. We read
              every message and reply directly — no forms within forms,
              no sales funnel.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
                Or, directly
              </p>
              <a
                href="mailto:hello@dishoomstudio.com"
                className="text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all"
              >
                hello@dishoomstudio.com
              </a>
            </div>

            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
