import { Link, createFileRoute, useParams } from "@tanstack/react-router";
import { ArrowLeft, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPost, BLOG_POSTS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog/$slug")({ component: BlogPost });

function BlogPost() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = getBlogPost(slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post?.category).slice(
    0,
    2,
  );

  if (!post) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-20 text-center lg:px-8">
        <h1 className="display text-4xl">Article not found</h1>
        <p className="mt-2 text-muted-foreground">This post might have been removed or moved.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/blog">Back to blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pt-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to blog
        </Link>
      </div>

      <article className="mx-auto max-w-[1400px] px-5 py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3.5" /> {post.readTime}
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h1 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">{post.title}</h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              <div>
                <p className="text-sm font-semibold">{post.author}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="animate-image size-full object-cover"
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <Separator className="my-8" />
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <Reveal>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Share:</span>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <Twitter className="size-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <Facebook className="size-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <Linkedin className="size-4" />
                    </Button>
                  </div>
                </div>
                <Button asChild className="rounded-full">
                  <Link to="/blog">All articles</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
          <Reveal>
            <h2 className="display text-2xl">Related articles</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft transition-colors hover:bg-secondary"
                >
                  <div className="aspect-[16/10]">
                    <img src={p.image} alt={p.title} className="size-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Badge variant="secondary">{p.category}</Badge>
                    <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-4 text-sm text-primary">Read more</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-border bg-sand/60">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display text-2xl sm:text-3xl">Subscribe to our newsletter</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Get the latest remote work tips and space recommendations.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
              >
                <Input placeholder="you@example.com" className="sm:w-80" />
                <Button type="submit" className="rounded-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
