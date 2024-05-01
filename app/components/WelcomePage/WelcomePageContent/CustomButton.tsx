import React from "react";
import '@/app/components/WelcomePage/WelcomePageContent/index.css'
import { Button } from "@nextui-org/react";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({ weight: '600', subsets: ['latin'] })



const EnterAppButton = () => {
    return (
        <div className={chakraPetch.className}>
            <Button isDisabled className="svg-button">
                App Soon
            </Button>

        </div>
    )
}

export default EnterAppButton
