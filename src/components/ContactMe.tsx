import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

const baseItems = [
  "React UI",
  "Tailwind CSS",
  "TypeScript",
  "Firebase",
  "Dashboards",
  "Landing Pages",
  "Responsive Design",
  "Bug Fixes",
];

const items = Array(2).fill(baseItems).flat();
const trustItems = [
  {
    icon: <AiFillStar className="h-5 w-5 text-orange-500" />,
    text: "Client-Focused Delivery",
  },
  {
    icon: <FaReact className="h-5 w-5 text-sky-500" />,
    text: "React • Tailwind • TypeScript",
  },
  {
    icon: <MdOutlinePhoneIphone className="h-5 w-5 text-emerald-500" />,
    text: "Responsive & Clean Code",
  },
];

export default function ContactMe() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Title */}
        <h2
          id="cta-title"
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Have an Awesome Project Idea?
          <span className="block text-orange-500">Let’s Discuss</span>
        </h2>

        <p className="mt-3 text-base text-slate-500 sm:text-lg">
          I’m open to new projects, collaborations, and ideas.
        </p>

        {/* Email CTA */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-row items-stretch gap-3 rounded-full md:border border-gray-200 px-4 py-3  sm:flex-row sm:items-center">
            {/* Icon */}
            {/* <div className="mx-auto flex h-12 w-16 items-center justify-center rounded-full bg-orange-500/15 sm:mx-0">
              <MdEmail className="text-orange-500 text-xl" />
            </div> */}

            {/* Form */}
            <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center ">
              <div className=" flex-1 flex flex-row gap-4 border border-gray-200 rounded-full px-2 py-2 md:border-0">
                 <div className="mx-auto flex h-12 w-16 items-center justify-center rounded-full bg-orange-500/15 sm:mx-0">
              <MdEmail className="text-orange-500 text-xl" />
            </div>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-transparent px-2 py-2 text-base outline-none placeholder:text-slate-400"
              />
              </div>
                  <button
                 type="submit"
                className=" rounded-full  bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
              >
                Send
              </button>
            
            </form>
             
          </div>
        </div>

        {/* Trust signals */}
        <div className="mx-auto mt-8 grid max-w-fit md:max-w-4xl grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-3">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center  gap-3 sm:justify-start"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
                {item.icon}
              </span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    {/* ======Banner=========== */}
    <div className="mx-auto max-w-500 mt-20 overflow-hidden rounded-md bg-orange-500 px-2 py-8 shadow-md shadow-primary">
  <div className="-rotate-2 origin-center -translate-x-[10%]">
    <div className="mx-auto w-[130%]  bg-white py-5">
      <div className="flex items-center justify-center gap-x-4 px-6 text-xl font-semibold text-slate-900 sm:text-5xl whitespace-nowrap ">
        {items.map((label, i) => (
          <React.Fragment key={`${label}-${i}`}>
            <span className="px-5">{label}</span>
            {i !== items.length - 1 && (
              <HiSparkles className="text-orange-500 text-2xl sm:text-3xl shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
