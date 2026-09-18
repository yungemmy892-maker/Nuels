"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "01{}<>/;$#=+-*:.".split("");
const COLORS = ["#6ee7b7", "#a48cf2", "#e3b567"];
const COLOR_WEIGHTS = [0.82, 0.11, 0.07]; // mostly mint, occasional violet/amber

function pickColor() {
  const r = Math.random();
  let acc = 0;
  for (let i = 0; i < COLOR_WEIGHTS.length; i++) {
    acc += COLOR_WEIGHTS[i];
    if (r <= acc) return COLORS[i];
  }
  return COLORS[0];
}

export function BackgroundRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // leave canvas empty — texture-only, no motion

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 15;
    let columns: number;
    let drops: number[];
    let colors: string[];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.floor(window.innerWidth / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -window.innerHeight);
      colors = new Array(columns).fill(0).map(() => pickColor());
    }

    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    let lastTime = 0;
    const frameInterval = 1000 / 18; // slow, deliberate — not a busy animation

    function draw(time: number) {
      raf = requestAnimationFrame(draw);
      if (time - lastTime < frameInterval) return;
      lastTime = time;
      if (!ctx || !canvas) return;

      const w = window.innerWidth;
      const h = window.innerHeight;

      // fade previous frame for a soft trailing effect
      ctx.fillStyle = "rgba(11, 14, 20, 0.09)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px ui-monospace, "JetBrains Mono", Menlo, monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < columns; i++) {
        // sparse: most columns sit idle most frames, so it reads as scattered
        // rain rather than a solid moving field
        if (Math.random() > 0.22) continue;

        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i];

        ctx.globalAlpha = 0.22;
        ctx.fillStyle = colors[i];
        ctx.fillText(glyph, x, y);

        if (y > h && Math.random() > 0.975) {
          drops[i] = Math.random() * -200;
          colors[i] = pickColor();
        } else {
          drops[i] += fontSize;
        }
      }
      ctx.globalAlpha = 1;
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-40"
    />
  );
}
