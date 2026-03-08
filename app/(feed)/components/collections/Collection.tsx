import { Link } from "@/common/ui/button/Link"
import { Actions, Heading, Title } from "@/common/ui/Heading"
import { regionService } from "@/data/services/region.service"
import { ReactNode } from "react"

type CollectionProps = {
    title: string
    page: string
    children: ReactNode
    stickyHeader?: boolean
}

export const Collection = async ({ title, page, children, stickyHeader = false }: CollectionProps) => {
    return (
        <div className="py-4">
            <Heading variant="page" align="between" className={`container col-span-full py-3 ${stickyHeader ? 'sticky top-0 z-50 bg-surface' : ''}`}>
                <Title level="h2">
                    {title}
                </Title>
                <Actions>
                    <Link href={page} variant="quiet">
                        Show all
                    </Link>
                </Actions>
            </Heading>
            <div className="container">
                {children}
            </div>
        </div>
    )
}