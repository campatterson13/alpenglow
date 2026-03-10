import Link from "next/link";

import { services } from "@/lib/services";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
          Our Services
        </p>
        <div className="mx-auto mt-5 h-px w-16 bg-primary/60" />
        <h2 className="mt-6 text-balance font-sans text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">
          Thoughtful sauna experiences for groups, gatherings, and slower
          recovery
        </h2>
        <p className="mt-5 text-pretty font-sans text-lg leading-8 text-foreground/72">
          Each format keeps the same Alpenglow sensibility: wood-fired warmth,
          cold plunge contrast, and a grounded pace that leaves room to settle
          in.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {services.map((service) => (
          <Card
            key={service.slug}
            className="rounded-none border border-border/80 bg-card/90 py-0 shadow-[0_24px_70px_rgba(66,46,28,0.10)]"
          >
            <CardHeader className="gap-3 px-6 pt-7 sm:px-8 sm:pt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                {service.eyebrow}
              </p>
              <CardTitle className="text-balance font-sans text-3xl font-medium tracking-[-0.03em] text-foreground">
                {service.title}
              </CardTitle>
              <p className="font-sans text-lg leading-8 text-muted-foreground">
                {service.cardSubhead}
              </p>
            </CardHeader>

            <CardContent className="px-6 pb-6 sm:px-8">
              <p className="text-pretty font-sans text-lg leading-8 text-foreground/78">
                {service.cardDescription}
              </p>
            </CardContent>

            <CardFooter className="mt-auto border-t border-border/70 bg-transparent px-6 py-6 sm:px-8">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-none bg-primary px-6 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary/90"
              >
                <Link href={`/services/${service.slug}`}>
                  {service.cardCtaLabel}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
