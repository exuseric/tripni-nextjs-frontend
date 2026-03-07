import { LINKS } from "@/common/constants/url.constant";
import { Link } from "@/common/ui/button/Link";
import { TallCard } from "@/common/ui/cards/TallCard";
import { Carousel, CarouselContent, CarouselItem } from "@/common/ui/Carousel";
import { Actions, Heading, Title } from "@/common/ui/Heading";
import { GeneralCollection } from "@/data/models/collection.model";
import { collectionService } from "@/data/services/collection.service";

export const CarouselCollections = async () => {
  const { data, error } = await collectionService<GeneralCollection, GeneralCollection>(LINKS.API.generalCollections).pagination({ limit: 6, offset: 0 }).findAll()

  return (
    <div className="my-container-block-sm md:my-container-block overflow-x-hidden container container-grid">
      <Heading variant="page" align="between" className="col-span-full">
        <Title level="h2">Curated Collections</Title>
        <Actions>
          <Link href={LINKS.PAGES.PUBLIC.feedCollections} variant="quiet">
            Show all
          </Link>
        </Actions>
      </Heading>
      <Carousel gap="md" className="w-full col-span-full">
        <CarouselContent>
          {data?.map((card, index) => (
            <CarouselItem key={index}>
              <TallCard
                href={`${LINKS.PAGES.PUBLIC.feedCollections}/${card.id}`}
                image={card.coverImage ?? 'https://picsum.photos/seed/galleries/800/800'}
                title={card.name}
                description={card.description}
                variant="elevated"
                isHoverable
                className="w-[80vw] sm:w-[400px] text-white bg-surface-dim"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
