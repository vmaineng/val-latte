import { HEART_CONFIG } from "../Wheelconfig";
import { Heart, CoffeeShop } from "../types";


export const calculateTotalRotation = (currentRotation: number): nubmer => {
    const minSpins = 4;
    const maxSpins = 8;
    const extraSpins = minSpins + Math.floor(Math.random() * (maxSpins - minSpins))
    const randomDegree = Math.floor(Math.random() * 360);
    return currentRotation + extraSpins * 360 + randomDegree
}

export const generateHearts = (): Heart[] => {
    return Array.from({length: HEART_CONFIG.count}, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: HEART_CONFIG.minDuration + Math.random() * (HEART_CONFIG.maxDuration - HEART_CONFIG.minDuration),
    size: HEART_CONFIG.minSize + Math.random() * (HEART_CONFIG.maxSize - HEART_CONFIG.minSize),
    }))
}

export const calculateSegmentAngles = (index: number, totalSegments: number) => {
  const angle = (360 / totalSegments) * index;
  const nextAngle = (360 / totalSegments) * (index + 1);
  return { angle, nextAngle };
};

export const getClipPath = (angle: number, nextAngle: number): string => {
  const startX = 50 + 50 * Math.cos((angle * Math.PI) / 180);
  const startY = 50 + 50 * Math.sin((angle * Math.PI) / 180);
  const endX = 50 + 50 * Math.cos((nextAngle * Math.PI) / 180);
  const endY = 50 + 50 * Math.sin((nextAngle * Math.PI) / 180);
  
  return `polygon(50% 50%, ${startX}% ${startY}%, ${endX}% ${endY}%)`;
};

export const selectRandomCoffeeShop = (shops: CoffeeShop[]): CoffeeShop => {
  const randomIndex = Math.floor(Math.random() * shops.length);
  return shops[randomIndex];
};