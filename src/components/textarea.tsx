import * as React from "react";

import { cn } from "@/lib/utils";
import { ErrorIcon } from "@/components/icon";

export function Textarea({
  label,
  error,
  className,
  ...props
}: { label?: string; error?: string } & React.ComponentProps<"textarea">) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={props.id} className="block text-preset-4-medium">
          {label}
        </label>
      )}

      <textarea
        data-slot="textarea"
        className={cn(
          "border-input max-w-input border-[0.09375rem] focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-neutral-600",
          className,
        )}
        placeholder={props?.placeholder ?? "Placeholder"}
        {...props}
      />

      {error && (
        <p className="flex gap-2 items-center text-preset-5-regular">
          <ErrorIcon /> <span className="text-accent-pink-700">{error}</span>
        </p>
      )}
    </div>
  );
}
