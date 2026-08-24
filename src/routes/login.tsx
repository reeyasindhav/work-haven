import { useState } from "react";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { Leaf, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { login, user } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  if (user) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center lg:px-8">
        <Leaf className="mx-auto size-12 text-primary" />
        <h1 className="display mt-4 text-3xl">You're already signed in</h1>
        <p className="mt-2 text-muted-foreground">Go to your dashboard or explore new spaces.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="secondary" asChild className="rounded-full">
            <Link to="/explore">Explore</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    login(email);
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
          <h1 className="display mt-6 text-3xl">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Log in to manage your bookings and saved spaces.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && <p className="text-sm text-destructive">{error}</p>}
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
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1.5">
              <Input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShow((o) => !o)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full rounded-full">
            Log in
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
