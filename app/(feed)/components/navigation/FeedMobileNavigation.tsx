import { LINKS } from '@/common/constants/url.constant';
import { Link } from '@/common/ui/button/Link';
import { PlusCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { MobileMenu } from '@/app/(feed)/components/navigation/components/MobileMenu';
import { SmoothBlur } from '@/common/components/SmoothBlur';


export const FeedMobileNavigation = () => {
    return (
        <div className="bg-transparent flex-col-center pb-safe-bottom fixed inset-x-0 bottom-0 z-50 h-fit">
            <div className="container">
                <div className="col-span-full flex-row-between justify-center items-center gap-x-1">
                    <MobileMenu />
                    <Link href={LINKS.PROTECTED.createTrip} variant="tonal" aria-label="Create a trip" isIconOnly>
                        <PlusCircleIcon size={32} weight="fill" />
                    </Link>
                </div>
            </div>
        </div>
    );
};