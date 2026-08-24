import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPanel } from "@/components/MapPanel";
import { SpaceCard } from "@/components/SpaceCard";
import { SPACES, AMENITIES, CITIES, type Amenity } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/explore")({ component: Explore });

function Explore() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = SPACES.filter((s) => {
    const matchesQuery =
      !query ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.neighborhood.toLowerCase().includes(query.toLowerCase()) ||
      s.city.toLowerCase().includes(query.toLowerCase());
    const matchesAmenity = !selectedAmenity || s.amenities.includes(selectedAmenity as Amenity);
    const matchesCity = !selectedCity || s.city === selectedCity;
    return matchesQuery && matchesAmenity && matchesCity;
  });

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <div className="mx-auto max-w-[1400px] px-5 py-8 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="display text-3xl sm:text-4xl">Explore spaces</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {filtered.length} space{filtered.length === 1 ? "" : "s"} available
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search name, neighborhood..."
                  className="w-64 rounded-full pl-9"
                />
              </div>
              <Button
                variant="secondary"
                size="icon"
                className="lg:hidden"
                onClick={() => setShowFilters((o) => !o)}
              >
                <SlidersHorizontal className="size-4" />
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {AMENITIES.map((a) => (
              <button
                key={a}
                onClick={() => setSelectedAmenity((prev) => (prev === a ? null : a))}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition-colors",
                  selectedAmenity === a
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:border-primary/60",
                )}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedCity((prev) => (prev === c.name ? null : c.name))}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition-colors",
                  selectedCity === c.name
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:border-primary/60",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>

          {(selectedAmenity || selectedCity) && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Active filters:</span>
              {selectedAmenity && (
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs">
                  {selectedAmenity}
                  <button onClick={() => setSelectedAmenity(null)}>
                    <X className="size-3" />
                  </button>
                </span>
              )}
              {selectedCity && (
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs">
                  {selectedCity}
                  <button onClick={() => setSelectedCity(null)}>
                    <X className="size-3" />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedAmenity(null);
                  setSelectedCity(null);
                }}
                className="text-xs text-primary"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        <div className="mx-auto max-w-[1400px] px-5 pb-16 lg:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed p-12 text-center">
              <p className="text-sm text-muted-foreground">
                No spaces match your filters. Try adjusting.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((space, i) => (
                <SpaceCard
                  key={space.id}
                  space={space}
                  active={activeId === space.id}
                  onHover={setActiveId}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:block lg:w-[420px] xl:w-[480px]">
        <div className="sticky top-16 h-[calc(100vh-4rem)]">
          <MapPanel
            spaces={filtered}
            activeId={activeId}
            onSelect={setActiveId}
            className="h-full rounded-none border-l"
          />
        </div>
      </div>
    </div>
  );
}
