"use client";
import { GitHubProjectCard } from "@/components/core/github-card";
import { Spinner } from "@/components/kibo-ui/spinner";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { motion, Variants } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Page() {
  async function getCurrData() {
    const call = await fetch("/api/allProjects");
    const res = await call.json();
    return res;
  }

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["all"],
    queryFn: getCurrData,
  });

  if (isPending) {
    return (
      <main className="h-[calc(100dvh-64px)] w-full flex justify-center items-center bg-background">
        <Spinner variant="ring" size={32} />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-dvh w-full flex justify-center items-center">
        <pre className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-amber-400 rounded-xl p-6 shadow-lg overflow-x-auto text-sm leading-relaxed border border-zinc-700">
          <code className="whitespace-pre-wrap">
            {JSON.stringify(error, null, 2)}
          </code>
        </pre>
      </main>
    );
  }

  // ✅ Properly typed animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1], // ✅ proper easing tuple
      },
    },
  };

  return (
    <main className="p-6">
      <h1 className="text-6xl font-black text-center">My Portfolio</h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        {data?.data.map((x: any) => (
          <motion.div variants={item} key={x.name}>
            <GitHubProjectCard project={x} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6">
        <Button className="w-full cursor-pointer" size={"lg"} asChild>
          <a
            href="https://github.com/KshSiaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Check my Github
          </a>
        </Button>
      </div>
    </main>
  );
}
