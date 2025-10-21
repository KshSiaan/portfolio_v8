"use client";
import { MarqueeSection } from "@/components/core/marquee-sect";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { Spinner } from "@/components/kibo-ui/spinner";
import RotatingText from "@/components/RotatingText";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRightIcon, ChevronUpIcon, MailIcon } from "lucide-react";
import { useAnimation, useInView, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  FaBehanceSquare,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  const stats = [
    { value: "6+", label: "Years of self learning" },
    { value: "1+", label: "Years of experience as a Developer" },
    { value: "22+", label: "Years of Inspiration" },
  ];
  const texts = [
    "A front-end wizard 🪄",
    "A full-stack chaos tamer 💻🔥",
    "A midnight music maker 🎶🌙",
    "A doodle overlord ✏️👑",
    "A curious student of life 📚✨",
    "A design mischief maker 🎨😈",
  ];
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  async function getCurrData() {
    const call = await fetch("/api/currentProject");
    const res = await call.json();
    return res;
  }
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["current"],
    queryFn: getCurrData,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!isPending) {
      console.log(data);
    }
  }, [isPending]);

  return (
    <>
      <header className="h-[calc(100dvh-64px)] flex flex-col justify-center items-center gap-16 px-8 md:px-16 border-b-6 border-primary">
        <h1 className="font-black text-7xl md:text-8xl lg:text-9xl leading-snug text-center">
          Hello 👋 I'm{" "}
          <RoughNotation
            type="highlight"
            color="#34b27b"
            animate
            show
            strokeWidth={5}
          >
            Raven
          </RoughNotation>
        </h1>

        <div className="flex flex-col md:flex-row gap-6 text-2xl md:text-3xl justify-center items-center text-center font-semibold text-muted-foreground">
          <span>What am I??</span>
          <RotatingText
            splitBy="characters"
            rotationInterval={3000}
            texts={texts}
          />
        </div>
      </header>
      <main>
        <section className="min-h-dvh grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-primary w-full flex items-center justify-center px-6 py-12 lg:py-0 order-2 lg:order-1">
            <div className="flex flex-col gap-8 lg:gap-12 max-w-md">
              {stats.map((stat, index: number) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div key={index} className="text-center">
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground mb-2">
                    {stat.value}
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary-foreground/90">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full min-h-64 sm:h-96 lg:h-full overflow-hidden bg-muted order-1 lg:order-2">
            <Image
              src="/monteverde.png"
              fill
              alt="monteverde angel"
              className="object-cover object-top"
              priority
            />
            <div className="hidden lg:block absolute -top-6 -left-10 w-24 h-[120%] bg-primary -rotate-6" />
          </div>
        </section>
        <section className="h-dvh flex flex-col gap-6 justify-center items-center">
          <h2 className="text-2xl relative" ref={ref}>
            <RoughNotation
              type="underline"
              strokeWidth={1}
              iterations={3}
              animationDelay={500}
              show={isInView}
            >
              I like keeping things simple.
            </RoughNotation>
          </h2>

          {isPending ? (
            <Spinner variant="ring" />
          ) : isError ? (
            <p>{error?.message ?? "Something went wrong"}</p>
          ) : (
            <Link href={data?.html_url ?? ""}>
              <Announcement
                className="group hover:bg-primary hover:text-background"
                themed
              >
                <AnnouncementTag>Latest update</AnnouncementTag>
                <AnnouncementTitle>
                  Current Project: {data?.name}
                  <ArrowUpRightIcon
                    className="shrink-0 text-muted-foreground group-hover:ml-4 group-hover:text-background transition-all"
                    size={16}
                  />
                </AnnouncementTitle>
              </Announcement>
            </Link>
          )}
        </section>
        <section className="w-full h-fit p-6 space-y-6 border-t-4 mb-[20dvh]">
          <h4 className="font-semibold">About Me:</h4>
          <p className="text-sm bg-background">
            <b>At the edge of 2019, I had my first code written</b>
            ,<br />
            Exoloring the possibilities became my main hobby since then. Had{" "}
            <b>started learning React in the late 2022</b> and soon got into the
            real world of the dev community. This is the fun and benifit of Self
            learning now isnt it? where you explore the world at your own feet,
            You get inspiration from others, the nature, the people the rules
            and the chaos. After a long journey in the Vanilla Javascript and
            React, I clearly was ready to move on to have some real world
            challange. what to choose really? It is what i reached my name with.
            Happened to be around{" "}
            <b>
              by the midst of 2023 when i started working on this Full Stack
              Framework called Next Js.
            </b>{" "}
            There is when i got my hands on the Back-End-Development. and
            Design?? Come on, Its a part of life itself!
            <br />
            <br />
            <b>Joined "Sparktech Agency" in February of 2025</b>, Helping tons
            of businesses to take place with a confident startup. From a fully
            functional E-commerce Marketplace to Crutial Business management
            systems. Collaborating with App developers, Back end developers. The
            freedom also led me to work with UI UX, Project management and many
            more. I finally found my true self, Hearing from Various
            Entrepreneurs and Interesting peoples about their ideas,
            creativities, vision. where my goal was to complete a project each
            time, soon changed to{" "}
            <b>
              " I want to make them feel secured and confident with what i build
              ".
            </b>
            <br />
            <br />I dont know what's there for my future, as im still studying.
            currently at the moment when writing this, Im in the first semester,
            hoping to complete BSC in Computer Science Engineering. But i
            believe i have the passion and potential to run on the Global scale.
            why??
            <br />
            <br />
            <b>
              I bring a fresh, forward-thinking approach to every project I take
              on. I value community-driven innovation and have a strong grasp of
              optimized system architecture. Animation, 3D, AI—you name it, I’m
              ready to build it.
            </b>
          </p>
        </section>
        <section className="h-dvh w-full space-y-12 p-12">
          <h2 className="text-2xl font-semibold">My Projects:</h2>
          <MarqueeSection />
        </section>
        <footer className="py-24 lg:p-0 lg:h-dvh bg-primary px-6 flex flex-col justify-around items-center gap-12 lg:gap-0 relative">
          <h1 className="text-5xl lg:text-8xl font-bold z-30">
            Lets Connect!!
          </h1>
          <div className="p-6 z-30 bg-background h-1/2 lg:w-1/2 px-[6%] rounded-lg shadow-[inset_2px_2px_5px_#3fb88350,2px_2px_10px_#48484850]! flex flex-col gap-6 justify-center items-center">
            <Button className="w-full cursor-pointer" size={"lg"} asChild>
              <a
                href="mailto:kshsiaan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon /> Send an Email (kshsiaan@gmail.com)
              </a>
            </Button>
            <Button className="w-full cursor-pointer" size={"lg"} asChild>
              <a
                href="https://wa.me/8801904387966"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                Send me a message
              </a>
            </Button>
            <Button className="w-full cursor-pointer" size={"lg"} asChild>
              <a
                href="https://www.linkedin.com/in/shahibul-hasan-777395302/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> Connect with me
              </a>
            </Button>
            <Button className="w-full cursor-pointer" size={"lg"} asChild>
              <a
                href="https://github.com/KshSiaan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Check my Github
              </a>
            </Button>
            <Button className="w-full cursor-pointer" size={"lg"} asChild>
              <a
                href="https://www.behance.net/kshsiaan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehanceSquare /> Explore my Behance
              </a>
            </Button>
          </div>
          <div className="absolute z-20 h-full w-full bg-[radial-gradient(#4ec792_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute bottom-6 right-6 rounded-full cursor-pointer z-40 animate-bounce"
            variant={"outline"}
            size={"icon-lg"}
          >
            <ChevronUpIcon />
          </Button>
        </footer>
      </main>
    </>
  );
}
