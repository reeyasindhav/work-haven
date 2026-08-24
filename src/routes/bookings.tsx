import { Link, createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, MoreVertical, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStore } from "@/lib/store";
import { getSpace } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/bookings")({ component: Bookings });

function Bookings() {
  const { bookings, cancelBooking } = useStore();

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-16">
      <Reveal>
        <div>
          <span className="eyebrow text-primary">My bookings</span>
          <h1 className="display mt-2 text-3xl sm:text-4xl">Your reservations</h1>
          <p className="mt-1 text-muted-foreground">
            Manage upcoming, completed, and cancelled stays.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4">
        {bookings.map((b, i) => {
          const space = getSpace(b.spaceId);
          if (!space) return null;
          return (
            <Reveal key={b.id} delay={i * 60}>
              <div className="flex flex-col gap-4 rounded-2xl border bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <img src={space.images[0]} alt="" className="size-16 rounded-xl object-cover" />
                  <div>
                    <Link
                      to="/spaces/$spaceId"
                      params={{ spaceId: space.id }}
                      className="text-base font-semibold hover:text-primary"
                    >
                      {space.name}
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" /> {b.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" /> {space.neighborhood}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {b.slot} · {b.seats} seat{b.seats > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-right">
                    <p className="text-sm font-semibold">€{b.total}</p>
                    <Badge
                      variant={
                        b.status === "Upcoming"
                          ? "default"
                          : b.status === "Completed"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {b.status}
                    </Badge>
                  </div>
                  {b.status === "Upcoming" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => cancelBooking(b.id)}>
                          Cancel booking
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {bookings.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed p-12 text-center">
          <p className="text-sm text-muted-foreground">No bookings yet.</p>
          <Button asChild className="mt-4 rounded-full">
            <Link to="/explore">Explore spaces</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
