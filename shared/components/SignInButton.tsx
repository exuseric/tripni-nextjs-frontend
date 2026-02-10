import Link from "next/link";
import {AUTH_CONSTANTS} from "@/shared/constants";
import {CompassIcon} from "@phosphor-icons/react/ssr";

export const SignInButton = () => {
    return (
        <Link href={AUTH_CONSTANTS.redirectTo} className="btn-filled group">
            Add a trip
            <CompassIcon size={20} weight="fill" className="group-hover:rotate-180 transition-transform duration-300 ease-animation-in-out"/>
        </Link>
    );
};