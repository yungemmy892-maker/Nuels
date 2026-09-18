"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ExternalLink, Github, Folder } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/data";

const filters = [
  { id: "all", label: "all" },
  { id: "fullstack", label: "full-stack" },
  { id: "frontend", label: "frontend" },
  { id: "tool", label: "tools" },
] as const;

const accentText: Record<string, string> = {
  mint: "text-mint",
  amber: "text-amber",
  violet: "text-violet",
};
const accentBorder: Record<string, string> = {
  mint: "border-mint/40",
  amber: "border-amber/40",
  violet: "border-violet/40",
};

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-line last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 py-4 text-left transition-colors hover:bg-panel2/40 sm:items-center sm:gap-4"
      >
        <Folder className={cn("mt-0.5 h-4 w-4 flex-shrink-0 sm:mt-0", accentText[project.accent])} aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-semibold text-ink">{project.title}</span>
            <span className="hidden text-xs text-faint sm:inline">{project.tech.slice(0, 3).join(", ")}</span>
          </div>
          <p className="mt-0.5 truncate text-sm text-dim sm:pr-8">{project.description}</p>
        </div>
        <ChevronRight
          className={cn("h-4 w-4 flex-shrink-0 text-faint transition-transform", open && "rotate-90 text-ink")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className={cn("mb-5 ml-7 border-l-2 pl-4 sm:ml-8", accentBorder[project.accent])}>
              <p className="max-w-[64ch] text-sm leading-relaxed text-dim">{project.longDescription}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t} className="border border-line-bright px-2 py-0.5 text-xs text-dim">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex items-center gap-1.5 text-sm font-medium hover:underline", accentText[project.accent])}
                >
                  Live demo <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-dim hover:text-ink hover:underline"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" /> Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-sm text-dim sm:text-base">
            <span className="text-mint">$</span> ls ./projects{" "}
            <span className="text-faint">--sort=featured</span>
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "border-b pb-0.5 transition-colors",
                  filter === f.id ? "border-mint text-mint" : "border-transparent text-dim hover:text-ink"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="border border-line bg-panel/70 px-4 sm:px-5">
          {list.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
