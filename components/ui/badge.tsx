import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border px-2 py-0.5 text-xs font-medium transition-colors rounded-sm",
  {
    variants: {
      variant: {
        default: "border-line-bright text-dim bg-panel2",
        mint: "border-mint/30 text-mint bg-mint/[0.06]",
        amber: "border-amber/30 text-amber bg-amber/[0.06]",
        violet: "border-violet/30 text-violet bg-violet/[0.06]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
