import { ReactNode } from "react"
import Header from "../components/header/header"
import MobileBlock from "../components/MobileBlock"
export const dynamic = 'force-dynamic'

export default function AppLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <>
            <section className="max-[750px]:hidden">
                <Header />

                {children}

            </section>
            <section className="min-[751px]:hidden">
                <MobileBlock />
            </section>
        </>
    )
}
