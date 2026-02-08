"use client";

import { CoffeeShop } from "../types";

interface ResultMessageProps {
  show: boolean;
  shop: CoffeeShop | null;
  date: string;
  message: string;
}

export const Resultmessage: React.FC<ResultMessageProps> = ({
  show,
  shop,
  date,
  message,
}) => {
  if (!show | !shop) return null;

  return (
    <div className="mt-8 text-center animate-fadeIn">
      <p className="text-3xl font-bold mb-4 text-amber-900">
        Perfect! It&apos;s a date! 💕
      </p>
      <div className="bg-white/80 rounded-lg p-6 shadow-lg max-w-md">
        <p className="text-2xl font-bold mb-2 text-rose-400">{shop.name}</p>
        <p className="text-lg mb-2 text-amber-900">📍 {shop.address}</p>
        {shop.vibe && (
          <p className="text-md mb-2 text-amber-800 italic">✨ {shop.vibe}</p>
        )}
        {shop.specialty && (
          <p className="text-md mb-3 text-amber-800">
            ☕ Try their: {shop.specialty}
          </p>
        )}
        <p className="text-xl mb-2 text-amber-950 mt-4 font-semibold">
          📅 {date}
        </p>
        <p className="text-lg mt-4 text-amber-900">{message}</p>
      </div>
    </div>
  );
};
