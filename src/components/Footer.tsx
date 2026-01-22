
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdEmail, MdPhone } from "react-icons/md";
// import { FiSend } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: <FaTelegramPlane />, href: "https://t.me/", label: "Telegram" },
  { icon: <FaInstagram />, href: "https://instagram.com/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s Connect there
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Hire me <HiArrowUpRight className="text-xl" />
          </a>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand / About */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-lg font-bold">
                MP
              </div>
              <div className="text-xl font-bold">MohammadPiramun</div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Frontend developer focused on clean UI, responsive layouts, and
              modern React apps. I build landing pages, dashboards, and
              Firebase-powered products.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
                  aria-label={s.label}
                  title={s.label}
                >
                  <span className="text-lg">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-orange-400">Navigation</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="text-sm font-semibold text-orange-400">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MdPhone className="text-white/60" />
                <span>+7 776 044 0657</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-white/60" />
                <span>piramun.mohammad@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Almaty, Kazakhstan </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="md:col-span-3">
            <div className="text-sm font-semibold text-orange-400">
              Get the latest information
            </div>

            <form
              className="mt-4 flex items-center overflow-hidden rounded-xl bg-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="m-1 inline-flex h-11 w-12 items-center justify-center rounded-lg bg-orange-500 text-white transition hover:bg-orange-600"
                aria-label="Subscribe"
                title="Subscribe"
              >
                <FiSend className="text-lg" />
              </button>
            </form>

            <p className="mt-3 text-xs text-white/50">
              No spam. Just updates about projects and new work.
            </p>
          </div> */}
        </div>

        {/* Bottom divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} MohammadPiramun. All Rights Reserved.
          </div>

          <div className="flex flex-wrap gap-2">
            <a className="hover:text-white" href="#">
              User Terms &amp; Conditions
            </a>
            <span className="text-white/25">|</span>
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
