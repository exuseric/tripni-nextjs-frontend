import {MainNavigationProvider} from "@/features/main-navigation/MainNavigationContext";
import {MainNavigationContainer} from "@/features/main-navigation/MainNavigationContainer";
import {getNavigationLinks} from "@/features/main-navigation/lib/get-navigation-links";

export const MainNavigation = async () => {
    const links = await getNavigationLinks()
    return (
        <MainNavigationProvider initialLinks={links}>
            <MainNavigationContainer />
        </MainNavigationProvider>
    );
};