import { Link, createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-primary">Contact</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Get in touch</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Have a question, feedback, or hosting inquiry? We’d love to hear from you.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <Reveal>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" className="mt-1.5" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="you@example.com" className="mt-1.5" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="How can we help?" className="mt-1.5" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Tell us more..." className="mt-1.5 min-h-[160px]" />
            </div>
            <Button type="submit" className="rounded-full">
              Send message
            </Button>
          </form>
        </Reveal>

        <div className="space-y-5">
          <Reveal>
            <div className="rounded-2xl border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-xs text-muted-foreground">hello@treehouse.example</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-xs text-muted-foreground">+351 123 456 789</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Office</p>
                  <p className="text-xs text-muted-foreground">Lisbon, Portugal</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
