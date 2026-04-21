"use client";

const mariaBio =
  "Maria Myers is an interdisciplinary designer and researcher based in Brooklyn. She is currently a graduate student in the Master of Industrial Design program at Pratt Institute, where her work focuses on biodesign, physical computing, and advanced fabrication. Her background spans humanities research, robotics, biomaterials, and digital fabrication, with prior experience in wet labs, fab labs, and interdisciplinary research environments in the United States and Europe. She has worked with tools and systems ranging from robotics and physical computing to bio-laboratory protocols, computational design, and experimental materials research.";
const khalidBio =
  "Khalid Alarbi is an architectural designer and fabricator with experience across architecture, interior design, and product development. He holds a Bachelor of Architecture and has worked professionally in architectural design studios, fabrication shops, and construction environments in the United States and Saudi Arabia. His practice emphasizes material-driven design, fabrication workflows, and spatial systems, with experience in furniture design, digital modeling, visualization, and large-scale construction coordination. He is currently a graduate student in the Master of Industrial Design program at Pratt Institute.";

const buildPortrait = (text: string, width: number, height: number, variant: "maria" | "khalid") => {
  const letters = text.replace(/[^a-zA-Z]/g, "");
  const chars = letters.length ? letters.split("") : ["."];
  const cx = width / 2;
  const cy = height / 2;
  const rx = width * 0.36;
  const ry = height * 0.44;
  const hairRx = width * 0.42;
  const hairRy = height * 0.3;
  const eyeY = Math.floor(height * 0.42);
  const leftEyeX = Math.floor(width * 0.38);
  const rightEyeX = Math.floor(width * 0.62);
  const noseY = Math.floor(height * 0.52);
  const mouthY = Math.floor(height * 0.64);
  let index = 0;
  let output = "";

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      const inFace = dx * dx + dy * dy <= 1;
      const inHair =
        y < height * 0.38 &&
        ((x - cx) * (x - cx)) / (hairRx * hairRx) +
          ((y - cy + height * 0.22) * (y - cy + height * 0.22)) /
            (hairRy * hairRy) <=
          1;
      const stipple = (x + y * 2) % 3 !== 0;
      const eyeHole =
        Math.abs(y - eyeY) <= 1 &&
        (Math.abs(x - leftEyeX) <= 1 || Math.abs(x - rightEyeX) <= 1);
      const noseHole = Math.abs(y - noseY) <= 1 && Math.abs(x - cx) <= 1;
      const mouthHole =
        Math.abs(y - mouthY) <= 1 &&
        Math.abs(x - cx) <= (variant === "maria" ? 4 : 3);

      if ((inFace || inHair) && stipple && !eyeHole && !noseHole && !mouthHole) {
        output += chars[index % chars.length];
        index += 1;
      } else {
        output += " ";
      }
    }
    output += "\n";
  }

  return output;
};

const renderAscii = (text: string) =>
  text.split("").map((char, index) =>
    char === "\n" ? (
      <br key={`br-${index}`} />
    ) : (
      <span
        key={`ch-${index}`}
        className="inline-block transition-all duration-700 group-hover:translate-y-6 group-hover:opacity-0"
        style={{ transitionDelay: `${(index % 120) * 4}ms` }}
      >
        {char}
      </span>
    )
  );

export default function AboutPage() {
  const mariaPortrait = buildPortrait(mariaBio, 42, 28, "maria");
  const khalidPortrait = buildPortrait(khalidBio, 42, 28, "khalid");

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-8 pb-24 pt-28 text-zinc-900">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
          About
        </p>
        <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">
          Instrumental Morphology
        </h1>
        <p className="max-w-3xl text-sm leading-6 text-zinc-600">
          Instrumental Morphology was developed by Maria Myers and Khalid
          Alharbi during the spring semester of their first year in the Master
          of Industrial Design (MID) program at Pratt Institute. The project
          emerged through shared research into biology, sound, and cybernetic
          systems, and was developed through parallel experimentation,
          prototyping, and documentation across studio and lab contexts. The
          project received Pratt&apos;s Spring 2025 Graduate Student Engagement
          Fund.
        </p>
      </header>

      <section className="mt-14">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="group flex flex-1 flex-col items-center gap-4 text-left">
            <div className="relative flex min-h-[280px] w-full items-center justify-center border border-zinc-300 bg-white px-6 py-5 text-xs text-zinc-600">
              <pre className="whitespace-pre font-mono text-[8px] leading-3 text-zinc-500">
                {renderAscii(mariaPortrait)}
              </pre>
              <p className="absolute inset-0 flex items-center justify-center px-6 text-sm leading-6 text-zinc-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {mariaBio}
              </p>
            </div>
            <span className="font-serif text-sm italic text-zinc-600">
              Maria Myers
            </span>
          </div>

          <div className="group flex flex-1 flex-col items-center gap-4 text-left">
            <div className="relative flex min-h-[280px] w-full items-center justify-center border border-zinc-300 bg-white px-6 py-5 text-xs text-zinc-600">
              <pre className="whitespace-pre font-mono text-[8px] leading-3 text-zinc-500">
                {renderAscii(khalidPortrait)}
              </pre>
              <p className="absolute inset-0 flex items-center justify-center px-6 text-sm leading-6 text-zinc-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {khalidBio}
              </p>
            </div>
            <span className="font-serif text-sm italic text-zinc-600">
              Khalid Alharbi
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}