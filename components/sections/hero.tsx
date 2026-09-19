"use client";

import { useRef, useState, type PointerEvent } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Music2, Mail, ArrowDownToLine, ArrowRight } from "lucide-react";
import { TypedCommand } from "@/components/typed-command";
import { social } from "@/lib/data";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  Twitter: Twitter,
  TikTok: Music2,
  Email: Mail,
};

export function Hero() {
  const [typed, setTyped] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    const el = glowRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-line pt-24 sm:pt-28"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(550px circle at var(--mx, 50%) var(--my, 30%), rgba(110,231,183,0.14), transparent 70%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:py-24">
        <div className="max-w-content">
          <p className="mb-6 font-mono text-sm text-dim sm:text-base">
            <span className="text-mint">emmanuel@portfolio</span>
            <span className="text-faint">:~$</span>{" "}
            <TypedCommand text="whoami" onDone={() => setTyped(true)} />
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={typed ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Emmanuel Okon
            </h1>
            <p className="mt-3 text-lg text-ink sm:text-xl">
              Full-stack developer - <span className="text-mint">React</span>,{" "}
              <span className="text-mint">Next.js</span>, <span className="text-mint">Django</span> &{" "}
              <span className="text-mint">FastAPI</span>
            </p>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-dim">
              I build high-performance web experiences at the intersection of engineering and
              design from real-time interfaces to the backends that power them. Based in Nigeria,
              currently shipping production apps full-time.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 border border-mint/25 bg-mint/[0.06] px-3 py-1.5 text-xs text-mint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" aria-hidden="true" />
              open to work
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-mint px-5 py-2.5 text-sm font-semibold text-void transition-colors hover:bg-mint/90"
              >
                View projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-line-bright px-5 py-2.5 text-sm text-ink transition-colors hover:border-mint hover:text-mint"
              >
                <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                Download resume
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {social.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-dim transition-colors hover:text-mint"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
