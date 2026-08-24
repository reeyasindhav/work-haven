import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Globe, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CITIES, SPACES, REVIEWS, AMENITIES } from "@/lib/data";
import { SpaceCard } from "@/components/SpaceCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const featured = SPACES.slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 lg:px-8 lg:py-36">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow text-primary">Remote work · verified spaces</span>
              <h1 className="display mt-4 text-5xl leading-[1.05] tracking-tight sm:text-7xl">
                Work well, <br />
                <span className="italic">anywhere.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Discover verified cafés and coworking hubs with fast wifi, quiet zones, and
                everything you need to focus. Book a hot desk in seconds.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild className="rounded-full px-7">
                  <Link to="/explore">
                    Explore spaces <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="rounded-full px-7">
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" />
                  Verified spaces
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="size-4 text-primary" />
                  40+ cities
                </span>
                <span className="flex items-center gap-2">
                  <Star className="size-4 fill-clay text-clay" />
                  4.8 average
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <span className="eyebrow text-primary">Cities</span>
              <h2 className="display mt-2 text-3xl sm:text-4xl">Popular spots this month</h2>
            </div>
            <Link
              to="/explore"
              className="hidden text-sm text-primary sm:inline-flex items-center gap-1"
            >
              See all <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <Link
                to="/explore"
                className="group relative overflow-hidden rounded-2xl border bg-card"
              >
                <div className="aspect-[16/10]">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.spaces} spaces</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-sand/60">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow text-primary">Amenities</span>
              <h2 className="display mt-2 text-3xl sm:text-4xl">Built for focus</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Every space is verified for the essentials that matter.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {AMENITIES.map((a, i) => (
              <Reveal key={a} delay={i * 50}>
                <span className="rounded-full border bg-background px-4 py-2 text-sm shadow-soft transition-colors hover:border-primary/60">
                  {a}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <span className="eyebrow text-primary">Featured</span>
              <h2 className="display mt-2 text-3xl sm:text-4xl">Editor's picks</h2>
            </div>
            <Link
              to="/explore"
              className="hidden text-sm text-primary sm:inline-flex items-center gap-1"
            >
              Browse all <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((space, i) => (
            <Reveal key={space.id} delay={i * 100}>
              <SpaceCard space={space} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-sand/60">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow text-primary">Reviews</span>
              <h2 className="display mt-2 text-3xl sm:text-4xl">From the community</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <div className="h-full rounded-2xl border bg-card p-6 shadow-soft">
                  <p className="text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="size-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <span className="eyebrow text-primary">Hosts</span>
                <h2 className="display mt-2 text-3xl sm:text-4xl">List your space</h2>
                <p className="mt-4 text-muted-foreground">
                  Join verified hosts across 40+ cities. Set your schedule, amenities, and pricing —
                  we bring remote workers straight to your door.
                </p>
                <div className="mt-6">
                  <Button size="lg" asChild className="rounded-full px-7">
                    <Link to="/list-your-space">
                      Start listing <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
