"use client";
import { Button } from "@/common/ui/button/Button";
import { ButtonGroup } from "@/common/ui/button/ButtonGroup";
import { Link } from "@/common/ui/button/Link";
import { TallCard } from "@/common/ui/cards/CardPresets";
import { Carousel, CarouselContent, CarouselItem } from "@/common/ui/Carousel";
import { Heading, Title } from "@/common/ui/Heading";
import { BookmarkSimpleIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";

const collections = [
  {
    id: 0,
    title: "Art & Culture",
    categories: [
      {
        title: "Galleries",
        description: "Discover the soul of East African contemporary art.",
        cover: "https://picsum.photos/seed/galleries/800/800",
        likes: 20,
      },
      {
        title: "Museums",
        description: "Walk through the corridors of time.",
        cover: "https://picsum.photos/seed/museums/800/800",
        likes: 16,
      },
      {
        title: "Craft Markets",
        description: "Traditional treasures and handmade wonders.",
        cover: "https://picsum.photos/seed/crafts/800/800",
        likes: 12,
      }
    ],
  },
  {
    id: 1,
    title: "Culinary Adventures",
    categories: [
      {
        title: "Vegan Restaurants",
        description: "Nairobi's vibrant plant-based scene.",
        cover: "https://picsum.photos/seed/vegan/800/800",
        likes: 16,
      },
      {
        title: "Nyama Choma",
        description: "The ultimate ritual of meat and fire.",
        cover: "https://picsum.photos/seed/meat/800/800",
        likes: 10,
      },
      {
        title: "Coffee Houses",
        description: "From bean to cup in the heart of Kenya.",
        cover: "https://picsum.photos/seed/coffee/800/800",
        likes: 24,
      }
    ],
  },
];

export const Collections = () => {
  return (
    <div className="flex flex-col gap-12 py-8 overflow-x-hidden col-span-full">
      {collections.map((collection) => (
        <div key={collection.id} className="flex flex-col gap-6">
          <Heading variant="page">
            <Title level="h2">{collection.title}</Title>
          </Heading>

          <Carousel gap="md" className="w-full">
            <CarouselContent className="px-4 md:px-[max(1rem,calc((100vw-80rem)/2+1rem))]">
              {collection.categories.map((card, index) => (
                <CarouselItem key={index}>
                  <TallCard
                    image={card.cover}
                    title={card.title}
                    description={card.description}
                    variant="elevated"
                    isHoverable
                    className="w-[80vw] sm:w-[400px] text-white"
                  />
                </CarouselItem>
              ))}
              {/* Spacer for the last item to respect trailing padding */}
              <div className="flex-none w-px h-px pr-4 md:pr-[max(1rem,calc((100vw-80rem)/2+1rem))]" aria-hidden="true" />
            </CarouselContent>
          </Carousel>
        </div>
      ))}
    </div>
  );
};
