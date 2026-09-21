import Image from "next/image";
import { TerminalPane } from "@/components/terminal-pane";

const tags = ["SvelteKit", "TypeScript", "System Design", "Web Performance", "Creative Coding", "Open Source"];
const stats = [
  { value: "2+", label: "years exp." },
  { value: "10+", label: "projects shipped" },
  { value: "6", label: "production stacks" },
];

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <TerminalPane command="cat about.md" meta="about.md">
          <div className="grid gap-10 md:grid-cols-[1fr_220px]">
            <div>
              <p className="leading-relaxed text-ink">
                I&apos;m a frontend developer who gravitated toward building for the web because I
                love turning ideas into experiences people can actually feel from the first click
                to the last pixel.
              </p>
              <p className="mt-4 leading-relaxed text-dim">
                My focus sits at the intersection of{" "}
                <span className="text-ink">clean engineering</span> and{" "}
                <span className="text-ink">intentional design</span>. I care about how systems
                scale as much as how interfaces move, feel, and guide people. Performance,
                usability, and motion are all part of the same conversation for me.
              </p>
              <p className="mt-4 leading-relaxed text-dim">
                Outside client work, I&apos;m building <span className="text-mint">VerseID</span> —
                a tool that identifies Bible verses from a spoken or typed fragment in seconds. I
                also spend time studying modern UI systems and better ways to build for the web.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="border border-line-bright px-2.5 py-1 text-xs text-dim transition-colors hover:border-mint hover:text-mint"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative aspect-square w-full overflow-hidden border border-line-bright">
                <Image
                    src="/emmanuel-okon-full-stack-developer.jpg"
                    alt="Emmanuel Okon, full-stack developer"
                  fill
                  sizes="220px"
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <dl className="grid grid-cols-1 divide-y divide-line border border-line">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between px-3 py-2.5">
                    <dt className="text-xs text-dim">{s.label}</dt>
                    <dd className="font-semibold text-mint">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </TerminalPane>
      </div>
    </section>
  );
}
