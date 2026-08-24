import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Globe2, Heart, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({ component: About });

function About() {
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
              <span className="eyebrow text-primary">About Treehouse</span>
              <h1 className="display mt-4 text-5xl leading-[1.05] tracking-tight sm:text-7xl">
                We help remote workers <span className="italic">find their flow.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Treehouse is a curated platform for discovering and booking work-friendly spaces
                around the world. We believe great work starts with the right environment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe2,
                title: "Global reach",
                text: "40+ cities across Europe, Asia, and the Americas.",
              },
              {
                icon: ShieldCheck,
                title: "Verified spaces",
                text: "Every listing is checked for wifi, noise level, and amenities.",
              },
              {
                icon: Heart,
                title: "Community first",
                text: "Built by remote workers, for remote workers.",
              },
              {
                icon: Users,
                title: "Trusted hosts",
                text: "Professional hosts with transparent pricing and real availability.",
              },
            ].map((item, i) => (
              <div key={item.title} className="rounded-2xl border bg-card p-6 shadow-soft">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-sand/60">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <span className="eyebrow text-primary">Our mission</span>
                <h2 className="display mt-2 text-3xl sm:text-4xl">Make remote work feel local</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Remote work gives us freedom, but it also gives us uncertainty. Treehouse removes
                  that uncertainty by creating a trusted, transparent marketplace for work spaces.
                  Whether you need a quiet desk for deep focus, a café with fast wifi, or a full-day
                  coworking pass, we help you find it fast and book it instantly.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We started in Lisbon and now work with hosts across Berlin, Barcelona, Bali,
                  Mexico City, Tokyo, and more. Every space is personally verified for the amenities
                  that actually matter to working professionals.
                </p>
                <div className="mt-6">
                  <Button asChild size="lg" className="rounded-full px-7">
                    <Link to="/explore">
                      Explore spaces <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border bg-card shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <p className="text-sm italic text-muted-foreground">
                    "Treehouse is the fastest way to find a space that actually works for deep
                    focus."
                  </p>
                  <p className="mt-3 text-sm font-semibold">
                    — Sofia M., Freelance writer · Mexico City
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow text-primary">Join us</span>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Ready to find your next desk?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Create a free account and start exploring verified spaces today.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/signup">Get started</Link>
              </Button>
              <Button variant="secondary" asChild size="lg" className="rounded-full px-7">
                <Link to="/explore">Browse spaces</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
