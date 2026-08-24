import { Link, createFileRoute } from "@tanstack/react-router";
import { HeartOff, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import { getSpace } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/favorites")({ component: Favorites });

function Favorites() {
  const { favorites } = useStore();
  const saved = favorites.map((id) => getSpace(id)).filter(Boolean);

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-16">
      <Reveal>
        <div>
          <span className="eyebrow text-primary">Saved spaces</span>
          <h1 className="display mt-2 text-3xl sm:text-4xl">Your favorites</h1>
          <p className="mt-1 text-muted-foreground">Spaces you've saved for later.</p>
        </div>
      </Reveal>

      {saved.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed p-12 text-center">
          <HeartOff className="mx-auto size-8 text-muted-foreground" />
          <p className="mt-2 text-sm text-muted-foreground">No saved spaces yet.</p>
          <Button asChild className="mt-4 rounded-full">
            <Link to="/explore">Explore spaces</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((space, i) => (
            <Reveal key={space!.id} delay={i * 80}>
              <div className="overflow-hidden rounded-2xl border bg-card shadow-soft">
                <Link to="/spaces/$spaceId" params={{ spaceId: space!.id }}>
                  <img
                    src={space!.images[0]}
                    alt={space!.name}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </Link>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      to="/spaces/$spaceId"
                      params={{ spaceId: space!.id }}
                      className="text-base font-semibold hover:text-primary"
                    >
                      {space!.name}
                    </Link>
                    <span className="flex shrink-0 items-center gap-1 text-sm">
                      <Star className="size-3.5 fill-clay text-clay" />
                      <strong className="font-semibold">{space!.rating}</strong>
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{space!.neighborhood}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm">
                      <strong className="text-lg font-semibold">€{space!.price}</strong>
                      <span className="text-muted-foreground"> / day</span>
                    </p>
                    <Button size="sm" asChild className="rounded-full px-4">
                      <Link to="/book/$spaceId" params={{ spaceId: space!.id }}>
                        Book now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
