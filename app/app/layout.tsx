import { ReactNode } from "react"
import Header from "../components/header/header"
export const dynamic = 'force-dynamic'

export default function AppLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <section>
            <Header />

            {children}

        </section>
    )
}
