import { LINKS } from "@/common/constants/url.constant"
import { Link } from "@/common/ui/button/Link"
import { NormalCard } from "@/common/ui/cards/NormalCard"
import { Carousel, CarouselContent, CarouselItem } from "@/common/ui/Carousel"
import { Grid, GridItem } from "@/common/ui/Grid"
import { Actions, Heading, Title } from "@/common/ui/Heading"
import { regionService } from "@/data/services/region.service"

export const GridCollection = async () => {
    const { data, error } = await regionService().pagination({ limit: 4, offset: 0 }).findAll()
    return (
        <div className="container container-grid my-container-block-sm md:my-container-block">
            <Heading variant="page" align="between" className="col-span-full">
                <Title level="h2">
                    Regional Discovery
                </Title>
                <Actions>
                    <Link href={LINKS.PAGES.PUBLIC.feedRegions} variant="quiet">
                        Show all
                    </Link>
                </Actions>
            </Heading>
            <Grid variant="list" gap="xs" className="col-span-full">
                {data?.map((item, index) => (
                    <GridItem key={index} span={1}>
                        <NormalCard href={`${LINKS.PAGES.PUBLIC.feedRegions}/${item.id}`} image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80" title={item.name} isHoverable />
                    </GridItem>
                ))}
            </Grid>
        </div>
    )
}