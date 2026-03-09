import { CuratedTrips } from "../components/CuratedTrips";
import { PublicTrips } from "../components/PublicTrips";
import { Regions } from "../components/Regions";

export default function Feed() {
  return (
    <>
      <CuratedTrips />
      <Regions />
      <PublicTrips />
    </>
  );
}
