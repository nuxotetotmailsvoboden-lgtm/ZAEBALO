export default function ProjectCard({ title, desc, tags, emoji }: any) {
  return (
    <div className="glass overflow-hidden hover:border-purple-500/30 transition">
      <div className="h-32 flex items-center justify-center text-5xl bg-purple-500/5">{emoji}</div>
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-purple-200/60">{desc}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((t: string) => (
            <span key={t} className="text-xs bg-white/5 px-2 py-0.5 rounded-full border border-white/5">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
