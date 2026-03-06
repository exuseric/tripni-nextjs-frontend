import { TallCardWithBlur } from "@/common/ui/cards/TallCardWithBlur";
import { Title, Heading, Actions, Description } from "@/common/ui/Heading";
import { PlusCircleIcon, HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/common/ui/Button";

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
                    <Button variant="tonal">
                      Follow
                      <PlusCircleIcon size={20} weight="fill" />
                    </Button>
                    <Button variant="quiet" className="text-current" isIconOnly={card.likes > 0}>
                      <HeartIcon size={20} className="text-current flex-row-start items-center gap-x-1" />
                      {card.likes > 0 && <span className="text-current">{card.likes}</span>}
                    </Button>
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
