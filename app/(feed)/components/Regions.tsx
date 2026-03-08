import { LINKS } from "@/common/constants/url.constant"
import { NormalCard } from "@/common/ui/cards/NormalCard"
import { Carousel, CarouselContent, CarouselItem } from "@/common/ui/Carousel"
import { regionService } from "@/data/services/region.service"
import { Collection } from "./collections/Collection"

export const Regions = async () => {
    const { data, error } = await regionService().pagination({ limit: 4, offset: 0 }).findAll()

    return (
        <Collection title="Regional Discovery" page={LINKS.PAGES.PUBLIC.feedRegions}>
            <Carousel gap="md" className="w-full col-span-full">
                <CarouselContent>
                    {data?.map((item) => (
                        <CarouselItem key={item.id}>
                            <NormalCard href={`${LINKS.PAGES.PUBLIC.feedRegions}/${item.id}`} image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80" title={item.name} isHoverable />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Collection>
    )
}