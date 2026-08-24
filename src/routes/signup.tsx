import { useState } from "react";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/signup")({ component: Signup });

function Signup() {
  const { login, user } = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (user) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center lg:px-8">
        <Leaf className="mx-auto size-12 text-primary" />
        <h1 className="display mt-4 text-3xl">You're already signed up</h1>
        <p className="mt-2 text-muted-foreground">Go to your dashboard to get started.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/dashboard">Dashboard</Link>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    login(email, name);
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="size-5" />
            </span>
            <span className="display text-2xl">treehouse</span>
          </Link>
          <h1 className="display mt-6 text-3xl">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Join remote workers finding great spaces worldwide.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium">Full name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ada Lovelace"
              className="mt-1.5"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1.5"
            />
          </div>
          <Button type="submit" className="w-full rounded-full">
            Get started
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
