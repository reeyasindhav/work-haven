import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Star } from "lucide-react";
import type { Space } from "@/lib/data";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SpaceCard({
  space,
  active,
  onHover,
}: {
  space: Space;
  active?: boolean;
  onHover?: (id: string | null) => void;
}) {
  const { favorites, toggleFavorite } = useStore();
  const saved = favorites.includes(space.id);

  return (
    <article
      onMouseEnter={() => onHover?.(space.id)}
      onMouseLeave={() => onHover?.(null)}
      className={cn(
        "group hover-lift overflow-hidden rounded-2xl border bg-card shadow-soft",
        active ? "border-primary ring-1 ring-primary/40" : "border-border",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link to="/spaces/$spaceId" params={{ spaceId: space.id }}>
          <img
            src={space.images[0]}
            alt={space.name}
            loading="lazy"
            className="animate-image size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <span className="eyebrow absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur">
          {space.type}
        </span>
        <button
          aria-label="Save space"
          onClick={() => toggleFavorite(space.id)}
          className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-background/90 backdrop-blur transition-transform hover:scale-110 active:scale-95"
        >
          <Heart className={cn("size-4", saved && "fill-clay text-clay")} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <Link
            to="/spaces/$spaceId"
            params={{ spaceId: space.id }}
            className="text-base font-semibold hover:text-primary"
          >
            {space.name}
          </Link>
          <span className="flex shrink-0 items-center gap-1 text-sm">
            <Star className="size-3.5 fill-clay text-clay" />
            <strong className="font-semibold">{space.rating}</strong>
            <span className="text-muted-foreground">({space.reviews})</span>
          </span>
        </div>

        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="size-3.5" /> {space.neighborhood}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {space.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <p className="text-sm">
            <strong className="text-lg font-semibold">€{space.price}</strong>
            <span className="text-muted-foreground"> / day</span>
          </p>
          <Button size="sm" asChild className="rounded-full px-4">
            <Link to="/book/$spaceId" params={{ spaceId: space.id }}>
              Book now
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
