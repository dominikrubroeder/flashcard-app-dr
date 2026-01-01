import { cn } from "../lib/utils.ts";

export function Button({
  variant,
  children,
}: {
  variant: "primary" | "secondary" | "border";
  children: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        "rounded-full items-center inline-flex gap-3 px-4 py-3 border border-black",
        variant === "primary" &&
          "bg-accent-yellow-500 text-neutral-900 hover:drop-shadow-2xl",
        variant === "secondary" && "bg-white text-black",
      )}
    >
      {children}
    </button>
  );
}
