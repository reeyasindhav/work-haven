import { Link, useNavigate } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  { to: "/explore", label: "Explore spaces" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/list-your-space", label: "List your space" },
  { to: "/pricing", label: "Pricing" },
];

export function SiteHeader() {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-8 px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Leaf className="size-4" />
          </span>
          <span className="display text-2xl leading-none">treehouse</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="story-link text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full border border-border py-1 pr-3 pl-1 transition-colors hover:bg-secondary">
                  <Avatar className="size-7">
                    <AvatarImage src={user.avatar} alt="" />
                    <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm font-medium capitalize sm:inline">
                    {user.name}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate({ to: "/dashboard" })}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate({ to: "/bookings" })}>
                  My bookings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate({ to: "/favorites" })}>
                  Saved spaces
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate({ to: "/settings" })}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      Log out
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Log out?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You will be signed out of your Treehouse account.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          logout();
                          navigate({ to: "/" });
                        }}
                      >
                        Log out
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild className="rounded-full px-5">
                <Link to="/signup">Get started</Link>
              </Button>
            </>
          )}
          <button
            className="ml-1 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm">
                {l.label}
              </Link>
            ))}
            {!user && (
              <Link to="/login" onClick={() => setOpen(false)} className="text-sm">
                Log in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
