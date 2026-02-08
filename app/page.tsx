import { ValentinesWheel } from "@/components/ValentinesWheel";

export default function Home() {
  const coffeeShops = [
    {
      name: "Blue Bottle Coffee",
      address: "Arts District, LA",
      vibe: "Minimalist and airy",
      specialty: "New Orleans Iced Coffee",
    },
    {
      name: "Intelligentsia Coffee",
      address: "Silver Lake, LA",
      vibe: "Hip and cozy",
      specialty: "Black Cat Espresso",
    },
    {
      name: "Alfred Coffee",
      address: "Melrose Place, LA",
      vibe: "Instagrammable and trendy",
      specialty: "Vanilla Latte",
    },
    {
      name: "Go Get Em Tiger",
      address: "Los Feliz, LA",
      vibe: "Bright and neighborhood-y",
      specialty: "Cortado",
    },
    {
      name: "Verve Coffee Roasters",
      address: "West Hollywood, LA",
      vibe: "California cool",
      specialty: "Pour Over",
    },
  ];

  return (
    <ValentinesWheel
      coffeeShops={coffeeShops}
      date="Valentine's Day at 2 PM 💗"
      message="Can't wait to caffeinate with you! ☕✨"
    />
  );
}
