import { LINKS } from "@/common/constants/url.constant";
import { Link } from "@/common/ui/button/Link";
import { TallCard } from "@/common/ui/cards/TallCard";
import { Carousel, CarouselContent, CarouselItem } from "@/common/ui/Carousel";
import { Actions, Heading, Title } from "@/common/ui/Heading";
import { GeneralCollection } from "@/data/models/collection.model";
import { collectionService } from "@/data/services/collection.service";

export const CarouselCollections = async () => {
  const { data, error } = await collectionService<GeneralCollection, GeneralCollection>(LINKS.API.generalCollections).pagination({ limit: 6, offset: 0 }).findAll()
  console.log(data)

  return (
    <div className="flex flex-col gap-12 py-8 overflow-x-hidden col-span-full">
      <div className="flex flex-col gap-6">
        <Heading variant="page" align="between">
          <Title level="h2">Curated Collections</Title>
          <Actions>
            <Link href="#" variant="quiet">
              Show all
            </Link>
          </Actions>
        </Heading>

        <Carousel gap="md" className="w-full">
          <CarouselContent className="px-4 md:px-[max(1rem,calc((100vw-80rem)/2+1rem))]">
            {data?.map((card, index) => (
              <CarouselItem key={index}>
                <TallCard
                  image={card.coverImage ?? 'https://picsum.photos/seed/galleries/800/800'}
                  title={card.name}
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
    </div>
  );
};
