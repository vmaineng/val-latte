import { WheelOption } from "./types";

export const WHEEL_OPTIONS: WheelOption[] = [
      { text: "Absolutely! ☕", color: "bg-rose-200" },
  { text: "Yes Please! 💕", color: "bg-amber-100" },
  { text: "Of Course! ✨", color: "bg-pink-200" },
  { text: "100% Yes! 🤎", color: "bg-orange-200" },
  { text: "Duh! 💗", color: "bg-rose-100" },
  { text: "Obviously! ☕", color: "bg-amber-200" },
];

export const SPIN_CONFIG = { 
minSpins: 5,
maxSpins: 8, 
duration: 4000,
heartDisplayDuration: 3000,
};

export const HEART_CONFIG = {
    count: 30,
    minSize: 20, 
    maxSize: 40,
    minDuration: 2,
    maxDuration: 3,
}