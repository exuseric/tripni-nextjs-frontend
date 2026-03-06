import { useHero } from "@/app/(main)/components/homepage-hero/hooks/use-hero";
import { Actions, Description, Heading, Title } from "@/common/ui/Heading";
import { Link } from "@/common/ui/button/Link";
import { CompassIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { ImageWidget } from "@/common/ui/ImageWidget";

export const HomepageHero = () => {
  const data = useHero("1");
  return (
    <section className="min-h-screen py-container-block-sm sm:py-container-block flex-col-center" id="homepageHero">
      <div className="container">
        <Heading variant="hero" align="left" className="col-span-full row-start-2 row-span-1 md:col-span-6 md:row-start-2">
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
          src={data?.images.landscape ?? "https://picsum.photos/400/200"}
          width={400}
          height={200}
          shape="semicircle-l"
          className="col-start-1 col-span-full md:col-span-4 row-start-1 row-span-1 w-full h-40 md:h-50"
        />
        <ImageWidget
          src={data?.images.portrait ?? "https://picsum.photos/250/500"}
          width={250}
          height={500}
          shape="semicircle-t"
          className="col-start-3 col-span-2 row-start-3 row-span-1 md:col-start-7 md:col-end-9 md:row-start-1 md:row-span-2 w-full h-60 md:h-full md:w-60"
        />
        <div className="rounded-full w-full h-full aspect-square col-start-1 col-span-2 row-start-3 row-span-1 md:col-start-5 md:row-start-1 self-end flex-center">
          <MapPinIcon size={240} weight="fill" className="text-primary" />
        </div>
      </div>
    </section>
  );
};
