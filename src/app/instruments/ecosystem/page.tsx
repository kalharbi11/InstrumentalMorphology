import InstrumentInterface from "../InstrumentInterface";

const BACKGROUND_VIDEO =
  "https://www.youtube.com/embed/0ux-Gfewt8M?start=20&autoplay=1&mute=1&controls=0&loop=1&playlist=0ux-Gfewt8M&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&showinfo=0";

export default function EcosystemPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="fixed inset-0 overflow-hidden">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[110vh] w-[110vw] min-h-[62.5vw] min-w-[187.5vh] -translate-x-1/2 -translate-y-1/2 scale-[1.05]"
          src={BACKGROUND_VIDEO}
          title="Ecosystem IR Instrument background video"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="fixed inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-8 pb-24 pt-28">
        <header className="mt-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
            Instrument
          </p>
          <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">
            Ecosystem IR Instrument
          </h1>
        </header>

        <section className="mt-8">
          <InstrumentInterface />
        </section>

      <section className="mt-10 space-y-4">
        <p className="text-sm leading-6 text-white/80">
          This instrument functions as a living ecosystem rather than a single
          organism-based system. The tank contains ghost shrimp, fish, algae,
          and aquatic plants, all interacting within a shared environment.
        </p>
        <p className="text-sm leading-6 text-white/80">
          Infrared beams are positioned across the tank. When organisms swim
          through the beams, the interruption triggers sound events. Because
          multiple species move differently and respond to different stimuli,
          the resulting soundscape reflects the layered rhythms of the
          ecosystem as a whole.
        </p>
        <p className="text-sm leading-6 text-white/80">
          The instrument emphasizes cohabitation and indirect influence: sound
          is not produced by intentional action, but by incidental movement
          within a shared space.
        </p>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-white/70">
          Diagrams
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="space-y-3">
            <div className="aspect-[4/3] w-full bg-white/10" />
            <figcaption className="font-serif text-sm italic text-white/70">
              New: IR beam layout diagram
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <div className="aspect-[4/3] w-full bg-white/10" />
            <figcaption className="font-serif text-sm italic text-white/70">
              New: Species movement layers over time
            </figcaption>
          </figure>
        </div>
      </section>
      </div>
    </main>
  );
}
