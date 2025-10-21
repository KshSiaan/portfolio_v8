"use client";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiReactquery, SiThreedotjs, SiTypescript } from "react-icons/si";
import { TbBrandCpp, TbBrandFramerMotion } from "react-icons/tb";
import { RoughNotation } from "react-rough-notation";

export default function Page() {
  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center bg-background relative px-4 py-12 sm:py-16 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight z-30"
        >
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Skillset
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-base sm:text-lg text-zinc-400 text-center max-w-md z-30"
        >
          a glimpse into what I build, break, and perfect.
        </motion.p>
        <StripedPattern
          color="#fb2c3640"
          className="[mask-image:radial-gradient(50dvh_circle_at_center,white,transparent)]"
        />
      </section>

      <section className="min-h-screen md:h-dvh py-12 md:py-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-7 min-h-screen md:h-full gap-4 md:gap-0">
          <div className="md:col-span-3 flex h-full justify-around items-center px-4 md:px-0">
            <div className="h-auto md:h-1/2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                <RoughNotation type="box" show color="">
                  The Base Skills
                </RoughNotation>
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col h-full justify-around items-center px-4 md:px-0">
            <div className="h-auto md:h-1/2"></div>
            <div className="h-auto md:h-1/2">
              <ul className="text-base sm:text-lg md:text-xl font-bold space-y-1">
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  HTML <FaHtml5 />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  CSS / SCSS / SASS <FaCss3Alt />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  JavaScript <FaJs />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  C & C++ <TbBrandCpp />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen md:h-dvh py-12 md:py-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-7 min-h-screen md:h-full gap-4 md:gap-0">
          <div className="md:col-span-4 flex flex-col h-full justify-around items-center px-4 md:px-0 order-2 md:order-1">
            <div className="h-auto md:h-1/2 w-full"></div>
            <div className="h-auto md:h-1/2">
              <ul className="text-base sm:text-lg md:text-xl font-bold space-y-1">
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  React <FaReact />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Tailwind + Shadcn UI
                  <RiTailwindCssFill />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Typescript <SiTypescript />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Node JS + Express JS <FaNodeJs />
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 flex h-full justify-around items-center px-4 md:px-0 order-1 md:order-2">
            <div className="h-auto md:h-1/2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                <RoughNotation type="underline" show color="">
                  The Core Skillsets
                </RoughNotation>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen md:h-dvh py-12 md:py-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-7 min-h-screen md:h-full gap-4 md:gap-0">
          <div className="md:col-span-3 flex h-full justify-around items-center px-4 md:px-0">
            <div className="h-auto md:h-1/2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                <RoughNotation type="circle" show color="">
                  My High priority Skills
                </RoughNotation>
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col h-full justify-around items-center px-4 md:px-0">
            <div className="h-auto md:h-1/2 w-full"></div>
            <div className="h-auto md:h-1/2">
              <ul className="text-base sm:text-lg md:text-xl font-bold space-y-1">
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Next JS <RiNextjsFill />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Framer Motion <TbBrandFramerMotion />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Three JS <SiThreedotjs />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Figma + UI UX <FaFigma />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  React Query <SiReactquery />
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Supabase <RiSupabaseFill />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen md:h-dvh py-12 md:py-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-7 min-h-screen md:h-full gap-4 md:gap-0">
          <div className="md:col-span-4 flex flex-col h-full justify-around items-center px-4 md:px-0 order-2 md:order-1">
            <div className="h-auto md:h-1/2 w-full"></div>
            <div className="h-auto md:h-1/2">
              <ul className="text-base sm:text-lg md:text-xl font-bold space-y-1">
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Countless libraries and frameworks
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  AI Integration
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  Animation and 3D using Motion/React-Three-Fiber
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
                  A strong focus on the trends and the developers worldwide!
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 flex h-full justify-around items-center px-4 md:px-0 order-1 md:order-2">
            <div className="h-auto md:h-1/2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                <RoughNotation type="highlight" show color="#34b27b">
                  My Superpowers!!
                </RoughNotation>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <RoughNotation type="underline" iterations={5} show>
        <div className="w-full"> `</div>
      </RoughNotation>

      <section className="min-h-screen md:h-dvh py-12 md:pt-12 flex flex-col justify-around items-center px-4">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          My Hobbies
        </h2>
        <ul className="text-base sm:text-lg md:text-xl font-bold space-y-1 max-w-2xl">
          <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
            Making Music 🪗
          </li>
          <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
            Doodling (Drawing but sketch only) ✏️
          </li>
          <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
            Reading Philosophy and doing Science stuffs 😁
          </li>
          <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
            Watching Anime 🎎
          </li>
          <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
            Gaming 🎮
          </li>
          <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
            Making friends 🫱🏼‍🫲🏼
          </li>
          <li className="flex items-center gap-2 before:content-['•'] before:mr-2 before:text-current">
            Many more.....
          </li>
        </ul>
      </section>
    </main>
  );
}
