import InstrumentInterface from "../InstrumentInterface";

const BACKGROUND_VIDEO =
  "https://www.youtube.com/embed/A4TRXFGV8Bg?autoplay=1&mute=1&controls=0&loop=1&playlist=A4TRXFGV8Bg&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&showinfo=0";

export default function DaphniaPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="fixed inset-0 overflow-hidden">
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-[110vh] w-[110vw] min-h-[62.5vw] min-w-[187.5vh] -translate-x-1/2 -translate-y-1/2 scale-[1.05]"
          src={BACKGROUND_VIDEO}
          title="Daphnia Light Field background video"
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
            Daphnia Light Field
          </h1>
        </header>

        <section className="mt-8">
          <InstrumentInterface />
        </section>

      <section className="mt-10 space-y-4">
        <p className="text-sm leading-6 text-white/80">
          The Daphnia Light Field is a musical instrument built around the
          phototactic behavior of Daphnia. These microscopic crustaceans respond
          rapidly and collectively to changes in light, forming dynamic swarm
          patterns that can be observed in real time.
        </p>
        <p className="text-sm leading-6 text-white/80">
          In this instrument, a pressure-sensitive silicone controller is used
          to generate moving light fields on an LED panel mounted behind the
          tank. As the light shifts, the Daphnia reorganize, producing emergent
          spatial patterns that are translated into sound.
        </p>
        <p className="text-sm leading-6 text-white/80">
          Rather than mapping individual organisms to discrete notes, the system
          focuses on collective motion, density, and rate of change, emphasizing
          swarm behavior over isolated action.
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
              New: Light → Daphnia → Sound signal flow diagram
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <div className="aspect-[4/3] w-full bg-white/10" />
            <figcaption className="font-serif text-sm italic text-white/70">
              New: Tank cross-section showing LED panel, controller, organisms
            </figcaption>
          </figure>
        </div>
      </section>
      </div>
    </main>
  );
}
