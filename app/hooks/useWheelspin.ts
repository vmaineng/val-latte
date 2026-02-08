import { useState, useCallback } from "react";
import {
  calculateTotalRotation,
  generateHearts,
  selectRandomCoffeeShop,
} from "./Wheelhelpers";
import { SPIN_CONFIG } from "../Wheelconfig";
import { Heart, CoffeeShop } from "../types";

interface UseWheelSpinProps {
  coffeeShops: CoffeeShop[];
}

export const useWheelSpin = ({ coffeeShops }: UseWheelSpinProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedShop, setSelectedShop] = useState<CoffeeShop | null>(null); // ! Check
  const [hearts] = useState<Heart[]>(generateHearts());

  const spin = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowHearts(false);
    setShowResult(false);

    const totalRotation = calculateTotalRotation(rotation);
    setRotation(totalRotation);

    const randomShop = selectRandomCoffeeShop(coffeeShops);
    setSelectedShop(randomShop);

    setTimeout(() => {
      setIsSpinning(false);
      setShowHearts(true);
      setShowResult(true);
      setTimeout(() => {
        setShowHearts(false);
      }, SPIN_CONFIG.heartDisplayDuration);
    }, SPIN_CONFIG.duration);
  }, [isSpinning, rotation, coffeeShops]);

  return {
    isSpinning,
    rotation,
    showHearts,
    showResult,
    hearts,
    selectedShop,
    spin,
  };
};
