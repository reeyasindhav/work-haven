import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog")({ component: Blog });

function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesQuery =
      !query ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesQuery && matchesCategory;
  });

  const featured = BLOG_POSTS[0];
  const rest = filtered.slice(1);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 py-24 lg:px-8 lg:py-36">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow text-primary">Blog</span>
              <h1 className="display mt-4 text-5xl leading-[1.05] tracking-tight sm:text-7xl">
                Stories for <span className="italic">remote workers.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Guides, city tips, and productivity ideas from the Treehouse community.
              </p>
              <div className="mt-6">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-9"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background hover:border-primary/60",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {filtered.length === 0 ? (
        <div className="mx-auto max-w-[1400px] px-5 pb-16 lg:px-8">
          <div className="rounded-2xl border border-dashed p-12 text-center">
            <p className="text-sm text-muted-foreground">No articles match your filters.</p>
          </div>
        </div>
      ) : (
        <>
          {featured && category === "All" && !query && (
            <section className="mx-auto max-w-[1400px] px-5 pb-16 lg:px-8">
              <Reveal>
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  className="group overflow-hidden rounded-3xl border bg-card shadow-soft"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-[16/10] lg:aspect-auto">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 sm:p-10 lg:p-12">
                      <div className="flex items-center gap-2">
                        <Badge>{featured.category}</Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3.5" /> {featured.readTime}
                        </span>
                      </div>
                      <h2 className="display mt-4 text-2xl sm:text-3xl">{featured.title}</h2>
                      <p className="mt-3 text-sm text-muted-foreground">{featured.excerpt}</p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold">
                            {featured.author.slice(0, 2).toUpperCase()}
                          </span>
                          <span className="text-sm font-medium">{featured.author}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(featured.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </section>
          )}

          <section className="mx-auto max-w-[1400px] px-5 pb-16 lg:px-8">
            <Reveal>
              <h2 className="display text-2xl">
                {category === "All" ? "Latest articles" : category}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(category === "All" && !query ? rest : filtered).map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft transition-colors hover:bg-secondary"
                  >
                    <div className="aspect-[16/10]">
                      <img src={post.image} alt={post.title} className="size-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3.5" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 text-base font-semibold">{post.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium">{post.author}</span>
                        <span className="text-sm text-primary">Read more</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        </>
      )}

      <section className="border-t border-border bg-sand/60">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <BookOpen className="mx-auto size-10 text-primary" />
              <h2 className="display mt-4 text-2xl sm:text-3xl">Stay in the loop</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Get our best remote work tips and new space alerts in your inbox.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
              >
                <Input placeholder="you@example.com" className="sm:w-80" />
                <Button type="submit" className="rounded-full">
                  Subscribe <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
