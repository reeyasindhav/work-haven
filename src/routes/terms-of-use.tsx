import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms-of-use")({ component: TermsOfUse });

function TermsOfUse() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-primary">Legal</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Terms of use</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-10">
        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Acceptance of terms</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              By accessing or using Treehouse, you agree to these Terms of Use. If you do not agree,
              please do not use the platform.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Use of the platform</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                You must provide accurate information when creating an account or booking a space.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your account credentials.
              </li>
              <li>You may not use the platform for unlawful, abusive, or fraudulent purposes.</li>
              <li>Hosts must list accurate details, pricing, and availability for their spaces.</li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Bookings and payments</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              All bookings are subject to host availability and confirmation. Prices shown are per
              booking unless stated otherwise. Cancellation policies are set by hosts and displayed
              before confirmation.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Intellectual property</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Treehouse owns all rights to the platform design, logos, and content unless otherwise
              noted. Hosts retain ownership of their space listings and media.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Limitation of liability</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Treehouse acts as an intermediary between guests and hosts. We are not liable for
              service interruptions, host actions, or third-party content. Use the platform at your
              own discretion.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Changes to terms</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We may update these terms occasionally. Continued use of the platform after changes
              constitutes acceptance of the updated terms.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Questions about these terms? Reach us at{" "}
              <Link to="/" className="text-primary hover:underline">
                legal@treehouse.example
              </Link>
              .
            </p>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto mt-14 max-w-3xl">
          <Button asChild className="rounded-full">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
