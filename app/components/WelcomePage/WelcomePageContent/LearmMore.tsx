import React from "react";
import { Link } from "react-scroll";
import { Button } from "@nextui-org/react";

const LearnMore = () => {
    return (
        <>
            <Link
                activeClass="active" 
                to="info" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
            >
              {/*   <Button
                    variant="bordered"
                    color="default"
                    className="w-[153px] h-[37px] text-[#D4D4D4] text-[16px] font-light mt-[20px]"
                >
                    Learn more
                </Button> */}
                <button
                    className="w-[153px] h-[37px] text-[#D4D4D4] border-[1px] border-[#938C8C] rounded-[13px] hover:border-stone-800 text-[16px] font-light mt-[20px]"
                >
                    Learn more
                </button>
            </Link>
        </>
    )
}

export default LearnMore