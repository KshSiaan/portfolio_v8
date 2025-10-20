"use client";
import RotatingText from "@/components/RotatingText";
import React from "react";
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

  return (
    <>
      <header className="h-[calc(100dvh-64px)] flex flex-col justify-center items-center gap-16 px-8 md:px-16">
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
        <section></section>
      </main>
    </>
  );
}
