import { useState } from "react";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Leaf, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/settings")({ component: Settings });

function Settings() {
  const { user, logout, bookings, favorites } = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      logout();
      navigate({ to: "/login" });
    }
  };

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-xl">
        <div className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Leaf className="size-5" />
          </span>
          <span className="display text-2xl">treehouse</span>
        </div>
        <h1 className="display mt-6 text-3xl">Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your account and preferences.</p>

        <form onSubmit={handleSave} className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium">Display name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Plan</label>
            <p className="mt-1 rounded-xl border bg-card px-4 py-3 text-sm">
              {user?.plan || "Explorer"}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="submit" className="rounded-full">
              Save changes
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                logout();
                navigate({ to: "/" });
              }}
              className="rounded-full"
            >
              <Trash2 className="mr-2 size-4" /> Log out
            </Button>
          </div>
        </form>

        <div className="mt-10 rounded-2xl border bg-card p-5 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Stats
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Bookings</p>
              <p className="mt-1 text-xl font-semibold">{bookings.length}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Saved spaces</p>
              <p className="mt-1 text-xl font-semibold">{favorites.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
