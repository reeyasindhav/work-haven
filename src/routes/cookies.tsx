import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/cookies")({ component: Cookies });

function Cookies() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-primary">Legal</span>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Cookie policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-10">
        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">What are cookies</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cookies are small text files placed on your device when you visit a website. They are
              widely used to make websites work more efficiently and to provide information to the
              site owner.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">How we use cookies</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Treehouse uses cookies to remember your preferences, understand how you use the site,
              and improve your experience. We do not use cookies to collect personally identifiable
              information unless you explicitly provide it.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Types of cookies we use</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Essential cookies: required for the site to function, such as authentication and
                security.
              </li>
              <li>
                Analytics cookies: help us understand how visitors use the site so we can improve
                performance and content.
              </li>
              <li>Preference cookies: remember your settings, like location or saved spaces.</li>
              <li>
                Marketing cookies: used to deliver relevant content and measure campaign
                effectiveness.
              </li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Managing cookies</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You can control and manage cookies through your browser settings. Please note that
              disabling certain cookies may affect the functionality of the site and your
              experience.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Third-party cookies</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Some cookies are placed by third-party services that appear on our pages. We do not
              control these cookies. Please review the privacy policies of those services for more
              information.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Updates to this policy</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We may update this cookie policy from time to time. Any changes will be posted on this
              page with an updated effective date.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If you have questions about our use of cookies, reach us at{" "}
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
