import { TerminalPane } from "@/components/terminal-pane";
import { experience } from "@/lib/data";

function formatRange(start: string, end: string) {
  const fmt = (d: string) => {
    if (d === "present") return "now";
    const [y, m] = d.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(m, 10) - 1]} ${y}`;
  };
  return `${fmt(start)} → ${fmt(end)}`;
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <TerminalPane command="cat experience.log" meta="experience.log">
          <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span
                  className="absolute -left-[29px] top-1 h-2.5 w-2.5 border border-mint bg-void sm:-left-[37px]"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-faint">{formatRange(job.start, job.end)}</p>
                <h3 className="mt-1 text-base font-semibold text-ink">
                  {job.role} <span className="font-normal text-dim">@ {job.company}</span>
                </h3>
                <p className="text-xs text-faint">{job.location}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-dim">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 bg-line-bright" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </TerminalPane>
      </div>
    </section>
  );
}
