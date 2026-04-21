"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteNav() {
  const pathname = usePathname();
  const isInstrumentsPage = pathname.startsWith("/instruments");

  if (pathname === "/") {
    return null;
  }

  const linkClass = (href: string) => {
    const isActive =
      pathname === href || (href !== "/home" && pathname.startsWith(`${href}/`));
    if (isInstrumentsPage) {
      return `transition-colors duration-200 ${
        isActive
          ? "text-white underline underline-offset-4"
          : "text-white/70 hover:text-white"
      }`;
    }
    return `transition-colors duration-200 ${
      isActive
        ? "text-zinc-900 underline underline-offset-4"
        : "text-zinc-500 hover:text-zinc-900"
    }`;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-30 py-6">
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center gap-5 px-8 text-[11px] font-light uppercase tracking-[0.28em] ${
          isInstrumentsPage ? "text-white/70" : "text-zinc-500"
        }`}
      >
        <Link href="/home" className={linkClass("/home")}>
          Home
        </Link>
        <Link href="/instruments" className={linkClass("/instruments")}>
          Instruments
        </Link>
        <Link href="/process" className={linkClass("/process")}>
          Process
        </Link>
        <Link href="/methodology" className={linkClass("/methodology")}>
          Methodology
        </Link>
        <Link href="/research" className={linkClass("/research")}>
          Research
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
      </nav>
    </header>
  );
}
