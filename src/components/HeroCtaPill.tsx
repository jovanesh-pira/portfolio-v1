import { FiArrowUpRight } from "react-icons/fi";

type HeroCtaPillProps = {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export default function HeroCtaPill({
  primaryText = "Portfolio",
  primaryHref = "#portfolio",
  secondaryText = "Hire me",
  secondaryHref = "#contact",
}: HeroCtaPillProps) {
  return (
    <div
      className="
       absolute bottom-0 lg:bottom-5 left-[50%] -translate-[50%]
        inline-flex items-center justify-center   gap-x-5 md:gap-4
        rounded-full
        border border-white/25
        bg-white/15
        backdrop-blur-md
        p-2
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
      "
    >
      <a
        href={primaryHref}
        className="
          inline-flex items-center gap-2
          rounded-full
          bg-primary
          px-6 py-2.5
          text-xl font-medium text-white
          shadow-[inset_0_0_0_1px_rgba(255,255,255,0.20)]
          hover:brightness-105 transition
        "
      >
        {primaryText}
             <FiArrowUpRight className="text-2xl md:text-4xl"/>
      </a>

      <a
        href={secondaryHref}
        className="
          inline-flex items-center
          rounded-full
          px-6 py-2.5
          text-2xl font-medium
          text-white
          text-nowrap
          hover:bg-white/10 transition
        "
      >
        {secondaryText}
      </a>
    </div>
  );
}
