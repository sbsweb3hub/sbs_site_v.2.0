import Image from "next/image"
import Blogo from '@/public/Logo.png'

const Logo = () => {
    return (
        <div className="flex max-[995px]:flex-col text-[#FCFC03] text-[128px] 
                font-semibold italic min-[996px]:mt-[66px] mt-[-60px] scale-85 max-[995px]:scale-[0.6]">
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