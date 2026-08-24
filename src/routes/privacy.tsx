import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-primary">Legal</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Privacy policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-10">
        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Treehouse respects your privacy. This policy explains what data we collect, why we
              collect it, and how we use it to help remote workers find and book work-friendly
              spaces.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Data we collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Account details: name, email, and profile preferences.</li>
              <li>Booking activity: spaces you view, save, and reserve.</li>
              <li>
                Device and usage data: pages visited, interactions, and approximate location when
                searching nearby spaces.
              </li>
              <li>Optional feedback and reviews you submit.</li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">How we use data</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>To show relevant spaces, availability, and personalized recommendations.</li>
              <li>To manage bookings, send confirmations, and support hosts and guests.</li>
              <li>To improve platform safety, performance, and product experience.</li>
              <li>To send product updates and offers only if you opt in.</li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Data sharing</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We do not sell personal data. We share limited booking information with hosts to
              complete reservations, and with trusted service providers who support operations under
              confidentiality obligations.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Your controls</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Update profile and booking history in Settings.</li>
              <li>Remove saved spaces at any time.</li>
              <li>Request account deletion by contacting support.</li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Questions about privacy? Reach us at{" "}
              <Link to="/" className="text-primary hover:underline">
                privacy@treehouse.example
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
