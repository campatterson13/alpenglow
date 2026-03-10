import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book" },
  { href: "/hours", label: "Location & Hours" },
  { href: "/contact", label: "Contact" },
];

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-black/5 bg-background/95 backdrop-blur-sm",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-7 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Alpenglow Sauna home"
        >
          <Image
            src="/alpenglow-logo.png"
            alt="Alpenglow Sauna"
            width={128}
            height={129}
            priority
            className="h-auto w-24 sm:w-28"
          />
        </Link>

        <nav aria-label="Primary" className="w-full">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-foreground/76 sm:gap-x-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
