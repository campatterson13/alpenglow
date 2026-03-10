import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
}: PlaceholderPageProps) {
  const isMailtoLink = primaryHref.startsWith("mailto:");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto flex min-h-[calc(100svh-13rem)] w-full max-w-6xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <section className="placeholder-panel w-full max-w-3xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-balance font-sans text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty font-sans text-lg leading-8 text-foreground/72">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-none bg-primary px-7 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90"
            >
              {isMailtoLink ? (
                <a href={primaryHref}>{primaryLabel}</a>
              ) : (
                <Link href={primaryHref}>{primaryLabel}</Link>
              )}
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-foreground/12 bg-transparent px-7 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-foreground hover:text-background"
            >
              <Link href="/">Back Home</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
