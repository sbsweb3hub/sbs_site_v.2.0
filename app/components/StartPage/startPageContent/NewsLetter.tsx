import React, {useState, useEffect} from "react";
import { Button, Input, Link } from "@nextui-org/react";


const NewsLetter = () => {
    
    // const [email, setEmail] = useState<string>("");
    // const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

    // const validateEmail = (email: string) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };

    // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => { 
    //     const emailInput = e.target.value;
    //     setEmail(emailInput);
    //     setButtonDisabled(!validateEmail(emailInput));
    // };

    // const handleSubscribe = () => {
    //     console.log(email)
    //     alert("Thank you for subscribing! You will now receive the latest updates.")
    //     setEmail("")
    //     setButtonDisabled(true)
    // };


    return (
        <div className="flex max-[820px]:flex-col min-[820px]:justify-between  items-center max-[434px]:w-[90%] w-[60%]
                 h-fit min-[600px]:h-[222px] rounded-[20px] bg-[#657276B2] max-[1028px]:gap-3 max-[1028px]:py-[20px] mt-[320px]">
            <div className="flex flex-col min-[820px]:ml-[39px] max-[540px]:mx-[10px]">
                <div className="text-[#FFF] text-[24px] font-normal">
                    Want to be Early?
                </div>
                <div className="text-[#EBEE4F] text-[32px] font-extrabold">
                    Apply now for Beta.
                </div>
            </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 items-start sm:items-center mr-[39px] max-[1028px]:ml-[39px]">
                    <div>
                        <Button
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf6hXqYqZDl-cdcpmmBznE9DpN3E7_siSZRRtiEc1JHwhT1qA/viewform"
                            as={Link}
                            target="blank"
                            style={{
                                backgroundColor: '#D6D940',
                                borderRadius:'20px',
                                color: '#000',
                                fontSize: '24px',
                                fontWeight: '400',
                                width: '200px',
                                height: '62px'
                            }}
                        >
                                Join Beta
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default NewsLetter