import { TerminalPane } from "@/components/terminal-pane";
import { skillGroups } from "@/lib/data";

const rowAccents = ["text-mint", "text-amber", "text-violet", "text-mint"];

export function Skills() {
  return (
    <section id="skills" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <TerminalPane command="cat stack.json" meta="stack.json">
          <pre className="overflow-x-auto text-sm leading-relaxed">
            <code>
              <span className="text-faint">{"{"}</span>
              {"\n"}
              {skillGroups.map((group, gi) => (
                <span key={group.label}>
                  {"  "}
                  <span className="text-violet">&quot;{group.label}&quot;</span>
                  <span className="text-faint">: [</span>
                  {"\n"}
                  {group.items.map((item, ii) => (
                    <span key={item}>
                      {"    "}
                      <span className={rowAccents[gi % rowAccents.length]}>&quot;{item}&quot;</span>
                      {ii < group.items.length - 1 && <span className="text-faint">,</span>}
                      {"\n"}
                    </span>
                  ))}
                  {"  "}
                  <span className="text-faint">]{gi < skillGroups.length - 1 ? "," : ""}</span>
                  {"\n"}
                </span>
              ))}
              <span className="text-faint">{"}"}</span>
            </code>
          </pre>
        </TerminalPane>
      </div>
    </section>
  );
}
