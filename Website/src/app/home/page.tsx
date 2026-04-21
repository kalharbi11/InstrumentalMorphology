export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-8 py-20 text-zinc-900">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start">
        <div className="space-y-12">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
              Research Proposal
            </p>
            <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">
              Instrumental Morphology
            </h1>
          </header>

          <section className="space-y-3">
            <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-zinc-500">
              Project Description
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Instrumental Morphology is an ongoing research project that
              investigates living organisms as active participants in musical
              and sensing systems. The project is realized through a series of
              aquatic instruments, including light-responsive Daphnia swarms,
              vision-tracked shrimp environments, and multi-species ecosystems
              activated by infrared sensing. Across these instruments,
              biological behavior, environmental conditions, and computational
              systems form feedback-driven loops that shape sound and light over
              time. The work is informed by Goethe’s concept of the spiral as a
              model of growth through return and transformation, where progress
              emerges through repetition rather than linear advancement.
              Iteration is treated as a core method, with each instrument
              developing through cycles of observation, adjustment, and
              response. The project documents these evolving systems as case
              studies that examine how uncertainty, care, and partial autonomy
              can be central to the definition of an instrument.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-zinc-500">
              Instruments Overview
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              At its current stage, the project consists of three functioning
              instruments and an open body of ongoing research:
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <figure className="space-y-3">
                <div className="aspect-[4/3] w-full bg-zinc-100" />
                <figcaption className="font-serif text-sm italic text-zinc-600">
                  Daphnia Light Field
                </figcaption>
              </figure>
              <figure className="space-y-3">
                <div className="aspect-[4/3] w-full bg-zinc-100" />
                <figcaption className="font-serif text-sm italic text-zinc-600">
                  Shrimp Attention System
                </figcaption>
              </figure>
              <figure className="space-y-3">
                <div className="aspect-[4/3] w-full bg-zinc-100" />
                <figcaption className="font-serif text-sm italic text-zinc-600">
                  Ecosystem IR Instrument
                </figcaption>
              </figure>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              In parallel, the project documents experimental work with algae,
              sensors, sound synthesis, and cybernetic feedback systems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-zinc-500">
              Research Structure
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Placeholder for describing the research phases, methodology, and
              key questions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-zinc-500">
              Biological systems as generative frameworks
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              This work is informed by Johann Wolfgang von Goethe’s conception
              of morphology as a study of form through transformation rather
              than static classification. Goethe’s spiral functions as both a
              visual and methodological guide: growth occurs through return,
              variation, and accumulation, not linear progress.
            </p>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Each instrument is developed through repeated cycles of
              observation, intervention, and response. Iteration is not a means
              to optimization, but a way of remaining attentive to how living
              systems change when placed in new conditions.
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24">
          <figure className="space-y-4">
            <img
              src="/assets/images/spiralefigure1.jpg"
              alt="Goethe’s Spiral diagram"
              className="w-full bg-white"
            />
            <figcaption className="font-serif text-sm italic leading-6 text-zinc-600">
              <span className="italic">Goethe’s Spiral</span>
              <br />
              Johann Wolfgang Goethe: Propagat. Gemmation. [Zeichnung zur
              Spiraltendenz der Vegetation] (1829), LA II 10B.1, 116 [24.8].
            </figcaption>
          </figure>
        </aside>
      </div>
    </main>
  );
}