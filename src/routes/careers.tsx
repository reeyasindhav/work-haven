import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Globe2, Rocket, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/careers")({ component: Careers });

const values = [
  {
    icon: Globe2,
    title: "Remote-first",
    text: "Work from anywhere. We hire globally and support async collaboration.",
  },
  {
    icon: Rocket,
    title: "Move fast",
    text: "Small teams, big impact. We ship quickly and learn from real users.",
  },
  {
    icon: Heart,
    title: "Community minded",
    text: "We build for the people who use our product. Empathy comes first.",
  },
  {
    icon: Zap,
    title: "Sustainable pace",
    text: "No hustle culture. We protect deep work time and respect boundaries.",
  },
];

const openings = [
  {
    title: "Senior Frontend Engineer",
    location: "Remote · Europe",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    location: "Remote · Americas",
    type: "Full-time",
  },
  {
    title: "Growth Marketing Lead",
    location: "Remote · APAC",
    type: "Full-time",
  },
  {
    title: "Host Success Manager",
    location: "Lisbon, Portugal",
    type: "Full-time",
  },
];

function Careers() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 lg:px-8 lg:py-36">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow text-primary">Careers</span>
              <h1 className="display mt-4 text-5xl leading-[1.05] tracking-tight sm:text-7xl">
                Build the future of <span className="italic">remote work.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Join a small, global team helping remote workers find great places to work. We're
                remote-first, async-friendly, and focused on sustainable impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <a href="#openings">
                    View openings <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild className="rounded-full px-7">
                  <Link to="/about">About Treehouse</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow text-primary">How we work</span>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Our values</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              The principles that shape how we build, hire, and collaborate.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border bg-card p-5 shadow-soft">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="openings" className="border-t border-border bg-sand/60">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow text-primary">Openings</span>
              <h2 className="display mt-2 text-3xl sm:text-4xl">Current positions</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We're hiring across engineering, product, marketing, and host success.
              </p>
            </div>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 80}>
                <div className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{job.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Button asChild className="rounded-full">
                      <Link to="/contact">Apply</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="rounded-2xl border bg-card p-8 shadow-soft sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <span className="eyebrow text-primary">Benefits</span>
                <h2 className="display mt-2 text-3xl sm:text-4xl">What we offer</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We focus on what matters: meaningful work, autonomy, and a sustainable pace. Most
                  benefits are global, and we adapt to local needs.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Competitive global salary",
                  "Unlimited PTO policy",
                  "Home office stipend",
                  "Coworking allowance",
                  "Health and wellness support",
                  "Learning and conference budget",
                  "Async-first work culture",
                  "Annual team retreat",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <Users className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display text-3xl sm:text-4xl">Don't see a fit?</h2>
              <p className="mt-3 text-muted-foreground">
                We're always open to meeting talented people. Send us your details and we'll reach
                out when there's a match.
              </p>
              <div className="mt-6">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
