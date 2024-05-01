import { ReactNode } from "react"
import Header from "../components/Header/header"
import Footer from "../components/Footer"

export default function AppLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <section>
            <Header />

            {children}
            <Footer />

        </section>
    )
}
