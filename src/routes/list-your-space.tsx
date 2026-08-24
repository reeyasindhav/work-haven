import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, CalendarClock, DollarSign, Globe2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/list-your-space")({ component: ListYourSpace });

function ListYourSpace() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="eyebrow text-primary">Hosts</span>
            <h1 className="display mt-2 text-4xl sm:text-5xl">List your space</h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Turn your café, studio, or coworking floor into a booked-out destination for remote
              workers. We handle discovery, payments, and guest support.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Globe2,
                  title: "Global exposure",
                  text: "Appear in search results across 40+ cities and thousands of bookings.",
                },
                {
                  icon: CalendarClock,
                  title: "Flexible scheduling",
                  text: "Open slots when you want. Block holidays, mornings, or full days.",
                },
                {
                  icon: DollarSign,
                  title: "Simple pricing",
                  text: "Set your own daily rate. Transparent fees, weekly payouts.",
                },
                {
                  icon: Users,
                  title: "Verified guests",
                  text: "Every guest is verified before booking, with 24/7 support on both sides.",
                },
                {
                  icon: Building2,
                  title: "Easy onboarding",
                  text: "Add photos, amenities, and rules in under 10 minutes.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild className="rounded-full px-7">
                <Link to="/pricing">
                  See host plans <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="rounded-full px-7">
                <Link to="/explore">Browse as guest</Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border bg-card shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Host earnings snapshot</h3>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Avg. monthly</p>
                  <p className="mt-1 text-xl font-semibold">€2,480</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Occupancy</p>
                  <p className="mt-1 text-xl font-semibold">68%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="mt-1 text-xl font-semibold">4.8 ★</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
