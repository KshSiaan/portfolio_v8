"use client";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { Spinner } from "@/components/kibo-ui/spinner";
import RotatingText from "@/components/RotatingText";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRightIcon } from "lucide-react";
import { useAnimation, useInView, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
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
        <section className="h-dvh grid grid-cols-2">
          <div className="bg-primary w-full h-full">
            <div className="w-full flex justify-center gap-[10%] flex-col items-center h-full">
              <h1 className="text-4xl text-center font-bold text-background">
                <span className="font-black text-6xl">6+ Years</span> <br /> of
                self learning
              </h1>
              <h1 className="text-4xl text-center font-bold text-background">
                <span className="font-black text-6xl">1+ Years</span> <br /> of
                experience as a Developer
              </h1>
              <h1 className="text-4xl text-center font-bold text-background">
                <span className="font-black text-6xl">22+ Years</span> <br /> of
                Inspiration
              </h1>
            </div>
          </div>
          <div className="w-full relative h-full overflow-hidden">
            <Image
              src={"/monteverde.png"}
              fill
              alt="monteverde_angel"
              className="object-cover object-top"
            />
            <div className="h-[120%] w-[100px] absolute -top-6 -left-10 bg-primary -rotate-6" />
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
            JSON.stringify(error)
          ) : (
            <Link href={data?.data?.html_url ?? ""}>
              <Announcement
                className="group hover:bg-primary hover:text-background"
                themed
              >
                <AnnouncementTag>Latest update</AnnouncementTag>
                <AnnouncementTitle>
                  Current Project: {data?.data?.name}
                  <ArrowUpRightIcon
                    className="shrink-0 text-muted-foreground group-hover:ml-4 group-hover:text-background transition-all"
                    size={16}
                  />
                </AnnouncementTitle>
              </Announcement>
            </Link>
          )}
        </section>
        <section className="w-full h-dvh flex flex-col justify-around items-center">
          <p>
            Now so, Check out my <span className="underline">Portfolio</span> or
            my <span className="underline">Skills</span>:
          </p>
          <div className="grid grid-cols-2 gap-6 w-full px-6 rounded-lg">
            <div className="w-full aspect-video neumorphism-base bg-secondary p-6 rounded-lg flex justify-center items-center">
              <Button>Portfolio</Button>
            </div>
            <div className="w-full aspect-video neumorphism-base bg-secondary p-6 rounded-lg flex justify-center items-center">
              <Button>Skills</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
