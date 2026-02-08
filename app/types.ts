export interface WheelOption { 
    text:string;
    color:string;
}

export interface Heart { 
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
}

export interface CoffeeShop { 
    name: string;
    address: string;
    vibe?: string;
    specialty?: string;
}

export interface ResultDetails { 
    shop: CoffeeShop;
    date: string;
    message: string;
}