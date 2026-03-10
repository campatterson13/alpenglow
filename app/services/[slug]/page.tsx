import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/lib/services";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.metadataDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Alpenglow Sauna`,
      description: service.metadataDescription,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-12">
        <section className="rounded-none border border-border/80 bg-card/90 px-6 py-10 shadow-[0_24px_70px_rgba(66,46,28,0.10)] sm:px-10 sm:py-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
            {service.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance font-sans text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty font-sans text-xl leading-8 text-muted-foreground">
            {service.cardSubhead}
          </p>
          <p className="mt-6 max-w-3xl text-pretty font-sans text-lg leading-8 text-foreground/78">
            {service.intro}
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="rounded-none border border-border/80 bg-card/90 py-0 shadow-[0_24px_70px_rgba(66,46,28,0.10)]">
            <CardHeader className="px-6 pt-7 sm:px-8 sm:pt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Best For
              </p>
              <CardTitle className="text-balance font-sans text-3xl font-medium tracking-[-0.03em] text-foreground">
                Who this experience serves best
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8 sm:px-8">
              <ul className="space-y-4">
                {service.bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-pretty font-sans text-lg leading-8 text-foreground/78"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-none border border-border/80 bg-card/90 py-0 shadow-[0_24px_70px_rgba(66,46,28,0.10)]">
            <CardHeader className="px-6 pt-7 sm:px-8 sm:pt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Experience
              </p>
              <CardTitle className="text-balance font-sans text-3xl font-medium tracking-[-0.03em] text-foreground">
                What the format feels like
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 px-6 pb-8 sm:px-8">
              {service.experience.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-pretty font-sans text-lg leading-8 text-foreground/78"
                >
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-none border border-border/80 bg-card/90 py-0 shadow-[0_24px_70px_rgba(66,46,28,0.10)]">
          <CardHeader className="px-6 pt-7 sm:px-8 sm:pt-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
              Logistics
            </p>
            <CardTitle className="text-balance font-sans text-3xl font-medium tracking-[-0.03em] text-foreground">
              Planning notes before you book
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-8 sm:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {service.logistics.map((item) => (
                <div
                  key={item}
                  className="border border-border/70 bg-background/65 p-5"
                >
                  <p className="text-pretty font-sans text-base leading-7 text-foreground/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-none border border-primary/20 bg-primary px-0 py-0 text-primary-foreground shadow-[0_24px_70px_rgba(10,32,28,0.22)]">
          <CardHeader className="px-6 pt-8 sm:px-8 sm:pt-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">
              Next Step
            </p>
            <CardTitle className="max-w-3xl text-balance font-sans text-3xl font-medium tracking-[-0.03em] text-primary-foreground">
              {service.closingTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-8 sm:px-8">
            <p className="max-w-3xl text-pretty font-sans text-lg leading-8 text-primary-foreground/78">
              {service.closingDescription}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4 border-t border-white/10 bg-transparent px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-none bg-background px-7 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-background/92"
            >
              <Link href={service.finalCtaHref}>{service.finalCtaLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-white/20 bg-transparent px-7 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <Link href="/">Back Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
