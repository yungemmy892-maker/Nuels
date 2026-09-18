"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-mint focus:px-3 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-3xl">
        <nav className="flex h-14 items-center justify-between rounded-md border border-line bg-void/80 px-4 text-sm shadow-panel backdrop-blur-md sm:px-5">
          <a href="#top" className="flex items-center gap-1.5 text-ink">
            <span className="text-mint">~</span>
            <span className="text-dim">/</span>
            <span className="font-medium">emmanuel</span>
            <span className="ml-0.5 h-3.5 w-[7px] animate-blink bg-mint" aria-hidden="true" />
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-dim transition-colors hover:text-mint">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center md:flex">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 border border-line-bright px-3 py-1.5 text-xs text-ink transition-colors hover:border-mint hover:text-mint"
            >
              <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden="true" />
              resume.pdf
            </a>
          </div>

          <button
            className="text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="mt-2 overflow-hidden rounded-md border border-line bg-void/95 shadow-panel backdrop-blur-md md:hidden"
            >
              <ul className="flex flex-col gap-1 px-5 py-4 text-sm">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-dim hover:text-mint"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 border border-line-bright px-3 py-1.5 text-xs text-ink hover:border-mint hover:text-mint"
                  >
                    <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden="true" />
                    resume.pdf
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
