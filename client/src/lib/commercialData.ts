import { assetPath } from "@/lib/sitePaths";
/* Harvest Editorial commercial vocabulary: pack formats and quote-led guide rates shared across product touchpoints. */

export type PricingGuide = {
  tier: string;
  volume: string;
  rate: string;
  suitedTo: string;
};

export type PackVariant = {
  label: string;
  title: string;
  src: string;
  copy: string;
  pricing: PricingGuide;
};

export const packVariants: PackVariant[] = [
  {
    label: "1L",
    title: "Retail bottle",
    src: assetPath("/manus-storage/chi-zaram-pack-1l_6e672af6.jpg"),
    copy: "A practical entry size for household cooking and everyday retail shelves.",
    pricing: { tier: "Retail", volume: "1–4 units", rate: "Standard rate", suitedTo: "Households and direct consumers" },
  },
  {
    label: "3L",
    title: "Family pack",
    src: assetPath("/manus-storage/chi-zaram-pack-3l_733459fa.jpg"),
    copy: "A family-size option for regular kitchens and small food businesses.",
    pricing: { tier: "Retail", volume: "1–4 units", rate: "Standard rate", suitedTo: "Family kitchens and small food businesses" },
  },
  {
    label: "5L",
    title: "Value jerrycan",
    src: assetPath("/manus-storage/chi-zaram-pack-5l_b3198c6e.jpg"),
    copy: "The documented flagship household size for lasting everyday value.",
    pricing: { tier: "Reseller", volume: "5–19 units", rate: "Volume rate", suitedTo: "Shops, vendors, and small resellers" },
  },
  {
    label: "Bulk",
    title: "Wholesale supply",
    src: assetPath("/manus-storage/chi-zaram-pack-bulk_ffbd7e5f.jpg"),
    copy: "For resellers, food businesses, distributors, and larger supply needs.",
    pricing: { tier: "Distributor", volume: "50+ units", rate: "Custom quote", suitedTo: "Dedicated supply and logistics" },
  },
];

export const pricingTiers: PricingGuide[] = [
  { tier: "Retail", volume: "1–4 units", rate: "Standard rate", suitedTo: "Households and direct consumers" },
  { tier: "Reseller", volume: "5–19 units", rate: "Volume rate", suitedTo: "Shops, vendors, and small resellers" },
  { tier: "Wholesale", volume: "20–49 units", rate: "Preferred rate", suitedTo: "Regular bulk buyers" },
  { tier: "Distributor", volume: "50+ units", rate: "Custom quote", suitedTo: "Dedicated supply and logistics" },
];

export const palmOilPackSummary = packVariants.map((pack) => pack.label).join(" · ");

export function getPackVariant(label: string): PackVariant | undefined {
  return packVariants.find((pack) => pack.label === label);
}
