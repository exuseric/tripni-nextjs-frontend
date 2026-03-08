import { LINKS } from "@/common/constants/url.constant"
import { Button } from "@/common/ui/button/Button"
import { ButtonGroup } from "@/common/ui/button/ButtonGroup"
import { TallCard } from "@/common/ui/cards/TallCard"
import { Grid, GridItem } from "@/common/ui/Grid"
import { tripService } from "@/data/services/trip.service"
import { ArrowArcRightIcon, ArrowLeftIcon, ArrowRightIcon, BookmarkSimpleIcon, CopySimpleIcon, MapPinAreaIcon } from "@phosphor-icons/react/dist/ssr"
import { Collection } from "./collections/Collection"
import { Link } from "@/common/ui/button/Link"

export const PublicTrips = async () => {
  const { data, error } = await tripService().pagination({ limit: 10, offset: 0 }).findAll()

  console.log(data)

  return (
    <Collection title="Public Trips" page={LINKS.PAGES.PUBLIC.feedTrips} stickyHeader>
      <Grid variant="list" gap="sm" minItemWidth="19rem" className="col-span-full w-full">
        {data?.map((item, index) => (
          <GridItem key={index} span={1}>
            <TallCard variant="elevated" image={item.coverImage ?? 'https://picsum.photos/seed/galleries/800/800'} title={item.name} description={item.description} isHoverable actions={
              <Actions link={`${LINKS.PAGES.PUBLIC.feedTrips}/${item.id}`} />
            } />
          </GridItem>
        ))}
      </Grid>
    </Collection>
  )
}

const Actions = ({ link }: { link: string }) => {
  return (
    <ButtonGroup isAttached={false} variant="quiet" className="justify-end w-full">
      <Button aria-label="Bookmark Trip" variant="quiet" className="text-primary-fixed" size="sm" isIconOnly>
        <BookmarkSimpleIcon size={20} weight="regular" />
      </Button>
      <Button aria-label="Copy Trip" variant="quiet" className="text-primary-fixed" isIconOnly size="sm">
        <CopySimpleIcon size={20} weight="regular" />
      </Button>
      <Link variant="tonal" size="sm" href={link} className="w-full">
        Open Trip
        <MapPinAreaIcon size={20} weight="regular" />
      </Link>
    </ButtonGroup>
  )
}