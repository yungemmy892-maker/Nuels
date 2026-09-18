"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function StatusBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Lagos",
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="bg-panel">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3 text-xs text-faint">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
            Nigeria (WAT){time ? ` · ${time}` : ""}
          </span>
          <span className="hidden sm:inline">© {new Date().getFullYear()} Emmanuel Okon</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Next.js · Tailwind · Framer Motion</span>
          <a href="#top" className="flex items-center gap-1 transition-colors hover:text-mint">
            top <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
