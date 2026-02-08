"use client";

import React from "react";
import { WheelOption } from "../types";
import { calculateSegmentAngles, getClipPath } from "../hooks/Wheelhelpers";

interface WheelSegmentProps {
  option: WheelOption;
  index: number;
  totalSegments: number;
}

export const WheelSegment: React.FC<WheelSegmentProps> = ({
  option,
  index,
  totalSegments,
}) => {
  const { angle, nextAngle } = calculateSegmentAngles(index, totalSegments);
  const clipPath = getClipPath(angle, nextAngle);
  const labelRotation = angle + 360 / totalSegments / 2;

  return (
    <div
      className={`absolute w-full h-full ${option.color}`}
      style={{ clipPath }}
    >
      <div
        className="absolute w-full h-full flex items-center justify-center text-center px-4"
        style={{
          transform: `rotate(${labelRotation}deg)`,
          transformOrigin: "center",
        }}
      >
        <span
          className="font-semibold text-lg block text-amber-900 whitespace-nowrap"
          style={{
            transform: "translateY(-120px) rotate(-90deg)",
          }}
        >
          {option.text}
        </span>
      </div>
    </div>
  );
};
