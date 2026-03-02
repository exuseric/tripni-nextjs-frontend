import { Link } from "@/common/ui/Link";
import { AUTH_CONSTANTS } from "@/common/constants";
import { CompassIcon } from "@phosphor-icons/react/ssr";

export const SignInButton = () => {
  return (
    <Link href={AUTH_CONSTANTS.redirectTo} variant="primary">
      <span>Create a trip</span>
      <CompassIcon size={20} weight="fill" className="group-hover:rotate-180 transition-transform duration-300 ease-animation-in-out" />
    </Link>
  );
};
