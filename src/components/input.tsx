import { Input as BaseUiInput, type InputProps } from "@base-ui/react/input";
import { ErrorIcon } from "@/components/icon";

export function Input({
  label,
  error,
  ...props
}: { label?: string; error?: string } & InputProps) {
  return (
    <div className="space-y-2 w-full max-w-input">
      {label && (
        <label htmlFor={props.id} className="block text-preset-4-medium">
          {label}
        </label>
      )}

      <BaseUiInput
        className="h-10 rounded w-full drop-shadow-offset-sm border-[0.09375rem] pl-3.5 focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800 placeholder:text-neutral-600"
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
