"use client";

interface SpinButtonProps {
  onSpin: () => void;
  isSpinning: boolean;
}

export const SpinButton: React.FC<SpinButtonProps> = ({
  onSpin,
  isSpinning,
}) => {
  return (
    <button
      onClick={onSpin}
      disabled={isSpinning}
      className={`
        px-12 py-4 rounded-full font-bold text-xl shadow-lg 
        transform transition-all hover:scale-105 active:scale-95 
        disabled:opacity-50 disabled:cursor-not-allowed
        text-white
        ${isSpinning ? "bg-orange-300" : "bg-rose-300 hover:bg-rose-400"}
      `}
    >
      {isSpinning ? "Spinning..." : "Spin the Wheel! ☕"}
    </button>
  );
};
