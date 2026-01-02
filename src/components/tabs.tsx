import { type ReactNode } from "react";
import { Tabs as BaseUiTabs } from "@base-ui/react/tabs";

export function Tabs({
  items,
}: {
  items: { value: string; label: string; content: ReactNode }[];
}) {
  return (
    <BaseUiTabs.Root
      className="rounded-md border border-gray-200"
      defaultValue="overview"
    >
      <BaseUiTabs.List className="relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] shadow-gray-200">
        {items.map((item) => (
          <BaseUiTabs.Tab
            className="flex h-8 items-center justify-center border-0 px-2 text-sm font-medium break-keep whitespace-nowrap text-gray-600 outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm before:-outline-offset-1 before:outline-blue-800 hover:text-gray-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:outline focus-visible:before:outline-2 data-[active]:text-gray-900"
            value={item.value}
            key={`tab-${item.value}`}
          >
            {item.label}
          </BaseUiTabs.Tab>
        ))}

        <BaseUiTabs.Indicator className="absolute top-1/2 left-0 z-[-1] h-6 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-sm bg-gray-100 transition-all duration-200 ease-in-out" />
      </BaseUiTabs.List>

      {items.map((item) => (
        <BaseUiTabs.Panel
          className="relative flex h-32 items-center justify-center -outline-offset-1 outline-blue-800 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2"
          value={item.value}
          key={`panel-${item.value}`}
        >
          {item.content}
        </BaseUiTabs.Panel>
      ))}
    </BaseUiTabs.Root>
  );
}
