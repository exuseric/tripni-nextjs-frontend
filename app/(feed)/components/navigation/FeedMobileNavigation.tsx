import { LINKS } from '@/common/constants/url.constant';
import { Link } from '@/common/ui/button/Link';
import { ActionBar, BottomBar, NavigationBar, NavigationBarItem } from '@/common/ui/navigation/bottom-bar/BottomBar';
import { BinocularsIcon, MagnifyingGlassIcon, PathIcon, PlusCircleIcon, UserCircleIcon } from '@phosphor-icons/react/dist/ssr';


const feedLinks = [
    {
        id: 0,
        label: "explore",
        url: LINKS.PAGES.PUBLIC.feed,
        icon: <BinocularsIcon size={20} weight="regular" />,
        activeIcon: <BinocularsIcon size={20} weight="fill" />
    },
    {
        id: 1,
        label: "Trips",
        url: LINKS.PAGES.PROTECTED.trips,
        icon: <PathIcon size={20} weight="regular" />,
        activeIcon: <PathIcon size={20} weight="fill" />
    },
    {
        id: 2,
        label: "Find",
        url: LINKS.PAGES.PUBLIC.search,
        icon: <MagnifyingGlassIcon size={20} weight="regular" />,
        activeIcon: <MagnifyingGlassIcon size={20} weight="fill" />
    },
    {
        id: 3,
        label: "profile",
        url: LINKS.PAGES.PROTECTED.profile,
        icon: <UserCircleIcon size={20} weight="regular" />,
        activeIcon: <UserCircleIcon size={20} weight="fill" />
    }
]

export const FeedMobileNavigation = () => {
    return (
        <BottomBar>
            <ActionBar>
                <Link href={LINKS.PAGES.PROTECTED.createTrip} className="shadow-level-2" variant="primary" aria-label='Create a new trip' isIconOnly>
                    <PlusCircleIcon size={20} weight="fill" />
                </Link>
            </ActionBar>
            <NavigationBar>
                {feedLinks.map((link) => (
                    <NavigationBarItem
                        key={link.id}
                        href={link.url}
                        label={link.label}
                        icon={link.icon}
                        activeIcon={link.activeIcon}
                    />
                ))}
            </NavigationBar>
        </BottomBar>
    );
};