import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
        secondary:
          "border-transparent bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-50",
        destructive:
          "border-transparent bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-400",
        outline: "text-slate-950 dark:text-slate-50",
        success:
          "border-transparent bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400",
        warning:
          "border-transparent bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
        info: "border-transparent bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
        pending:
          "border-transparent bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
        approved:
          "border-transparent bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400",
        rejected:
          "border-transparent bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
