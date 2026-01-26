import { BsPalette2 } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { BsFillLightningFill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { MdCleaningServices } from "react-icons/md";
import React from "react";

type Service = {
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  tag: string;
  badge?: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Landing Page",
    subtitle: "Conversion-focused",
    desc: "High-converting landing pages designed for clarity, speed, and responsiveness.",
    bullets: ["Responsive + SEO basics", "Performance (Lighthouse targets)", "Clean sections + animations"],
    tag: "Delivery: 1–3 pages • 5–7 days",
    badge: "Popular",
    icon: <RiPagesLine/>,
  },
  {
    title: "Frontend Development",
    subtitle: "React",
    desc: "Interactive, scalable UIs built with modern frontend patterns and clean code.",
    bullets: ["React + TypeScript components", "State / forms / validation", "Integration with API / Firebase"],
    tag: "Dashboard • CRUD • Auth",
    icon:<FaReact/>,
  },
  {
    title: "UI Implementation",
    subtitle: "Design to Code",
    desc: "Pixel-perfect UI from Figma with accessible states and consistent design tokens.",
    bullets: ["Pixel-perfect from Figma", "Design tokens / Tailwind system", "Accessible UI states (hover/focus/disabled)"],
    tag: "Component library • UI kit",
    icon: <BsPalette2/>,
  },
];


const trustList=
[
            { label: "Fast delivery", icon: <BsFillLightningFill /> },
            { label: "Clean code", icon: <MdCleaningServices/> },
            { label: "Responsive", icon: <CiMobile3/> },
           
          ]

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[url('/Services_bg.png')] bg-no-repeat bg-center bg-cover rounded-3xl py-20 text-white" >
      {/* background (subtle diagonal) */}
       <img
    src="/Services_bg.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-black/45" />

    <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_10%,transparent_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.85)_100%)]" />

    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_75%_18%,rgba(249,115,22,0.28),transparent_45%),radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_40%)]" />

    <div className="absolute inset-0 opacity-35 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_30%,rgba(255,255,255,0.02)_70%,transparent_100%)]" />
  </div>

 

      <div className="relative mx-auto w-full max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Services</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              From UI to production-ready with{" "}
              <span className="text-orange-400">React + Tailwind + TypeScript</span>
            </p>

            <div className="mt-6 inline-flex items-center gap-3 text-xs text-white/60">
              <span className="h-px w-10 bg-white/15" />
              <span className="tracking-wide">Most requested packages</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-black shadow-[0_10px_30px_rgba(249,115,22,0.25)] transition hover:bg-orange-400"
          >
            Get a quote
            <span aria-hidden>›</span>
          </a>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:-translate-y-1 hover:border-orange-500/40"
            >
              {/* glow */}
              <div className="pointer-events-none absolute -inset-24 opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.22),transparent_55%)]" />
              </div>

              {/* badge */}
              {s.badge && (
                <div className="absolute right-5 top-5 rounded-full bg-orange-500/15 px-3 py-1 text-xs text-orange-300 ring-1 ring-orange-500/25">
                  {s.badge}
                </div>
              )}

              <div className="relative flex flex-col items-start gap-y-4">
                <div className="grid h-15 w-15 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 text-4xl group-hover:text-primary transition ">
                  {s.icon}
                </div>
                <div className="flex flex-col space-y-2 ml-2 mt-4">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-md text-white/50">{s.subtitle}</p>
                </div>
              </div>

              <p className="relative mt-4 text-base leading-6 text-white/70">{s.desc}</p>

              <ul className="relative mt-5 space-y-3 text-sm mb-10 ml-2">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-white/80">
                    <span className="mt-1 h-3 w-3 flex-none rounded-full bg-primary/80 ring-2 ring-orange-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-orange-200 group-hover:text-primary-50">
                {s.tag}
              </div>
            </article>
          ))}
        </div>

        {/* bottom trust row */}
        <div className="mt-20 flex flex-wrap gap-3 justify-center ">
          {trustList.map((x) => (
            <div
              key={x.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              <span className="text-primary-50 text-xl">{x.icon}</span>
              <span className="text-primary">{x.label}</span>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
}
