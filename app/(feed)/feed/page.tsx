import { CarouselCollections } from "@/app/(feed)/components/collections/CarouselCollections";
import { GridCollection } from "../components/collections/GridCollections";

export default function Feed() {
  return (
    <>
      <CarouselCollections />
      <GridCollection />
    </>
  );
}
