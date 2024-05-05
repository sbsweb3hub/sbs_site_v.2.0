import Image from "next/image"
import Blogo from '@/public/Logo.png'

const Logo = () => {
    return (
        <div className="flex text-[#FCFC03] text-[128px] font-semibold italic mt-[66px]">
            <div>
                Step-
            </div>
            <div className="flex items-center justify-center"> 
                <Image 
                    src={Blogo}
                    alt=""
                    width={122}
                    height={82}
                    
                />
                <div>
                    last-
                </div>
            </div>
            <div>
                Step
            </div>
        </div>
    )
}

export default Logo