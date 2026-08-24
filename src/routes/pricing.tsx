import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({ component: Pricing });

const plans = [
  {
    name: "Explorer",
    price: "Free",
    description: "For occasional remote workers.",
    features: ["Browse all spaces", "Save favorites", "Basic filtering"],
    cta: "Create account",
    to: "/signup",
  },
  {
    name: "Nomad",
    price: "€9",
    period: "/month",
    description: "For regular travelers.",
    features: ["Priority booking", "Advanced filters", "Price alerts", "Offline map"],
    cta: "Start trial",
    to: "/signup",
    highlight: true,
  },
  {
    name: "Team",
    price: "€29",
    period: "/month",
    description: "For distributed teams.",
    features: ["Team bookings", "Admin controls", "Usage reports", "Dedicated support"],
    cta: "Contact sales",
    to: "/list-your-space",
  },
];

function Pricing() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="text-center">
          <span className="eyebrow text-primary">Pricing</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Simple, transparent plans</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start for free, upgrade when you need more power.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 100}>
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft",
                plan.highlight && "border-primary",
              )}
            >
              {plan.highlight && <Badge className="w-fit">Most popular</Badge>}
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 rounded-full"
                variant={plan.highlight ? "default" : "secondary"}
              >
                <Link to={plan.to}>{plan.cta}</Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 rounded-2xl border bg-card p-8 shadow-soft sm:p-12">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Zap className="size-5 text-primary" />
                <h2 className="display text-2xl sm:text-3xl">Need something custom?</h2>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Corporate accounts, bulk bookings, and bespoke integrations.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/list-your-space">Talk to us</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
