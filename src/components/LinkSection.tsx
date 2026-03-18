import { links } from "@/lib/links";
import { LinkCard } from "./LinkCard";

export function LinkSection({
  section,
  label,
  startDelay,
}: {
  section: "connect" | "work";
  label: string;
  startDelay: number;
}) {
  const sectionLinks = links.filter((l) => l.section === section);

  return (
    <section className="w-full">
      <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-slate-500">
        {label}
      </h2>
      <div className="flex flex-col gap-3">
        {sectionLinks.map((link, i) => (
          <LinkCard key={link.href} link={link} delay={startDelay + i} />
        ))}
      </div>
    </section>
  );
}
