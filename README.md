# Valentine's Day Coffee Wheel 💕☕

A cute, interactive spin-the-wheel app for asking someone to be your Valentine's coffee date!

## Features

- 🎡 Smooth spinning wheel animation with all "yes" options
- ☕💕 Floating latte art hearts animation
- 🎨 Soft pink/cream/brown color palette
- 📱 Fully responsive design
- ♿ Accessible and semantic HTML
- 🎯 Clean component architecture

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
valentines-app/
├── app/
│   └── page.tsx              # Main page component
├── components/
│   ├── ValentinesWheel.tsx   # Main container component
│   ├── SpinWheel.tsx         # Wheel UI component
│   ├── WheelSegment.tsx      # Individual wheel segment
│   ├── FloatingHearts.tsx    # Hearts animation
│   ├── SpinButton.tsx        # Spin button component
│   └── ResultMessage.tsx     # Result display component
├── hooks/
│   └── useWheelSpin.ts       # Custom hook for wheel logic
├── utils/
│   └── wheelHelpers.ts       # Helper functions
├── constants/
│   └── wheelConfig.ts        # Configuration constants
├── types/
│   └── index.ts              # TypeScript types
└── tailwind.config.ts        # Tailwind configuration
```

## Customization

### Add Your Coffee Shops

Edit `app/page.tsx` with an array of coffee shop objects:

```tsx
const coffeeShops = [
  {
    name: 'Blue Bottle Coffee',
    address: 'Arts District, LA',
    vibe: 'Minimalist and airy',        // optional
    specialty: 'New Orleans Iced Coffee', // optional
  },
  {
    name: 'Intelligentsia Coffee',
    address: 'Silver Lake, LA',
    vibe: 'Hip and cozy',
    specialty: 'Black Cat Espresso',
  },
  // Add as many as you want!
];

<ValentinesWheel
  coffeeShops={coffeeShops}
  date="Valentine's Day at 2 PM 💗"
  message="Can't wait to caffeinate with you! ☕✨"
/>
```

**How it works:** Each time they spin the wheel, a random coffee shop from your array is selected and displayed in the result!

### Coffee Shop Object Properties

- `name` (required): Name of the coffee shop
- `address` (required): Location/neighborhood
- `vibe` (optional): Describe the atmosphere
- `specialty` (optional): Recommended drink

### Modify Wheel Options

Edit `constants/wheelConfig.ts`:

```tsx
export const WHEEL_OPTIONS: WheelOption[] = [
  { text: "Absolutely! ☕", color: "bg-rose-200" },
  { text: "Yes Please! 💕", color: "bg-amber-100" },
  // Add or modify options here
];
```

### Adjust Colors

The app uses Tailwind's color palette. Main colors used:
- `bg-rose-*` - Pink tones
- `bg-amber-*` - Brown/cream tones
- `bg-orange-*` - Warm accent tones

### Customize Animation Timings

Edit `constants/wheelConfig.ts`:

```tsx
export const SPIN_CONFIG = {
  minSpins: 5,              // Minimum full rotations
  maxSpins: 8,              // Maximum full rotations
  duration: 4000,           // Spin duration (ms)
  heartDisplayDuration: 3000, // How long hearts show (ms)
};
```

## Component API

### ValentinesWheel

Main component that orchestrates the entire experience.

**Props:**
- `coffeeShops` (required): Array of coffee shop objects
- `date` (optional): Date/time string for the meet-up
- `message` (optional): Custom message to display

**CoffeeShop Object:**
```tsx
{
  name: string;        // required
  address: string;     // required
  vibe?: string;       // optional
  specialty?: string;  // optional
}
```

### SpinWheel

Renders the spinning wheel with segments.

**Props:**
- `options`: Array of wheel options
- `rotation`: Current rotation degree
- `isSpinning`: Whether wheel is currently spinning

### FloatingHearts

Displays animated floating hearts.

**Props:**
- `hearts`: Array of heart objects with position/timing data
- `show`: Whether to show hearts

### ResultMessage

Displays the final success message with randomly selected coffee shop.

**Props:**
- `show`: Whether to show the message
- `shop`: Selected coffee shop object (or null)
- `date`: Date/time string
- `message`: Custom message text

### SpinButton

The main CTA button to spin the wheel.

**Props:**
- `onSpin`: Function to call when clicked
- `isSpinning`: Whether wheel is currently spinning

## Custom Hook

### useWheelSpin

Manages all wheel spinning logic, state, and random coffee shop selection.

**Parameters:**
- `coffeeShops`: Array of coffee shop objects

**Returns:**
- `isSpinning`: Boolean for spin state
- `rotation`: Current rotation value
- `showHearts`: Whether hearts should display
- `showResult`: Whether result message should show
- `hearts`: Array of heart data
- `selectedShop`: The randomly selected coffee shop (or null)
- `spin`: Function to trigger the spin

## License

MIT