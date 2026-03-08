import { LINKS } from "@/common/constants/url.constant"
import { tripService } from "@/data/services/trip.service"
import { Collection } from "./collections/Collection"
import { NormalCard } from "@/common/ui/cards/NormalCard"
import { Grid, GridItem } from "@/common/ui/Grid"
import { HorizontalCard } from "@/common/ui/cards/HorizontalCard"
import { TallCard } from "@/common/ui/cards/TallCard"
import { Link } from "@/common/ui/button/Link"

export const PublicTrips = async () => {
  const { data, error } = await tripService().pagination({ limit: 10, offset: 0 }).findAll()
  return (
    <Collection title="Public Trips" page={LINKS.PAGES.PUBLIC.feedTrips} stickyHeader>
      <Grid variant="list" gap="sm" minItemWidth="19rem" className="col-span-full w-full">
        {data?.map((item, index) => (
          <GridItem key={index} span={1}>
            <TallCard href={`${LINKS.PAGES.PUBLIC.feedTrips}/${item.id}`} variant="elevated" image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80" title={item.name} description={item.description} isHoverable />
          </GridItem>
        ))}
      </Grid>
    </Collection>
  )
}