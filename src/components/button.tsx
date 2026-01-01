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
        "rounded-full items-center text-neutral-900 inline-flex gap-3 px-4 py-3 border border-black",
        variant === "primary" &&
          "bg-accent-yellow-500 text-neutral-900 disabled:opacity-50 shadow-[2px_2px_0_0_#000000] hover:shadow-[4px_4px_0_0_#000000] focus:shadow-[4px_4px_0_0_#5072C7] focus-visible:shadow-[4px_4px_0_0_#5072C7] focus:outline-none focus-visible:outline-none",
        variant === "secondary" &&
          "bg-white shadow-[2px_2px_0_0_#000000] hover:shadow-[4px_4px_0_0_#000000] focus:shadow-[4px_4px_0_0_#5072C7] focus-visible:shadow-[4px_4px_0_0_#5072C7] focus:outline-none focus-visible:outline-none",
        variant === "border" && "bg-white hover:bg-neutral-100",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
