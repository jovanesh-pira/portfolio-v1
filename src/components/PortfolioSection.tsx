import React, { useMemo, useState } from "react";

type ProjectStatus = "in-progress" | "planned" | "done";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  image?: string; // optional
  links?: { label: string; href: string }[];
};

const projectsSeed: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    subtitle: "React + Tailwind • RTL Ready",
    description:
      "This website is currently under development. Over time, real projects, case studies, and new sections will be added.",
    tags: ["React", "Tailwind", "Responsive", "RTL"],
    status: "in-progress",
    links: [{ label: "View Sections", href: "#sections" }],
  },
  {
    id: "ui-library",
    title: "UI Components Library",
    subtitle: "Buttons • Inputs • Cards • Modals",
    description:
      "Building a reusable UI component library with real states (hover, focus, disabled), proper contrast, and consistent spacing.",
    tags: ["Design System", "Components", "Accessibility"],
    status: "planned",
    links: [{ label: "See Components", href: "#components" }],
  },
  {
    id: "practice",
    title: "UI → Code Practice Builds",
    subtitle: "Clean Layouts • True Responsive",
    description:
      "Practicing UI-to-code implementation with a strong focus on grid, flexbox, responsiveness, and clean Tailwind structure.",
    tags: ["Layout", "Grid", "Responsive", "Practice"],
    status: "planned",
    links: [{ label: "See Gallery", href: "#gallery" }],
  },
];


function cn(...classes: (string | undefined | false)[]) {
  console.log(classes.filter(Boolean))
  return classes.filter(Boolean).join(" ");
}


function CreateBadge({status}:{status:ProjectStatus}){
  console.log(status)
  let cls = ""
  let baseCls="rounded-full border px-3 py-1 text-xs"
  switch(status){
    case "in-progress":
       cls="bg-orange-500/15 text-orange-200 border-orange-400/40"
       break
     case "planned"  :
      cls="bg-white/10 text-white/80 border-white/15"
      break
    case "done":
      cls="bg-emerald-500/15 text-emerald-200 border-emerald-400/40"
      break
      default:
        cls=""
  }
  return(
    <span className={`${baseCls} ${cls}`}>
      {status}
    </span>
  )
}

function StatusBadge({ status }: { status: ProjectStatus }) {
  const map: Record<ProjectStatus, { label: string; cls: string }> = {
  "in-progress": {
    label: "In Progress",
    cls: "bg-orange-500/15 text-orange-200 border-orange-400/40",
  },
  planned: {
    label: "Planned",
    cls: "bg-white/10 text-white/80 border-white/15",
  },
  done: {
    label: "Completed",
    cls: "bg-emerald-500/15 text-emerald-200 border-emerald-400/40",
  },
};


  return (
    <span className={cn("rounded-full border px-3 py-1 text-xs", map[status].cls)}>
      {map[status].label}
    </span>
  );
}

function PlaceholderThumb({ seed }: { seed: string }) {
 
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-52">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      </div>

      <div className="absolute inset-0 p-4">
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-white/20" />
            <div className="h-2 w-10 rounded bg-white/15" />
          </div>

          <div className="space-y-2">
            <div className="h-3 w-40 rounded bg-white/20" />
            <div className="h-2 w-56 rounded bg-white/10" />
            <div className="h-2 w-48 rounded bg-white/10" />
            <div className="mt-3 flex gap-2">
              <div className="h-6 w-20 rounded-full bg-white/10" />
              <div className="h-6 w-16 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-[11px] text-white/85">
        {seed}
      </div>
    </div>
  );
}

export default function PortfolioSectionPlaceholder() {
  const [activeId, setActiveId] = useState(projectsSeed[0].id);

  const active = useMemo(
    () => projectsSeed.find((p) => p.id === activeId) ?? projectsSeed[0],
    [activeId]
  );

  return (
    <section  className="w-full bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm text-white/70">Let’s take a look at my</p>

<h2 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
  Portfolio <span className="text-orange-400">Preview</span>
</h2>

<p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
  This section is currently a preview. Real-world projects will be added over
  time—but even now, you can clearly see my direction, skills, and standards.
</p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400 transition"
          >
          contact me 
          </a>
        </div>

        {/* cards */}
        <div className="mt-10">
          <div className="relative">
            
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-neutral-950 to-transparent" />

            <div className="flex gap-5 overflow-x-hidden pb-3 pt-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {projectsSeed.map((p) => {
                const isActive = p.id === activeId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={cn(
                      "snap-start text-left min-w-[260px] sm:min-w-[320px] md:min-w-[380px]",
                      "rounded-2xl border border-white/10 bg-white/5 p-3",
                      "transition hover:-translate-y-1 hover:bg-white/10",
                      isActive && "border-orange-400/60 bg-orange-500/10"
                    )}
                  >
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="h-44 w-full rounded-xl object-cover sm:h-52" />
                    ) : (
                      <PlaceholderThumb seed={p.status === "in-progress" ? "IN PROGRESS" : "COMING SOON"} />
                    )}

                    <div className="mt-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs text-white/60">{p.subtitle}</span>
                        <CreateBadge status={p.status} />
                      </div>
                      <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* detail */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <StatusBadge status={active.status} />
              </div>
              <p className="mt-1 text-sm text-white/70">{active.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {active.links?.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-4 leading-7 text-white/80">{active.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {active.tags.map((t) => (
              <span key={t} className="rounded-full bg-black/35 px-3 py-1 text-xs text-white/85">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
