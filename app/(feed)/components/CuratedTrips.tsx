import { LINKS } from "@/common/constants/url.constant"
import { Collection } from "./collections/Collection"
import { TallCard } from "@/common/ui/cards/TallCard"
import { Carousel, CarouselContent, CarouselItem } from "@/common/ui/Carousel"
import { collectionService } from "@/data/services/collection.service"
import { GeneralCollection } from "@/data/models/collection.model"

export const CuratedTrips = async () => {
    const { data, error } = await collectionService<GeneralCollection, GeneralCollection>(LINKS.API.generalCollections).pagination({ limit: 6, offset: 0 }).findAll()

    return (
        <Collection title="Curated Trips" page={LINKS.PAGES.PUBLIC.feedCollections}>
            <Carousel gap="md" className="w-full col-span-full">
                <CarouselContent>
                    {data?.map((card) => (
                        <CarouselItem key={card.id}>
                            <TallCard
                                href={`${LINKS.PAGES.PUBLIC.feedCollections}/${card.id}`}
                                image={card.coverImage ?? 'https://picsum.photos/seed/galleries/800/800'}
                                title={card.name}
                                description={card.description}
                                isHoverable
                                className="w-[80vw] sm:w-[400px] text-white bg-surface-dim"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Collection>
    )
}