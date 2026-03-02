import Link from "next/link";
import { tripService } from "@/data/services/trip.service";
import { CreateTrip } from "@/data/models/trip.model";
import { HomepageHero } from "@/components/homepage-hero/HomepageHero";

const trips: CreateTrip[] = [
  {
    // private trip
    name: "Nairobi to Mombasa Road Trip",
    description: "A coastal drive along the Nairobi-Mombasa highway, stopping at Tsavo and Mtito Andei.",
    country: "Kenya",
    city: "Nairobi",
    coverImage: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6",
  },
  {
    // public trip
    name: "Maasai Mara Safari",
    description: "witnessing the great wildebeest migration across the Mara River during peak season.",
    country: "Kenya",
    city: "Narok",
    coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    isPublic: true,
  },
  {
    // public trip
    name: "Lamu Island Getaway",
    description: "Exploring the UNESCO World Heritage old town, dhow sailing, and Shela beach.",
    country: "Kenya",
    city: "Lamu",
    coverImage: "https://images.unsplash.com/photo-1573044633760-3a0b3fc96cda",
    isPublic: true,
  },
  {
    // private trip
    name: "Mount Kenya Trek",
    description: "Summit attempt via the Sirimon route, camping at Shipton's Camp at 4200m.",
    country: "Kenya",
    city: "Nanyuki",
    coverImage: "https://images.unsplash.com/photo-1611348586840-ea9872d33411",
  },
];

export default async function Home() {
  // trips.forEach(async (trip) => await tripService().create(trip));
  await tripService().findAll();
  return (
    <>
      <HomepageHero />
    </>
  );
}
