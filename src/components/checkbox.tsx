import { Checkbox as BaseUiCheckbox } from "@base-ui/react/checkbox";
import type { CheckboxRootProps } from "@base-ui/react";
import { CheckIcon } from "./icon";

export function Checkbox({
  props,
  label,
}: {
  props?: CheckboxRootProps;
  label?: string;
}) {
  return (
    <label className="flex items-center gap-2 text-base text-gray-900">
      <BaseUiCheckbox.Root
        className="flex size-5 items-center justify-center rounded border-[0.09375rem] drop-shadow-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-checked:bg-accent-yellow-500"
        {...props}
      >
        <BaseUiCheckbox.Indicator className="flex text-gray-50 data-unchecked:hidden">
          <CheckIcon />
        </BaseUiCheckbox.Indicator>
      </BaseUiCheckbox.Root>

      {label && <span className="select-none">{label}</span>}
    </label>
  );
}
