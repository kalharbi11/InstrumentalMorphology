import Link from "next/link";

export default function ResearchPage() {
  const topics = [
    { id: "cybernetics", label: "Cybernetics and feedback", left: "18%", top: "58%" },
    { id: "emergence", label: "Emergence and swarm behavior", left: "60%", top: "44%" },
    { id: "adjacent", label: "The adjacent possible", left: "44%", top: "58%" },
    { id: "translation", label: "Translation, not representation", left: "46%", top: "30%" },
    { id: "instrument", label: "Musical instrument design", left: "40%", top: "38%" },
    { id: "material", label: "Material experimentation", left: "20%", top: "36%" },
    { id: "aquascape", label: "Aquascaping Basics", left: "60%", top: "38%" },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-8 pb-24 pt-28 text-zinc-900">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
          Research
        </p>
        <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">
          Research Documentation
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600">
          Placeholder for research framing, methods, and key questions.
        </p>
      </header>

      <section className="mt-12">
        <div className="relative min-h-[420px] w-full">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 420">
            <g stroke="#111827" strokeWidth="1" fill="none">
              <line x1="420" y1="100" x2="420" y2="400" />
              <line x1="580" y1="100" x2="580" y2="400" />
              <line x1="140" y1="170" x2="860" y2="170" />
              <line x1="140" y1="320" x2="860" y2="320" />
            </g>
            <g stroke="#111827" strokeWidth="1" fill="white">
              <circle cx="420" cy="100" r="8" />
              <circle cx="420" cy="400" r="8" />
              <circle cx="580" cy="100" r="8" />
              <circle cx="580" cy="400" r="8" />
              <circle cx="140" cy="170" r="8" />
              <circle cx="860" cy="170" r="8" />
              <circle cx="140" cy="320" r="8" />
              <circle cx="860" cy="320" r="8" />
            </g>
          </svg>

          <div className="absolute left-[42%] top-4 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Music
          </div>
          <div className="absolute left-[58%] top-4 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Biology
          </div>
          <div className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-4 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Fabrication
          </div>
          <div className="absolute left-0 top-[76%] -translate-y-1/2 -translate-x-4 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Theory
          </div>

          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/research/${topic.id}`}
              className="absolute z-0 flex flex-col items-center gap-2 text-center text-[11px] text-zinc-500 transition-all duration-200 hover:z-20 hover:text-zinc-900"
              style={{ left: topic.left, top: topic.top }}
            >
              <div className="h-24 w-16 border border-zinc-300 bg-white" />
              <span className="rounded-sm bg-white/90 px-2 py-1 font-serif italic shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                {topic.label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
