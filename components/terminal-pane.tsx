import { cn } from "@/lib/utils";

export function TerminalPane({
  command,
  meta,
  children,
  className,
}: {
  command: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-md border border-line bg-panel/70 shadow-panel", className)}>
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5 sm:px-5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-line-bright" />
          <span className="h-2.5 w-2.5 rounded-full border border-line-bright" />
          <span className="h-2.5 w-2.5 rounded-full border border-line-bright" />
        </div>
        <p className="text-xs text-dim">
          <span className="text-mint">$</span> {command}
        </p>
        {meta && <p className="ml-auto hidden text-xs text-faint sm:block">{meta}</p>}
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </div>
  );
}
