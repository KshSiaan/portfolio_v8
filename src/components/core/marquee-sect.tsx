"use client";
import { Marquee } from "@/components/ui/marquee";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../kibo-ui/spinner";
import { GitHubProjectCard } from "./github-card";
export function MarqueeSection() {
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
      <div className={`flex justify-center items-center h-24 mx-auto`}>
        <Spinner variant="ring" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full min-h-12 flex justify-center items-center">
        {JSON.stringify(error)}
      </div>
    );
  }
  const firstRow = data?.data?.slice(0, data.data.length / 2);
  const secondRow = data?.data?.slice(data.data.length / 2);
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-6">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow?.map((review: any) => (
          <GitHubProjectCard key={review.name} project={review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow?.map((review: any) => (
          <GitHubProjectCard key={review.name} project={review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
