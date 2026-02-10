const links = [
    {label: "Home", href: "/"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"},
    {label: "Add a trip", href: "/travel"}
];

export const getNavigationLinks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return links;
};