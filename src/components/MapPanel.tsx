import { Link } from "@tanstack/react-router";
import { Crosshair, Star } from "lucide-react";
import type { Space } from "@/lib/data";
import { cn } from "@/lib/utils";

export function MapPanel({
  spaces,
  activeId,
  onSelect,
  className,
}: {
  spaces: Space[];
  activeId?: string | null;
  onSelect?: (id: string | null) => void;
  className?: string;
}) {
  const active = spaces.find((s) => s.id === activeId);

  return (
    <div className={cn("relative overflow-hidden bg-accent/60 grid-paper", className)}>
      {/* stylised streets */}
      <svg className="absolute inset-0 size-full opacity-70" aria-hidden>
        {[...Array(9)].map((_, i) => (
          <line
            key={`d${i}`}
            x1={-200 + i * 140}
            y1={0}
            x2={100 + i * 140}
            y2={1200}
            stroke="oklch(0.34 0.079 154 / 10%)"
            strokeWidth={i % 3 === 0 ? 14 : 6}
          />
        ))}
        {[...Array(7)].map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={80 + i * 170}
            x2={1400}
            y2={-40 + i * 170}
            stroke="oklch(0.34 0.079 154 / 8%)"
            strokeWidth={i % 2 === 0 ? 10 : 5}
          />
        ))}
      </svg>

      <button className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft transition-transform hover:scale-[1.03]">
        <Crosshair className="size-4" /> Re-center
      </button>

      {spaces.map((s, i) => (
        <button
          key={s.id}
          onClick={() => onSelect?.(s.id === activeId ? null : s.id)}
          style={{ left: `${s.mx}%`, top: `${s.my}%`, animationDelay: `${i * 60}ms` }}
          className={cn(
            "animate-scale-in absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-sm font-semibold shadow-soft transition-all duration-300 hover:scale-110",
            s.id === activeId
              ? "z-20 scale-110 bg-primary text-primary-foreground animate-pulse-dot"
              : "bg-card text-foreground",
          )}
        >
          €{s.price}
        </button>
      ))}

      {active && (
        <Link
          to="/spaces/$spaceId"
          params={{ spaceId: active.id }}
          className="animate-fade-up absolute bottom-16 left-1/2 z-30 flex w-[min(320px,88%)] -translate-x-1/2 gap-3 rounded-2xl border border-border bg-card p-3 shadow-lift"
        >
          <img src={active.images[0]} alt="" className="size-20 shrink-0 rounded-xl object-cover" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{active.name}</p>
            <p className="text-xs text-muted-foreground">{active.neighborhood}</p>
            <p className="mt-1 flex items-center gap-1 text-xs">
              <Star className="size-3 fill-clay text-clay" /> {active.rating} · €{active.price}/day
            </p>
          </div>
        </Link>
      )}

      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm shadow-soft">
        <span className="size-2 rounded-full bg-clay" />
        {spaces.length} spaces available today
      </div>
    </div>
  );
}
