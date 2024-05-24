import Image from "next/image"
import Blogo from '@/public/Logo.png'

const Logo = () => {
    return (
        <div className="flex max-[995px]:flex-col text-[#FCFC03] text-[128px] 
                font-semibold italic min-[996px]:mt-[66px] mt-[-60px] scale-85 max-[995px]:scale-[0.6]">
            <div className="flex items-center w-[100%] justify-center"> 
                <div className="ml-[60px]">
                    AngelForge
                </div>
                <Image
                    src='/forgelogo.png'
                    alt=""
                    width={320}
                    height={240}
                    className="ml-[-50px]"
                    
                />
            </div>
        </div>
    )
}

export default Logo