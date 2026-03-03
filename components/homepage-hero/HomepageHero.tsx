import { useHero } from "@/components/homepage-hero/hooks/use-hero";
import { Heading, Title, Description, Actions } from "@/common/ui/Heading";
import { ImageWidget } from "@/common/ui/ImageWidget";
import { Link } from "@/common/ui/Link";
import { CompassIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";

export const HomepageHero = () => {
  const data = useHero("1");
  return (
    <section className="bg-backgound min-h-screen py-container-block container" id="homepageHero">
      <div className="grid grid-cols-4 md:grid-cols-12 grid-rows-[repeat(3,auto)] md:grid-rows-[repeat(2,auto)] gap-4 md:gap-x-6 h-fit w-full">
        <Heading variant="hero" align="center" className="col-span-full md:col-span-6 md:row-start-2">
          <Title>{data?.title}</Title>
          <Description>{data?.description}</Description>
          <Actions>
            {data?.cta && (
              <Link href={data.cta.link} variant="primary">
                <span>{data.cta.label}</span>
                <CompassIcon size={20} weight="fill" className="group-hover:rotate-180 transition-transform duration-300 ease-animation-in-out" />
              </Link>
            )}
            {data?.secondaryCta && (
              <Link href={data.secondaryCta.link} variant="secondary">
                <span>{data.secondaryCta.label}</span>
              </Link>
            )}
          </Actions>
        </Heading>
        <ImageWidget
          src="https://picsum.photos/200/300"
          shape="semicircle-l"
          className="col-start-1 col-span-full md:col-span-4 row-start-1 row-span-1 w-full h-40 md:h-50"
        />
        <ImageWidget
          src="https://picsum.photos/300/200"
          shape="semicircle-t"
          className="-col-start-1 md:col-start-7 md:col-end-9 -col-end-3 -row-start-1 md:row-start-1 -row-end-2 md:-row-end-1 w-full h-60 md:h-full md:w-60"
        />
        <div className="rounded-full w-full h-full aspect-square col-start-1 md:col-start-5 col-span-2 -row-start-1 md:row-start-1 -row-end-2 md:row-end-1 self-end flex-center">
          <MapPinIcon size={240} weight="fill" className="text-primary" />
        </div>
      </div>
    </section>
  );
};
