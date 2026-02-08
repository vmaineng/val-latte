"use client";

import { Heart } from "../types";

interface FloatingHeartProps {
  hearts: Heart[];
  show: boolean;
}

export const FloatingHeartProps: React.FC<FloatingHeartProps> = ({
  hearts,
  show,
}) => {
  if (!show) return null;

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none animate-floatUp"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ☕💕
        </div>
      ))}
    </>
  );
};
