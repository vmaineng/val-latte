"use client";

import { WheelOption } from "../types";
import { WheelSegment } from "./Wheelsegment";

interface SpinWheelProps {
  options: WheelOption[];
  rotation: number;
  isSpinning: boolean;
}

export const Spinwheel: React.FC<SpinWheelProps> = ({
  options,
  rotation,
  isSpinning,
}) => {
  return (
    <div className="relative mb-12">
      {/* Arrow pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-30 border-t-amber-900" />
      </div>

      {/* Wheel */}
      <div
        className="relative w-100 h-100 rounded-full shadow-2xl transition-none"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning
            ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
            : "none",
        }}
      >
        {options.map((option, index) => (
          <WheelSegment
            key={index}
            option={option}
            index={index}
            totalSegments={options.length}
          />
        ))}

        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full shadow-lg bg-amber-900" />
      </div>
    </div>
  );
};
