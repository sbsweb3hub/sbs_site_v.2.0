import React from "react";
import '@/app/components/WelcomePage/WelcomePageContent/index.css'
import { Button } from "@nextui-org/react";
import { Chakra_Petch } from "next/font/google";
import Link from "next/link";

const chakraPetch = Chakra_Petch({ weight: '600', subsets: ['latin'] })



const EnterAppButton = () => {
    return (
        <div className={chakraPetch.className}>
            <Link href='/app'>
                <Button isDisabled className="svg-button">
                    App Soon
                </Button>
            </Link>

        </div>
    )
}

export default EnterAppButton
