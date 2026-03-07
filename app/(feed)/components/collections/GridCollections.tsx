import { Link } from "@/common/ui/button/Link"
import { NormalCard } from "@/common/ui/cards/NormalCard"
import { Grid, GridItem } from "@/common/ui/Grid"
import { Actions, Heading, Title } from "@/common/ui/Heading"

const data = [
    {
        id: 0,
        title: "Nairobi Hub",
        subtitle: "City Lights & KICC Skyline",
        link: "",
        cover: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&q=80"
    },
    {
        id: 1,
        title: "The Rift Valley",
        subtitle: "Lake Nakuru Flamingos & Mt. Longonot",
        link: "",
        cover: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80"
    },
    {
        id: 2,
        title: "Coastal Wonders",
        subtitle: "Diani Beach & Lamu Old Town",
        link: "",
        cover: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600&q=80"
    },
    {
        id: 3,
        title: "Safari Circuit",
        subtitle: "The Great Migration & Amboseli Elephants",
        link: "",
        cover: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80"
    },
    {
        id: 4,
        title: "The Lake Region",
        subtitle: "Kisumu Sunsets & Lake Victoria",
        link: "",
        cover: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=600&q=80"
    },
    {
        id: 5,
        title: "Northern Frontier",
        subtitle: "Mount Ololokwe & Samburu Landscapes",
        link: "",
        cover: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80"
    }
]

export const GridCollection = () => {
    return (
        <>
            <Heading variant="page" align="between" className="col-span-full">
                <Title level="h2">
                    Regional Discovery
                </Title>
                <Actions>
                    <Link href="#" variant="quiet">
                        Show all
                    </Link>
                </Actions>
            </Heading>
            <Grid variant="subgrid" gap="xs" className="col-span-full">
                {data.map((item, index) => (
                    <GridItem key={index} span={2}>
                        <NormalCard image={item.cover} title={item.title} />
                    </GridItem>
                ))}
            </Grid>
        </>
    )
}