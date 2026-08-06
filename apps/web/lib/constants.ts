export const COLORS = {
  teal: "rgb(20, 184, 166)",
  darkGray: "rgb(31, 41, 55)",
  lightGray: "rgb(243, 244, 246)",
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
} as const;

export const SPACING = {
  section: "py-16 md:py-24",
  container: "px-4 md:px-6 lg:px-8",
  gap: {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
} as const;

export const TYPOGRAPHY = {
  hero: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl font-bold",
  h3: "text-xl md:text-2xl font-semibold",
  body: "text-base md:text-lg",
  small: "text-sm md:text-base",
} as const;
