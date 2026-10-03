export interface CropOption {
  id: string;
  name: string;
  baselineYield: string;
  optimalShadeMin: number;
  optimalShadeMax: number;
  maxYieldBonus: number;
  waterSensitivity: number;
}

export interface RegionOption {
  id: string;
  name: string;
  solarHours: number; // hrs/day
  baseSolarMWhPerAcre: number;
  evaporationDemand: string;
  solarFactor: number;
}

export const REGIONS: RegionOption[] = [
  {
    id: "central-valley",
    name: "Central Valley, CA",
    solarHours: 6.1,
    baseSolarMWhPerAcre: 188.5,
    evaporationDemand: "High summer demand",
    solarFactor: 1.0,
  },
  {
    id: "imperial-valley",
    name: "Imperial Valley, CA",
    solarHours: 6.6,
    baseSolarMWhPerAcre: 204.0,
    evaporationDemand: "Extreme arid demand",
    solarFactor: 1.08,
  },
  {
    id: "columbia-basin",
    name: "Columbia Basin, WA",
    solarHours: 5.4,
    baseSolarMWhPerAcre: 165.0,
    evaporationDemand: "Moderate summer demand",
    solarFactor: 0.88,
  },
  {
    id: "high-plains",
    name: "High Plains, TX",
    solarHours: 5.9,
    baseSolarMWhPerAcre: 182.0,
    evaporationDemand: "High wind & heat demand",
    solarFactor: 0.96,
  },
];

export const CROPS: CropOption[] = [
  {
    id: "tomato",
    name: "Processing tomato",
    baselineYield: "50 tons / acre",
    optimalShadeMin: 18,
    optimalShadeMax: 26,
    maxYieldBonus: 3.5, // up to 103.5%
    waterSensitivity: 1.0,
  },
  {
    id: "lettuce",
    name: "Leafy greens / Romaine",
    baselineYield: "28 tons / acre",
    optimalShadeMin: 20,
    optimalShadeMax: 32,
    maxYieldBonus: 6.2, // up to 106.2%
    waterSensitivity: 1.25,
  },
  {
    id: "peppers",
    name: "Bell peppers",
    baselineYield: "32 tons / acre",
    optimalShadeMin: 16,
    optimalShadeMax: 25,
    maxYieldBonus: 4.0,
    waterSensitivity: 0.95,
  },
  {
    id: "strawberries",
    name: "Day-neutral strawberries",
    baselineYield: "35,000 lbs / acre",
    optimalShadeMin: 15,
    optimalShadeMax: 24,
    maxYieldBonus: 2.8,
    waterSensitivity: 1.1,
  },
  {
    id: "alfalfa",
    name: "Alfalfa hay",
    baselineYield: "8 tons / acre",
    optimalShadeMin: 12,
    optimalShadeMax: 20,
    maxYieldBonus: 1.8,
    waterSensitivity: 0.85,
  },
];

export const NAV_LINKS = [
  { label: "Product", href: "/" },
  { label: "Case study", href: "/case-study" },
  { label: "About", href: "/about" },
];

export const SITE_META = {
  name: "Solara Fields",
  tagline: "Live Agrivoltaic Modeling",
  slogan: "Two yields. One proof.",
  description:
    "Solara Fields turns your agrivoltaic pitch into a live model. Crop yield, water savings, and energy output—adjustable in front of the person who has to say yes.",
  defaultAcreage: 120,
  defaultRowSpacing: 24,
  defaultClearance: 10,
};
