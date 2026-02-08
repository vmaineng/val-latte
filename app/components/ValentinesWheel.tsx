"use client";

import { Floatinghearts } from "./Floatinghearts";
import { Spinwheel } from "./Spinwheel";
import { Spinbutton } from "./Spinbutton";
import { Resultmessage } from "./Resultmessage";
import { useWheelSpin } from "../hooks/useWheelspin";
import { WHEEL_OPTIONS } from "../Wheelconfig";
import { CoffeeShop } from "../types";

interface ValentinesWheelProps {
  coffeeShops: CoffeeShop[];
  date?: string;
  message?: string;
}

const defaultMessage = "Can&apos;t wait to caffeinate with you! ";
const defaultDate = "Valentine&apos;s Day";

export const ValentinesWheel: React.FC<ValentinesWheelProps> = ({
  coffeeShops,
  date = defaultDate,
  message = defaultMessage,
}) => {
  const {
    isSpinning,
    rotation,
    showHearts,
    showResult,
    hearts,
    selectedShop,
    spin,
  } = useWheelSpin({
    coffeeShops,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50">
      {/* Floating hearts animation */}
      <Floatinghearts hearts={hearts} show={showHearts} />

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 text-center text-amber-900">
        Will you be my
      </h1>
      <h2 className="text-6xl font-bold mb-12 text-center text-rose-400">
        Valentine&apos;s Coffee Date?
      </h2>

      {/* Wheel */}
      <Spinwheel
        options={WHEEL_OPTIONS}
        rotation={rotation}
        isSpinning={isSpinning}
      />

      {/* Spin button */}
      <Spinbutton onSpin={spin} isSpinning={isSpinning} />

      {/* Result message */}
      <Resultmessage
        show={showResult}
        shop={selectedShop}
        date={date}
        message={message}
      />
    </div>
  );
};
