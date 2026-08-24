import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Search",
    description: "Browse cafés, coworking hubs, and hidden spots by city, amenity, or noise level.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Filter",
    description: "Narrow by fast wifi, power outlets, quiet zones, outdoor seating, and more.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Book",
    description: "Pick a time slot, confirm your hot desk, and get instant access details.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Work",
    description: "Arrive, connect, and focus. Leave reviews to help the next nomad.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
  },
];

export const Route = createFileRoute("/how-it-works")({ component: HowItWorks });

function HowItWorks() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="text-center">
          <span className="eyebrow text-primary">How it works</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">From search to seat in seconds</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Treehouse removes the friction between finding a great spot and sitting down to work.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 100}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft">
              <div className="aspect-[4/3]">
                <img src={step.image} alt={step.title} className="size-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 rounded-2xl border bg-card p-8 shadow-soft sm:p-12">
          <h2 className="display text-2xl sm:text-3xl">Trusted by remote teams</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Verified wifi speeds for every space",
              "Real-time availability and instant booking",
              "No hidden fees — pay per day or per hour",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/explore">
                Start exploring <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
