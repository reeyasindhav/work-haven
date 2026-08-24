import { useState } from "react";
import { Link, createFileRoute, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSpace, SLOTS } from "@/lib/data";
import { useStore } from "@/lib/store";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book/$spaceId")({ component: BookSpace });

function BookSpace() {
  const { spaceId } = useParams({ from: "/book/$spaceId" });
  const space = getSpace(spaceId);
  const { addBooking, user } = useStore();
  const navigate = useNavigate();
  const [slotId, setSlotId] = useState(SLOTS[0]!.id);
  const [seats, setSeats] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  if (!spaceId || !space) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center lg:px-8">
        <h1 className="display text-4xl">Space not found</h1>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/explore">Back to explore</Link>
        </Button>
      </div>
    );
  }

  const slot = SLOTS.find((s) => s.id === slotId)!;
  const total = Math.round(space.price * slot.factor * seats);

  if (!user) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center lg:px-8">
        <h1 className="display text-3xl">Log in to book</h1>
        <p className="mt-2 text-muted-foreground">
          Create an account or log in to reserve this space.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full">
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="secondary" asChild className="rounded-full">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center lg:px-8">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h1 className="display mt-4 text-3xl">Booking confirmed</h1>
        <p className="mt-2 text-muted-foreground">
          You're all set. We've sent the details to your email.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full">
            <Link to="/bookings">My bookings</Link>
          </Button>
          <Button variant="secondary" asChild className="rounded-full">
            <Link to="/explore">Explore more</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking({
      id: `TH-${Math.floor(1000 + Math.random() * 9000)}`,
      spaceId: space.id,
      date: new Date().toISOString().split("T")[0] as string,
      slot: `${slot.label} · ${slot.time}`,
      seats,
      total,
      status: "Upcoming",
    });
    setConfirmed(true);
  };

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/spaces/$spaceId"
          params={{ spaceId: space.id }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to space
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-soft">
          <div className="flex flex-col sm:flex-row">
            <img
              src={space.images[0]}
              alt=""
              className="aspect-video w-full object-cover sm:aspect-auto sm:w-64"
            />
            <div className="p-6">
              <Badge className="mb-2">{space.type}</Badge>
              <h1 className="display text-2xl">{space.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {space.neighborhood} · {space.city}
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <CreditCard className="size-4 text-primary" />
                  <strong>€{space.price}</strong> / day
                </span>
                <span className="text-muted-foreground">{space.openHours}</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Select slot
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {SLOTS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSlotId(s.id)}
                  className={cn(
                    "rounded-xl border p-4 text-left transition-colors",
                    slotId === s.id
                      ? "border-primary bg-secondary"
                      : "border-border hover:border-primary/60",
                  )}
                >
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.time}</p>
                  <p className="mt-1 text-xs font-medium text-primary">
                    €{Math.round(space.price * s.factor)}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Guests
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setSeats((n) => Math.max(1, n - 1))}
              >
                -
              </Button>
              <span className="text-lg font-semibold">{seats}</span>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setSeats((n) => Math.min(space.seats, n + 1))}
              >
                +
              </Button>
              <span className="text-sm text-muted-foreground">/ {space.seats} available</span>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Summary
            </h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Slot</span>
                <span className="font-medium">
                  {slot.label} · {slot.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Seats</span>
                <span className="font-medium">{seats}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="text-lg font-semibold">€{total}</span>
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full">
            Confirm booking · €{total}
          </Button>
        </form>
      </div>
    </div>
  );
}
