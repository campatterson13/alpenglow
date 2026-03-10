import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative isolate flex min-h-[calc(100svh-13rem)] items-center overflow-hidden">
          <Image
            src="/alpenglow-hero.png"
            alt="Guests relaxing in a sauna with mountain views."
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/75 to-transparent" />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl justify-center px-6 py-24 text-center sm:px-10 lg:px-12">
            <div className="max-w-3xl space-y-6 text-primary-foreground">
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.34em] text-primary-foreground/80 sm:text-base">
                Colorado Sauna Retreat
              </p>
              <h1 className="text-balance font-sans text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Colorado&apos;s premier sauna and cold plunge escape
              </h1>
              <p className="mx-auto max-w-2xl text-pretty font-sans text-lg leading-8 text-primary-foreground/78 sm:text-xl">
                Wood-fired warmth, mountain air, and restorative contrast
                therapy designed for a slower, stronger reset.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 min-w-56 rounded-none bg-primary px-8 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-[0_12px_30px_rgba(10,32,28,0.35)] hover:bg-primary/90"
                >
                  <Link href="/book">Book a Session</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 min-w-56 rounded-none border-white/35 bg-white/8 px-8 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:bg-white/14 hover:text-white"
                >
                  <Link href="/hours">Location &amp; Hours</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
