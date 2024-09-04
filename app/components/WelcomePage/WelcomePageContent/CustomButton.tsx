import React from "react";
import '@/app/components/WelcomePage/WelcomePageContent/index.css'
import { Button, Link } from "@nextui-org/react";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({ weight: '600', subsets: ['latin'] })



const EnterAppButton = () => {
    return (
        <div className={chakraPetch.className}>
            <Button 
            className="svg-button" 
            href='/app'
            as={Link}
            target="blank">
                Launch App
            </Button>

        </div>
    )
}

export default EnterAppButton
