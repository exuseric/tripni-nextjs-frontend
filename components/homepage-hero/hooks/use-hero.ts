import { TOP_LEVEL_LINKS } from "@/common/constants";

const data = [
  {
    id: "1",
    title: "Log your journey, your way",
    description:
      "From the urban pulse of Nairobi to the serene shores of Watamu, Tripni is the first travel logger designed specifically for the Kenyan traveler.",
    cta: {
      label: "Get Started",
      link: TOP_LEVEL_LINKS.trips,
    },
  },
];

export const useHero = (heroId: string) => {
  return data.find((hero) => hero.id === heroId);
};
