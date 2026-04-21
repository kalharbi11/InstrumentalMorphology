export const dynamicParams = false;

const topics = [
  { id: "cybernetics", label: "Cybernetics and feedback" },
  { id: "emergence", label: "Emergence and swarm behavior" },
  { id: "adjacent", label: "The adjacent possible" },
  { id: "translation", label: "Translation, not representation" },
  { id: "instrument", label: "Musical instrument design" },
  { id: "material", label: "Material experimentation" },
  { id: "aquascape", label: "Aquascaping Basics" },
];

export async function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.id }));
}

type ResearchTopicPageProps = {
  params: {
    topic: string;
  };
};

export default function ResearchTopicPage({ params }: ResearchTopicPageProps) {
  const topic = topics.find((item) => item.id === params.topic);
  const title = topic?.label ?? "Research Topic";

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-8 pb-24 pt-28 text-zinc-900">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
          Research
        </p>
        <h1 className="font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600">
          Placeholder content for this research topic. Add summaries, notes, and
          references here.
        </p>
      </header>
    </main>
  );
}
