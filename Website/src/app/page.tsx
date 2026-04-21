import Link from "next/link";

export default function LandingPage() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.2),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-8 py-12 sm:px-14">
        <header className="max-w-3xl space-y-4 pt-8">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
            Research Proposal
          </p>
          <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-6xl">
            Instrumental Morphology
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-zinc-200/90">
            A living-systems instrument research site connecting biology, sound,
            fabrication, and feedback-driven design.
          </p>
        </header>

        <div className="flex items-end justify-between gap-6 pb-10">
          <p className="max-w-xl text-sm leading-6 text-zinc-300/90">
            Enter the project documentation and browse instruments, process,
            methods, and research topics.
          </p>
          <Link
            href="/home"
            className="whitespace-nowrap border border-zinc-200/50 px-6 py-3 text-xs uppercase tracking-[0.32em] text-zinc-100 transition hover:border-orange-300 hover:text-orange-200"
          >
            Enter
          </Link>
        </div>
      </div>
    </main>
  );
}
