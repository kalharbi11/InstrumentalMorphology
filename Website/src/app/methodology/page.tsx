export default function MethodologyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-8 pb-24 pt-28 text-zinc-900">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start">
        <div className="space-y-12">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
              Methodology
            </p>
            <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">
              Methodology
            </h1>
          </header>

          <section className="space-y-4">
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              The project follows a methodology rooted in Goethe’s concept of
              “delicate empiricism,” which emphasizes attentive observation,
              sensory engagement, and iterative return. Knowledge emerges
              through sustained interaction rather than extraction.
            </p>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Research and making are interwoven. Experiments with living
              organisms, sensors, and sound systems inform one another in a
              continuous loop.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-zinc-500">
              Phases of work
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              The process unfolds through overlapping phases:
            </p>
            <div className="phase-field max-w-3xl">
              <span className="phase-bubble bubble-a">
                Observation and biological research
              </span>
              <span className="phase-bubble bubble-b">
                Experimental prototyping
              </span>
              <span className="phase-bubble bubble-c">System integration</span>
              <span className="phase-bubble bubble-d">
                Reflection and documentation
              </span>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              These phases do not occur sequentially, but recur throughout the
              life of each instrument.
            </p>
          </section>

          <section className="space-y-6">
            <figure className="space-y-4">
              <div className="w-full overflow-hidden bg-white">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 980 360"
                  role="img"
                  aria-label="Process diagram"
                >
                  <rect width="980" height="360" fill="white" />
                  <defs>
                    <marker
                      id="arrow"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M0,0 L8,4 L0,8" fill="none" stroke="#111827" />
                    </marker>
                  </defs>
                  <g stroke="#111827" strokeWidth="1" fill="none">
                    <circle cx="210" cy="210" r="100" strokeDasharray="3 6" />
                    <circle cx="490" cy="210" r="100" strokeDasharray="3 6" />
                    <circle cx="770" cy="210" r="100" strokeDasharray="3 6" />
                    <line x1="330" y1="60" x2="440" y2="60" markerEnd="url(#arrow)" />
                    <line x1="610" y1="60" x2="720" y2="60" markerEnd="url(#arrow)" />
                    <path d="M140 120 q-26 -18 -40 -44" markerEnd="url(#arrow)" />
                    <path d="M290 120 q24 -18 40 -44" markerEnd="url(#arrow)" />
                    <path d="M390 150 q-22 -18 -30 -44" markerEnd="url(#arrow)" />
                    <path d="M540 150 q22 -18 30 -44" markerEnd="url(#arrow)" />
                    <path d="M690 150 q-22 -18 -30 -44" markerEnd="url(#arrow)" />
                    <path d="M840 150 q22 -18 30 -44" markerEnd="url(#arrow)" />
                    <path d="M140 300 q-22 18 -38 42" markerEnd="url(#arrow)" />
                    <path d="M290 300 q22 18 38 42" markerEnd="url(#arrow)" />
                    <path d="M430 300 q22 18 38 42" markerEnd="url(#arrow)" />
                    <path d="M600 300 q22 18 38 42" markerEnd="url(#arrow)" />
                  </g>
                  <g fill="#f97316" fontSize="16" fontFamily="serif">
                    <text x="170" y="60">PHASE 1</text>
                    <text x="450" y="60">PHASE 2</text>
                    <text x="730" y="60">PHASE 3</text>
                  </g>
                  <g fill="#f97316" fontSize="16" fontFamily="serif">
                    <text x="130" y="220">SCIENTIFIC METHOD</text>
                    <text x="420" y="220">CREATIVE METHOD</text>
                    <text x="725" y="220">PRODUCTION</text>
                  </g>
                  <g
                    fill="#111827"
                    fontSize="14"
                    fontFamily="serif"
                    fontStyle="italic"
                  >
                    <text x="70" y="110">Research</text>
                    <text x="262" y="110">Experiment</text>
                    <text x="360" y="165">Research</text>
                    <text x="535" y="165">Ideation</text>
                    <text x="620" y="190">Fabrication</text>
                    <text x="735" y="120">Documentation</text>
                    <text x="840" y="250">Publication</text>
                    <text x="60" y="280">Observe</text>
                    <text x="252" y="280">Analyze</text>
                    <text x="440" y="330">Experiment</text>
                    <text x="610" y="330">Prototyping</text>
                  </g>
                </svg>
              </div>
              <figcaption className="font-serif text-sm italic text-zinc-600">
                Process diagram
              </figcaption>
            </figure>
          </section>

        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="flex flex-col gap-10">
            <figure className="space-y-4">
              <img
                src="/assets/images/spiralefigure1.jpg"
                alt="Goethe’s Spiral diagram"
                className="w-full bg-white"
              />
              <figcaption className="font-serif text-sm italic text-zinc-600">
                <span className="italic">Goethe’s Spiral</span>
                <br />
                Johann Wolfgang Goethe: Propagat. Gemmation. [Zeichnung zur
                Spiraltendenz der Vegetation] (1829), LA II 10B.1, 116 [24.8].
              </figcaption>
            </figure>

            <figure className="space-y-4 pl-8">
              <img
                src="/assets/images/The Adjacent Possible.png"
                alt="The Adjacent Possible diagram"
                className="w-full bg-white"
              />
              <figcaption className="font-serif text-sm italic text-zinc-600">
                The Adjacent Possible
              </figcaption>
            </figure>
          </div>
        </aside>
      </div>
    </main>
  );
}
