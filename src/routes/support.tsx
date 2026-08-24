import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, LifeBuoy, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/support")({ component: Support });

const faqs = [
  {
    q: "How do I book a space?",
    a: "Browse spaces on the Explore page, select a space, choose a time slot and number of guests, then confirm your booking.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes. Open My bookings, find the reservation, and use the cancel option. Cancellation policies are set by each host.",
  },
  {
    q: "How are spaces verified?",
    a: "Every space is checked for wifi speed, noise level, power outlets, and listed amenities before it goes live.",
  },
  {
    q: "Do I need an account to browse?",
    a: "No. You can browse and view spaces without an account. Booking and saving favorites requires signing up.",
  },
  {
    q: "How do I list my space?",
    a: "Go to List your space, add photos and amenities, set your schedule and pricing, then submit for review.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes. Payments are processed through trusted providers and we do not store card details on our servers.",
  },
];

function Support() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-primary">Support</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">How can we help?</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Search our help center or browse common questions below.
          </p>
          <div className="mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search help articles..." className="w-full pl-9" />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: BookOpen,
            title: "Help center",
            desc: "Guides and walkthroughs for guests and hosts.",
            to: "/",
          },
          {
            icon: MessageSquare,
            title: "Contact us",
            desc: "Chat or email our support team directly.",
            to: "/contact",
          },
          {
            icon: LifeBuoy,
            title: "Community",
            desc: "Join discussions with other remote workers.",
            to: "/",
          },
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <Link
              to={item.to}
              className="flex h-full flex-col rounded-2xl border bg-card p-5 shadow-soft transition-colors hover:bg-secondary"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.desc}</p>
              <span className="mt-4 text-sm text-primary">Open</span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <Reveal>
          <h2 className="display text-2xl">Frequently asked questions</h2>
        </Reveal>
        <div className="mt-6 space-y-4">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <div className="rounded-2xl border bg-card p-5 shadow-soft">
                <h3 className="text-sm font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mx-auto mt-14 max-w-3xl">
          <Link to="/contact">
            <Button className="rounded-full">
              <ArrowLeft className="mr-2 size-4" /> Back to contact
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
