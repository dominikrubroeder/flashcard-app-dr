"use client";

import { Progress as BaseUIProgress } from "@base-ui/react/progress";
import { useEffect, useState } from "react";

export function Progress({
  progressLabel,
  progressValue,
}: {
  progressLabel?: string;
  progressValue?: boolean;
}) {
  const [value, setValue] = useState(20);

  // Simulate changes
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) =>
        Math.min(100, Math.round(current + Math.random() * 25)),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BaseUIProgress.Root
      className="grid w-48 grid-cols-2 gap-y-2"
      value={value}
    >
      {progressLabel && (
        <BaseUIProgress.Label className="text-sm font-medium text-gray-900">
          Export data
        </BaseUIProgress.Label>
      )}
      {progressValue && (
        <BaseUIProgress.Value className="col-start-2 text-right text-sm text-gray-900" />
      )}

      <BaseUIProgress.Track className="col-span-full border-[0.09375rem] h-2 overflow-hidden rounded-full bg-neutral-0">
        <BaseUIProgress.Indicator className="block bg-neutral-900 transition-all rounded rounded-r-full duration-500" />
      </BaseUIProgress.Track>
    </BaseUIProgress.Root>
  );
}
