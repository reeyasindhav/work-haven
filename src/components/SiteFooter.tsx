import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="size-4" />
            </span>
            <span className="display text-2xl leading-none">treehouse</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Verified places to work well — from sunlit cafés to focused coworking hubs in 40+
            cities.
          </p>
        </div>
        <FooterCol
          title="Discover"
          items={[
            { to: "/explore", label: "Explore spaces" },
            { to: "/how-it-works", label: "How it works" },
            { to: "/pricing", label: "Pricing" },
          ]}
        />
        <FooterCol
          title="Hosts"
          items={[
            { to: "/list-your-space", label: "List your space" },
            { to: "/dashboard", label: "Host dashboard" },
          ]}
        />
        <FooterCol
          title="Account"
          items={[
            { to: "/login", label: "Log in" },
            { to: "/signup", label: "Create account" },
            { to: "/settings", label: "Settings" },
          ]}
        />
      </div>
      <div className="border-t border-border/70 px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Treehouse Spaces. Mock data for demonstration.</span>
          <span>Lisbon · Barcelona · Berlin · Bali · Mexico City · Tokyo</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow text-muted-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="story-link text-sm hover:text-primary">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
