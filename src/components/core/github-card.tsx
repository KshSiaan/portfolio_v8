"use client";

import { Star, GitFork, Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface ProjectData {
  name: string;
  full_name: string;
  description?: string;
  language?: string;
  stargazers_count: number;
  forks_count?: number;
  watchers_count?: number;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  updated_at: string;
}

export function GitHubProjectCard({ project }: { project: ProjectData }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full"
    >
      <div className="relative h-full bg-background flex flex-col border p-6 rounded-lg border-primary">
        {/* Header with owner info */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            {/* <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={project.owner.avatar_url || "/placeholder.svg"}
                alt={project.owner.login}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="flex-1 min-w-0">
              <p className="text-xs truncate">{project.owner.login}</p>
              <p className="text-sm font-semibold truncate">{project.name}</p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4  flex-shrink-0" />
        </div>

        {/* Language badge */}
        {/* {project.language && (
          <div className="pb-6">
            <Badge>{project.language}</Badge>
          </div>
        )} */}

        {/* Stats */}
        {/* <div className="flex items-center gap-4 mb-4 pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-1.5  hover:text-yellow-400 transition-colors">
            <Star className="w-4 h-4" />
            <span className="text-xs font-medium">
              {project.stargazers_count}
            </span>
          </div>
          {project.forks_count !== undefined && (
            <div className="flex items-center gap-1.5  hover:text-emerald-400 transition-colors">
              <GitFork className="w-4 h-4" />
              <span className="text-xs font-medium">{project.forks_count}</span>
            </div>
          )}
          {project.watchers_count !== undefined && (
            <div className="flex items-center gap-1.5  hover:text-blue-400 transition-colors">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-medium">
                {project.watchers_count}
              </span>
            </div>
          )}
        </div> */}

        {/* Footer with date */}
        <p className="text-xs text-slate-500">
          Updated {formatDate(project.updated_at)}
        </p>
      </div>
    </a>
  );
}
