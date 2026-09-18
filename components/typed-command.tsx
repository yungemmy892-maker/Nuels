"use client";

import { useEffect, useState } from "react";

export function TypedCommand({
  text,
  onDone,
  startDelay = 300,
  speed = 55,
}: {
  text: string;
  onDone?: () => void;
  startDelay?: number;
  speed?: number;
}) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(text);
      setDone(true);
      onDone?.();
      return;
    }

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const start = setTimeout(function tick() {
      timeout = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timeout);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span>
      {shown}
      <span
        className={done ? "animate-blink" : ""}
        style={{ display: "inline-block", width: "0.55ch", height: "1em", background: "#6ee7b7", marginLeft: 2, verticalAlign: "-0.15em" }}
        aria-hidden="true"
      />
    </span>
  );
}
