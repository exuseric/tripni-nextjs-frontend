import { Button } from "@/common/ui/button/Button";
import { ButtonGroup } from "@/common/ui/button/ButtonGroup";
import { Link } from "@/common/ui/button/Link";
import { TallCardWithBlur } from "@/common/ui/cards/TallCardWithBlur";
import { Actions, Description, Heading, Title } from "@/common/ui/Heading";
import { BookmarkSimpleIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";

const collections = [
  {
    id: 0,
    title: "Art & Culture",
    categories: [
      {
        title: "Galleries",
        description: "Discover the soul of East African contemporary art.",
        cover: "https://picsum.photos/seed/600/600",
        likes: 20,
      },
      {
        title: "Museums",
        description: "Walk through the corridors of time.",
        cover: "https://picsum.photos/seed/600/600",
        likes: 16,
      },
    ],
  },
  {
    id: 1,
    title: "Culinary Adventures",
    categories: [
      {
        title: "Vegan Restaurants",
        description: "Nairobi's vibrant plant-based scene.",
        cover: "https://picsum.photos/seed/600/600",
        likes: 16,
      },
      {
        title: "Nyama Choma",
        description: "The ultimate ritual of meat and fire.",
        cover: "https://picsum.photos/seed/600/600",
        likes: 10,
      },
    ],
  },
];
export const Collections = () => {
  return (
    <div className="flex-col-start">
      {collections.map((collection) => (
        <div className="container-grid py-safe-top" key={collection.id}>
          <Heading variant="page" className="col-span-full">
            <Title level="h2">{collection.title}</Title>
          </Heading>

          <div className="flex flex-row pb-2 flex-nowrap overflow-scroll items-start gap-x-3 col-span-full">
            {collection.categories.map((card, index) => (
              <TallCardWithBlur key={index} background={card.cover}>
                <Heading className="p-4 text-white" align="left" variant="card">
                  <Title level="h3">{card.title}</Title>
                  <Description>
                    {card.description}
                  </Description>
                  <Actions className="justify-between w-full">

                    <Link href="/" variant="tonal">
                      View Trips
                    </Link>
                    <ButtonGroup>
                      <Button variant="quiet" size="sm" className="text-current gap-x-1">
                        <BookmarkSimpleIcon size={20} />
                      </Button>
                      <Button variant="quiet" size="sm" className="text-current gap-x-1">
                        <HeartIcon size={20} />
                        {card.likes && <span>{card.likes}</span>}
                      </Button>
                    </ButtonGroup>
                  </Actions>
                </Heading>
              </TallCardWithBlur>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
