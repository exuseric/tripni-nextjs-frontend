import { useHero } from "@/components/homepage-hero/hooks/use-hero";
import { Heading, Title, Description, Actions } from "@/common/ui/Heading";
import { ImageWidget } from "@/common/ui/ImageWidget";
import { Link } from "@/common/ui/Link";

export const HomepageHero = () => {
  const data = useHero("1");
  return (
    <section className="bg-backgound min-h-screen py-container-block container" id="homepageHero">
      <div className="grid grid-cols-4 grid-rows-[repeat(3,auto)] gap-4 h-fit w-full">
        <Heading variant="hero" align="center" className="col-span-full">
          <Title className="text-primary capitalize">{data?.title}</Title>
          <Description>{data?.description}</Description>
          {data?.cta && (
            <Actions>
              <Link href={data.cta.link} variant="primary">
                {data.cta.label}
              </Link>
            </Actions>
          )}
        </Heading>
        <ImageWidget src="https://picsum.photos/200/300" shape="semicircle-l" className="col-span-full row-start-1 row-end-2 w-full h-40" />
        <ImageWidget
          src="https://picsum.photos/300/200"
          shape="semicircle-t"
          className="-col-start-1 -col-end-3 -row-start-1 -row-end-2 h-full w-full h-60"
        />
        <div className="rounded-full w-full aspect-square col-start-1 col-end-3 -row-start-1 -row-end-2 bg-primary self-end"></div>
      </div>
    </section>
  );
};
