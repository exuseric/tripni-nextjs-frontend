import {Link} from '@/common/ui/Link';
import {LINKS} from '@/common/constants/url.constant';
import {BinocularsIcon, MagnifyingGlassIcon, PathIcon, UserCircleIcon, UserIcon} from '@phosphor-icons/react/dist/ssr';


const feedLinks = [
    {
        id: 0,
        label: "explore",
        url: LINKS.PUBLIC.feed,
        icon: <BinocularsIcon size={20} weight="fill" />
    },
    {
        id: 1,
        label: "Trips",
        url: LINKS.PROTECTED.trips,
        icon: <PathIcon size={20} weight="fill" />
    },
    {
        id: 2,
        label: "Find",
        url: LINKS.PUBLIC.search,
        icon: <MagnifyingGlassIcon size={20} weight="fill" />
    },
    {
        id: 3,
        label: "profile",
        url: LINKS.PROTECTED.profile,
        icon:<UserCircleIcon size={20} weight="fill" />
    }
]

export const MobileMenu = () => {
    return (
        <nav className="link flex-row-between gap-x-0 rounded-full w-full h-full p-1 bg-surface-container-low ring ring-primary/10 ring-inset">
            {feedLinks.map((link) => (
                <Link href={link.url} className="capitalize text-xs font-bold flex-col-center py-1 px-1 gap-y-1" key={link.id} variant={link.id === 0 ? "tonal" : "quiet"}>
                    {link.icon}
                    <span>{link?.label}</span>
                </Link>
            ))}
        </nav>
    );
};