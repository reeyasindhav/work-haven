import { Link, createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { REVIEWS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reviews")({ component: Reviews });

function Reviews() {
  const avg = (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-primary">Reviews</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">From the community</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Real stories from remote workers who booked through Treehouse.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft">
            <Star className="size-4 fill-clay text-clay" />
            <strong>{avg}</strong>
            <span className="text-muted-foreground">· {REVIEWS.length} reviews</span>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 max-w-5xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name + r.date} delay={i * 80}>
            <div className="flex h-full flex-col rounded-2xl border bg-card p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="size-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
                <Badge variant="secondary">{r.space}</Badge>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{r.text}”
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={cn(
                        "size-4",
                        idx < r.rating ? "fill-clay text-clay" : "text-muted-foreground",
                      )}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(r.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-8 text-center shadow-soft sm:p-12">
          <h2 className="display text-2xl sm:text-3xl">Share your experience</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Booked a space through Treehouse? We'd love to hear how it went.
          </p>
          <div className="mt-6">
            <Button asChild className="rounded-full px-7">
              <Link to="/explore">Explore spaces</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
