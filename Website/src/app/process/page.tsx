"use client";

import { useState } from "react";

const steps = [
  {
    id: "biological-context",
    label: "Biological Context",
    x: 606,
    y: 350,
    image: "/assets/images/Daphnia.webp",
    description:
      "Survey organism behavior and ecological constraints to define sensing needs.",
  },
  {
    id: "research",
    label: "Research",
    x: 564.3,
    y: 345.5,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Gather field notes, historical references, and prior studies to anchor the work.",
  },
  {
    id: "biological-focus",
    label: "Biological Focus",
    x: 663.9,
    y: 366.4,
    image: "/assets/images/Daphnia.webp",
    description:
      "Define the specific organism cues and behaviors the instruments should translate.",
  },
  {
    id: "experimentation",
    label: "Experimentation",
    x: 510.7,
    y: 314.7,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Prototype quick rigs to test sensing, actuation, and environmental responses.",
  },
  {
    id: "analysis",
    label: "Analysis",
    x: 710.4,
    y: 410.7,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Review datasets and recordings to identify stable, repeatable signals.",
  },
  {
    id: "translation",
    label: "Translation",
    x: 473.8,
    y: 258.3,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Map biological signals into sound and interaction behaviors.",
  },
  {
    id: "design-sound",
    label: "Design & Sound",
    x: 735.6,
    y: 477.3,
    image: "/assets/images/The Adjacent Possible.png",
    description:
      "Refine sonic palettes and physical affordances for each instrument.",
  },
  {
    id: "prototyping",
    label: "Prototyping",
    x: 462.3,
    y: 183.6,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Build intermediate prototypes to validate layout, materials, and mechanics.",
  },
  {
    id: "fabrication",
    label: "Fabrication",
    x: 731.8,
    y: 557.7,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Move into final construction with tested materials and assembly plans.",
  },
  {
    id: "documentation",
    label: "Documentation",
    x: 482.5,
    y: 100.3,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Capture build steps, diagrams, and measurements for repeatability.",
  },
  {
    id: "publication",
    label: "Publication",
    x: 694.6,
    y: 641.0,
    image: "/assets/images/spiralefigure1.jpg",
    description:
      "Share findings through exhibitions, recordings, and research write-ups.",
  },
];

