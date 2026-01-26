export const ORIGINS = [
    "explorer",
    "cygnus knight",
    "hero",
    "resistance",
    "nova",
    "sengoku",
    "flora",
    "anima",
    "jianghu",
    "shine",
    "friends world",
    "transcedent"
] as const;

export type Origin = typeof ORIGINS[number];