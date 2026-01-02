import { cn } from "../lib/utils.ts";

export function Button({
  variant = "primary",
  children,
  ...rest
}: {
  variant?: "primary" | "secondary" | "border";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "rounded-full items-center text-neutral-900 inline-flex gap-3 px-4 py-3 border-[0.09375rem]",
        variant === "primary" &&
          "bg-accent-yellow-500 text-neutral-900 shadow-brand-sm disabled:opacity-50 hover:shadow-brand-md focus-visible:shadow-brand-md focus:outline-none focus-visible:outline-none",
        variant === "secondary" &&
          "bg-white shadow-brand-sm hover:shadow-brand-md focus:shadow-brand-md focus-visible:shadow-brand-md focus:outline-none focus-visible:outline-none",
        variant === "border" && "bg-white hover:bg-neutral-100",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
