"use client";

import { cn } from "@/lib/utils";
import React, { useId, useMemo } from "react";

type SpinningTextProps = {
  text: string;
  radius?: number;
  textClassName?: string;
  speed?: number;
  direction?: "normal" | "reverse";
  className?: string;
};

const SpinningText: React.FC<SpinningTextProps> = ({
  text,
  radius = 37,
  textClassName = "text-[8px]",
  speed = 10,
  direction = "normal",
  className,
}) => {
  const reactId = useId();
  const pathId = useMemo(() => `circlePath-${reactId.replace(/[:]/g, "")}`, [reactId]);

  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <g
          className="origin-center loader-ring-spin"
          style={{
            ["--loader-ring-speed" as string]: `${speed}s`,
            ["--loader-ring-direction" as string]: direction,
          }}
        >
          <path
            id={pathId}
            d={`
              M 50,50
              m -${radius},0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
            fill="none"
          />
          <text
            className={cn(
              "uppercase font-normal tracking-widest fill-current",
              textClassName,
            )}
          >
            <textPath href={`#${pathId}`} xlinkHref={`#${pathId}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

const SpinningTextDemo = () => {
  return (
    <SpinningText
      text="FROOTCANE • FROOTCANE • FROOTCANE • FROOTCANE • "
      radius={34}
      textClassName="text-[8.5px] font-medium text-[#1f2b1b]"
      speed={8}
      direction="normal"
      className="h-full w-full"
    />
  );
};

export default SpinningTextDemo;
