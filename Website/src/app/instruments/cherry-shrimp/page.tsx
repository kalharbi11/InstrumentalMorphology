import InstrumentInterface from "../InstrumentInterface";

const BACKGROUND_VIDEO =
  "https://www.youtube.com/embed/beYAK_O1PEw?autoplay=1&mute=1&controls=0&loop=1&playlist=beYAK_O1PEw&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&showinfo=0";

export default function CherryShrimpPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="fixed inset-0 overflow-hidden">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[110vh] w-[110vw] min-h-[62.5vw] min-w-[187.5vh] -translate-x-1/2 -translate-y-1/2 scale-[1.05]"
          src={BACKGROUND_VIDEO}
          title="Shrimp Attention System background video"
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
            Shrimp Attention System
          </h1>
        </header>

        <section className="mt-8">
          <InstrumentInterface />
        </section>

      <section className="mt-10 space-y-4">
        <p className="text-sm leading-6 text-white/80">
          This instrument explores how attention and proximity can be sensed and
          sonified in a living system. Cherry shrimp inhabit a tank containing
          rocks attached to transparent glass tubes, giving the impression that
          the structures are floating in space.
        </p>
        <p className="text-sm leading-6 text-white/80">
          A webcam mounted above the tank captures continuous video, which is
          processed using computer vision techniques to track shrimp movement
          and proximity to each rock. These spatial relationships are mapped to
          sound parameters, producing music that reflects patterns of gathering,
          dispersal, and sustained attention.
        </p>
        <p className="text-sm leading-6 text-white/80">
          The interface foregrounds ambiguity: shrimp behavior is never fully
          predictable, and the system embraces noise, misrecognition, and drift
          as part of the instrument’s character.
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
              New: Vision pipeline diagram (camera → OpenCV → sound engine)
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <div className="aspect-[4/3] w-full bg-white/10" />
            <figcaption className="font-serif text-sm italic text-white/70">
              New: Annotated tank layout with floating rocks
            </figcaption>
          </figure>
        </div>
      </section>
      </div>
    </main>
  );
}
