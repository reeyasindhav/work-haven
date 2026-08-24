import { Link, createFileRoute, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Star,
  Wifi,
  Volume2,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSpace, SPACES } from "@/lib/data";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SpaceCard } from "@/components/SpaceCard";

export const Route = createFileRoute("/spaces/$spaceId")({ component: SpaceDetail });

function SpaceDetail() {
  const { spaceId } = useParams({ from: "/spaces/$spaceId" });
  const space = getSpace(spaceId);
  const { favorites, toggleFavorite } = useStore();
  const [activeImg, setActiveImg] = useState(0);
  const saved = favorites.includes(spaceId);

  if (!space) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center lg:px-8">
        <h1 className="display text-4xl">Space not found</h1>
        <p className="mt-2 text-muted-foreground">This spot might have been delisted.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/explore">Back to explore</Link>
        </Button>
      </div>
    );
  }

  const related = SPACES.filter((s) => s.city === space.city && s.id !== space.id).slice(0, 5);

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pt-6 lg:px-8">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to explore
        </Link>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_380px]">
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl sm:col-span-2">
                <img
                  src={space.images[activeImg]}
                  alt={space.name}
                  className="size-full object-cover"
                />
              </div>
              {space.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "aspect-[4/3] overflow-hidden rounded-xl border-2 transition-colors",
                    activeImg === i ? "border-primary" : "border-transparent",
                  )}
                >
                  <img src={img} alt="" className="size-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Badge className="mb-2">{space.type}</Badge>
                  <h1 className="display text-3xl sm:text-4xl">{space.name}</h1>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="size-4" /> {space.neighborhood} · {space.city}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="secondary" size="icon" onClick={() => toggleFavorite(space.id)}>
                    <Heart className={cn("size-5", saved && "fill-clay text-clay")} />
                  </Button>
                  <Button asChild className="rounded-full px-6">
                    <Link to="/book/$spaceId" params={{ spaceId: space.id }}>
                      Book now
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft">
                  <Star className="size-4 fill-clay text-clay" />
                  <strong>{space.rating}</strong>
                  <span className="text-muted-foreground">({space.reviews} reviews)</span>
                </span>
                <span className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft">
                  <Wifi className="size-4 text-primary" /> {space.wifiMbps} Mbps
                </span>
                <span className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft">
                  <Volume2 className="size-4 text-primary" /> {space.noise}
                </span>
                <span className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft">
                  <Users className="size-4 text-primary" /> {space.seats} seats
                </span>
                <span className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft">
                  <Clock className="size-4 text-primary" /> {space.openHours}
                </span>
              </div>

              <p className="mt-6 leading-relaxed text-muted-foreground">{space.description}</p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Amenities
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {space.amenities.map((a) => (
                    <Badge key={a} variant="secondary">
                      {a}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Price per day</p>
                    <p className="text-3xl font-semibold">€{space.price}</p>
                  </div>
                  <Button asChild size="lg" className="rounded-full px-6">
                    <Link to="/book/$spaceId" params={{ spaceId: space.id }}>
                      Book now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Verified host</p>
                  <p className="text-xs text-muted-foreground">{space.host}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-5 shadow-soft">
              <p className="text-sm font-semibold">Hours</p>
              <p className="mt-1 text-sm text-muted-foreground">{space.openHours}</p>
            </div>
            <div className="rounded-2xl border bg-card p-5 shadow-soft">
              <p className="text-sm font-semibold">Location</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {space.neighborhood}, {space.city}
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="display text-2xl">More in {space.city}</h2>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.id} delay={i * 100}>
                  <SpaceCard space={s} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
