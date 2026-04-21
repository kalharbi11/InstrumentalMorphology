"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const VIDEO_SRC = "/assets/video/MVI_9910.mp4";

const INSTRUMENTS = [
  {
    id: "1",
    title: "Daphnia Light Field",
    summary:
      "A tank-based instrument where Daphnia respond to moving light fields that shape swarm-driven sound.",
    href: "/instruments/daphnia",
    videoSrc: VIDEO_SRC,
  },
  {
    id: "2",
    title: "Shrimp Attention System",
    summary:
      "A vision instrument tracking cherry shrimp proximity to floating rocks and translating their attention into sound.",
    href: "/instruments/cherry-shrimp",
    videoSrc: VIDEO_SRC,
  },
  {
    id: "3",
    title: "Ecosystem IR Instrument",
    summary:
      "A multi-species tank where fish, shrimp, and algae trigger sound by interrupting infrared beams.",
    href: "/instruments/ecosystem",
    videoSrc: VIDEO_SRC,
  },
];

const NOTE_POSITIONS = [
  { angle: 0, radius: 232, glyph: "♪", size: "text-base", opacity: "text-white/70" },
  { angle: 20, radius: 238, glyph: "♫", size: "text-base", opacity: "text-white/70" },
  { angle: 40, radius: 244, glyph: "♩", size: "text-lg", opacity: "text-white/70" },
  { angle: 60, radius: 250, glyph: "♪", size: "text-base", opacity: "text-white/60" },
  { angle: 80, radius: 256, glyph: "♫", size: "text-lg", opacity: "text-white/60" },
  { angle: 100, radius: 262, glyph: "♪", size: "text-base", opacity: "text-white/60" },
  { angle: 120, radius: 268, glyph: "♩", size: "text-base", opacity: "text-white/60" },
  { angle: 140, radius: 274, glyph: "♫", size: "text-lg", opacity: "text-white/60" },
  { angle: 160, radius: 280, glyph: "♪", size: "text-base", opacity: "text-white/50" },
  { angle: 180, radius: 232, glyph: "♫", size: "text-base", opacity: "text-white/50" },
  { angle: 200, radius: 238, glyph: "♪", size: "text-base", opacity: "text-white/50" },
  { angle: 220, radius: 244, glyph: "♩", size: "text-lg", opacity: "text-white/50" },
  { angle: 240, radius: 250, glyph: "♫", size: "text-base", opacity: "text-white/50" },
  { angle: 260, radius: 256, glyph: "♪", size: "text-lg", opacity: "text-white/50" },
  { angle: 280, radius: 262, glyph: "♩", size: "text-base", opacity: "text-white/40" },
  { angle: 300, radius: 268, glyph: "♫", size: "text-lg", opacity: "text-white/40" },
  { angle: 320, radius: 274, glyph: "♪", size: "text-base", opacity: "text-white/40" },
  { angle: 340, radius: 280, glyph: "♩", size: "text-base", opacity: "text-white/40" },
];

export default function InstrumentsPage() {
  const [activeId, setActiveId] = useState<string>(INSTRUMENTS[0].id);
  const activeInstrument = useMemo(
    () => INSTRUMENTS.find((instrument) => instrument.id === activeId) ?? null,
    [activeId],
  );

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/45" />

      <header className="relative z-20 mx-auto w-full max-w-6xl px-8 pt-28">
        <h1 className="font-serif text-4xl uppercase tracking-[0.12em] text-white sm:text-5xl">
          Instruments
        </h1>
      </header>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-8 py-24">
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/70">
            <div className="absolute inset-10 z-20 rounded-full border border-white/70" />

            <svg
              className="pointer-events-none absolute inset-0 z-10 opacity-50"
              viewBox="0 0 420 420"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1"
              aria-hidden="true"
            >
              {NOTE_POSITIONS.map((note, index) => {
                const angleRad = (note.angle * Math.PI) / 180;
                const x = 210 + Math.sin(angleRad) * note.radius;
                const y = 210 - Math.cos(angleRad) * note.radius;
                return (
                  <line
                    key={`note-line-${index}`}
                    x1="210"
                    y1="210"
                    x2={x}
                    y2={y}
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            <div className="relative z-30 h-[260px] w-[260px] overflow-hidden rounded-full border border-white/60">
              <video
                className="h-full w-full object-cover"
                src={activeInstrument?.videoSrc ?? VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <button
              type="button"
              onClick={() => setActiveId("1")}
              className={`absolute left-1/2 top-1/2 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-xs transition-colors ${activeId === "1" ? "bg-white text-black" : "bg-transparent text-white"}`}
              aria-pressed={activeId === "1"}
              style={{ transform: "translate(-50%, -50%) rotate(10deg) translateY(-190px)" }}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => setActiveId("2")}
              className={`absolute left-1/2 top-1/2 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-xs transition-colors ${activeId === "2" ? "bg-white text-black" : "bg-transparent text-white"}`}
              aria-pressed={activeId === "2"}
              style={{ transform: "translate(-50%, -50%) rotate(40deg) translateY(-190px)" }}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => setActiveId("3")}
              className={`absolute left-1/2 top-1/2 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 text-xs transition-colors ${activeId === "3" ? "bg-white text-black" : "bg-transparent text-white"}`}
              aria-pressed={activeId === "3"}
              style={{ transform: "translate(-50%, -50%) rotate(70deg) translateY(-190px)" }}
            >
              3
            </button>

            {NOTE_POSITIONS.map((note, index) => (
              <span
                key={`${note.glyph}-${index}`}
                className={`absolute left-1/2 top-1/2 z-10 ${note.size} ${note.opacity}`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${note.angle}deg) translateY(-${note.radius}px) rotate(-${note.angle}deg)`,
                }}
                aria-hidden="true"
              >
                {note.glyph}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 flex max-w-xl flex-col items-center gap-3 text-center">
          <span className="min-h-[20px] text-xs uppercase tracking-[0.35em]">
            {activeInstrument?.title ?? ""}
          </span>
          <p className="text-sm leading-6 text-white/80">
            {activeInstrument?.summary ?? ""}
          </p>
          <Link
            href={activeInstrument?.href ?? "/instruments"}
            className="mt-2 inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
          >
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
}
