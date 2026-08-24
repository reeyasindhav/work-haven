import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/lib/store";
import { getSpace, FOCUS_WEEK, REVIEWS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function Dashboard() {
  const { user, bookings, favorites } = useStore();
  const upcoming = bookings.filter((b) => b.status === "Upcoming").slice(0, 3);
  const saved = favorites
    .slice(0, 3)
    .map((id) => getSpace(id))
    .filter(Boolean);
  const totalFocus = FOCUS_WEEK.reduce((a, b) => a + b.hours, 0);

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-16">
      <Reveal>
        <div className="flex flex-col gap-1">
          <span className="eyebrow text-primary">Dashboard</span>
          <h1 className="display text-3xl sm:text-4xl">
            Hey, {user?.name?.split(" ")[0] || "Nomad"} 👋
          </h1>
          <p className="text-muted-foreground">Here's your week at a glance.</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Upcoming trips", value: upcoming.length.toString(), icon: Calendar },
          { label: "Saved spaces", value: favorites.length.toString(), icon: Star },
          { label: "Hours this week", value: `${totalFocus}h`, icon: TrendingUp },
          { label: "Current plan", value: user?.plan || "Explorer", icon: MapPin },
        ].map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="rounded-2xl border bg-card p-5 shadow-soft">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <stat.icon className="size-4 text-primary" />
                {stat.label}
              </span>
              <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Upcoming bookings
              </h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/bookings">View all</Link>
              </Button>
            </div>
            <div className="mt-4 space-y-3">
              {upcoming.length === 0 && (
                <p className="text-sm text-muted-foreground">No upcoming bookings.</p>
              )}
              {upcoming.map((b) => {
                const space = getSpace(b.spaceId);
                if (!space) return null;
                return (
                  <Link
                    key={b.id}
                    to="/spaces/$spaceId"
                    params={{ spaceId: space.id }}
                    className="flex items-center justify-between rounded-xl border p-3 transition-colors hover:bg-secondary"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={space.images[0]}
                        alt=""
                        className="size-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold">{space.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {b.date} · {b.slot}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">{b.status}</Badge>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Saved spaces
              </h2>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/favorites">View all</Link>
              </Button>
            </div>
            <div className="mt-4 space-y-3">
              {saved.length === 0 && (
                <p className="text-sm text-muted-foreground">No saved spaces yet.</p>
              )}
              {saved.map((space) => (
                <Link
                  key={space!.id}
                  to="/spaces/$spaceId"
                  params={{ spaceId: space!.id }}
                  className="flex items-center justify-between rounded-xl border p-3 transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={space!.images[0]}
                      alt=""
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{space!.name}</p>
                      <p className="text-xs text-muted-foreground">{space!.neighborhood}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">€{space!.price}/day</span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Community reviews
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-xl border p-4">
                <p className="text-sm text-muted-foreground">“{r.text}”</p>
                <div className="mt-3 flex items-center gap-2">
                  <img src={r.avatar} alt={r.name} className="size-8 rounded-full object-cover" />
                  <span className="text-sm font-medium">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