export default function ProcessPage() {
  const [activeStepId, setActiveStepId] = useState(steps[0]?.id ?? "");
  const activeStep = steps.find((step) => step.id === activeStepId) ?? steps[0];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-8 pb-24 pt-28 text-zinc-900">
      <div className="flex flex-col items-center gap-12">
        <div className="w-full space-y-12">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
              Process
            </p>
            <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">
              Process
            </h1>
          </header>

          <section className="space-y-4">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
              <figure className="flex flex-col items-start space-y-3 lg:w-[65%]">
                <div className="relative w-full overflow-visible bg-white">
                <svg
                  className="h-auto w-full origin-left scale-[1.1]"
                  viewBox="0 0 1200 700"
                  role="img"
                  aria-label="Project timeline spiral diagram"
                >
                  <rect width="1200" height="700" fill="white" />
                  <path
                    d="M 606.0 350.0 L 607.2 351.0 L 608.2 352.3 L 608.9 353.9 L 609.4 355.7 L 609.5 357.7 L 609.2 359.8 L 608.5 362.0 L 607.4 364.2 L 605.8 366.2 L 603.8 368.1 L 601.4 369.7 L 598.7 371.0 L 595.6 371.8 L 592.3 372.2 L 588.8 372.1 L 585.2 371.3 L 581.6 370.1 L 578.0 368.2 L 574.7 365.7 L 571.7 362.6 L 569.0 359.0 L 566.9 354.9 L 565.3 350.4 L 564.3 345.5 L 564.0 340.4 L 564.5 335.1 L 565.8 329.8 L 567.9 324.5 L 570.8 319.5 L 574.4 314.8 L 578.9 310.6 L 584.0 306.9 L 589.7 303.9 L 595.9 301.7 L 602.6 300.3 L 609.6 299.9 L 616.7 300.5 L 623.8 302.1 L 630.8 304.7 L 637.5 308.4 L 643.7 313.0 L 649.4 318.7 L 654.3 325.1 L 658.4 332.4 L 661.5 340.3 L 663.5 348.7 L 664.3 357.4 L 663.9 366.4 L 662.3 375.4 L 659.3 384.2 L 655.1 392.8 L 649.7 400.7 L 643.1 408.0 L 635.4 414.4 L 626.8 419.8 L 617.4 424.0 L 607.3 426.9 L 596.7 428.4 L 585.9 428.5 L 575.0 427.0 L 564.2 424.1 L 553.8 419.5 L 544.0 413.6 L 534.9 406.2 L 526.8 397.5 L 519.9 387.7 L 514.4 376.8 L 510.3 365.2 L 507.8 352.9 L 507.0 340.2 L 508.0 327.4 L 510.7 314.7 L 515.3 302.3 L 521.5 290.4 L 529.5 279.5 L 538.9 269.6 L 549.8 260.9 L 561.9 253.8 L 575.0 248.3 L 588.9 244.6 L 603.4 242.8 L 618.1 243.0 L 632.8 245.3 L 647.3 249.6 L 661.1 255.9 L 674.2 264.1 L 686.1 274.1 L 696.6 285.8 L 705.6 299.0 L 712.7 313.4 L 717.9 328.8 L 720.9 344.9 L 721.7 361.5 L 720.2 378.2 L 716.5 394.7 L 710.4 410.7 L 702.2 425.9 L 691.8 439.9 L 679.5 452.5 L 665.5 463.4 L 650.0 472.4 L 633.2 479.3 L 615.5 483.9 L 597.2 486.0 L 578.5 485.6 L 560.0 482.6 L 541.8 477.1 L 524.4 469.1 L 508.2 458.6 L 493.4 446.0 L 480.3 431.4 L 469.2 414.9 L 460.4 397.0 L 454.1 377.8 L 450.5 357.8 L 449.5 337.4 L 451.4 316.8 L 456.1 296.5 L 463.6 276.9 L 473.8 258.3 L 486.5 241.2 L 501.5 225.8 L 518.7 212.5 L 537.6 201.6 L 558.0 193.3 L 579.5 187.8 L 601.7 185.3 L 624.2 185.8 L 646.7 189.4 L 668.5 196.1 L 689.5 205.7 L 709.0 218.2 L 726.8 233.4 L 742.5 251.0 L 755.7 270.7 L 766.2 292.1 L 773.8 315.0 L 778.1 338.8 L 779.3 363.2 L 777.0 387.6 L 771.5 411.7 L 762.6 435.0 L 750.6 457.0 L 735.6 477.3 L 717.8 495.5 L 697.6 511.2 L 675.4 524.1 L 651.4 534.0 L 626.1 540.5 L 600.0 543.5 L 573.6 542.9 L 547.3 538.8 L 521.7 531.0 L 497.2 519.8 L 474.3 505.2 L 453.5 487.6 L 435.1 467.2 L 419.7 444.3 L 407.4 419.4 L 398.5 392.8 L 393.3 365.2 L 391.9 336.9 L 394.4 308.5 L 400.7 280.6 L 410.9 253.6 L 424.7 228.2 L 441.9 204.6 L 462.3 183.6 L 485.5 165.4 L 511.1 150.4 L 538.7 139.0 L 567.7 131.4 L 597.7 127.8 L 628.0 128.3 L 658.2 132.9 L 687.6 141.7 L 715.7 154.4 L 741.9 170.9 L 765.8 191.0 L 786.9 214.2 L 804.7 240.3 L 818.9 268.6 L 829.1 298.8 L 835.2 330.3 L 836.9 362.4 L 834.3 394.7 L 827.2 426.5 L 815.9 457.2 L 800.4 486.2 L 781.0 512.9 L 758.0 536.9 L 731.8 557.7 L 702.9 574.8 L 671.8 587.9 L 639.1 596.7 L 605.3 600.9 L 571.0 600.6 L 537.0 595.5 L 503.7 585.9 L 472.0 571.7 L 442.3 553.3 L 415.3 530.9 L 391.5 504.9 L 371.3 475.7 L 355.2 444.0 L 343.5 410.2 L 336.4 374.9 L 334.2 338.9 L 337.0 302.7 L 344.6 267.0 L 357.1 232.6 L 374.3 200.0 L 395.8 170.0 L 421.3 143.0 L 450.4 119.6 L 482.5 100.3 L 517.1 85.4 L 553.6 75.4 L 591.2 70.4 L 629.4 70.5 L 667.3 75.9 L 704.4 86.4 L 739.8 101.9 L 772.9 122.2 L 803.1 146.9 L 829.8 175.6 L 852.4 207.8 L 870.6 242.9 L 883.8 280.3 L 891.9 319.3 L 894.6 359.3 L 891.9 399.4 L 883.6 438.9 L 870.1 477.1 L 851.4 513.3 L 827.9 546.7 L 799.9 576.7 L 768.0 602.8 L 732.6 624.4 L 694.6 641.0"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                    style={{
                      left: `${(step.x / 1200) * 100}%`,
                      top: `${(step.y / 700) * 100}%`,
                    }}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveStepId(step.id)}
                      className="h-6 w-6 rounded-full border-2 border-zinc-900 bg-white transition-colors duration-200 hover:border-orange-400"
                      aria-label={`Show ${step.label}`}
                    />
                    <span className="mt-2 rounded-sm bg-white/90 px-2 py-1 text-center font-serif text-[11px] italic text-zinc-900 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
              </figure>

              <aside className="flex w-full flex-col gap-6 lg:w-[35%]">
                {activeStep ? (
                  <div className="rounded-none border border-zinc-200 bg-white p-6">
                    <img
                      src={activeStep.image}
                      alt={activeStep.label}
                      className="h-52 w-full object-cover"
                    />
                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                      Process Phase
                    </p>
                    <h3 className="mt-3 font-serif text-lg italic text-zinc-900">
                      {activeStep.label}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {activeStep.description}
                    </p>
                  </div>
                ) : null}
              </aside>
            </div>
          </section>

          <section className="space-y-4">
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              The process page documents the project’s material, technical, and
              ecological development across research, prototyping, and
              fabrication. It focuses on how each instrument evolves through
              observation, testing, and refinement.
            </p>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              This section collects prototypes, experiments, and build notes to
              show how biological behavior is translated into sensing systems
              and sound.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-sm uppercase tracking-[0.3em] text-zinc-500">
              Process highlights
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Field observation and organism care
            </p>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Sensor and tracking pipeline tests
            </p>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Audio mapping and synthesis experiments
            </p>
            <p className="max-w-3xl text-sm leading-6 text-zinc-600">
              Iterative tank design and fabrication
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
