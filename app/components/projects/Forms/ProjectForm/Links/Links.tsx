import { Input } from '@nextui-org/react'

const Links = () => {
    return (
        <div className='flex flex-col ml-[117px]'>
            <p className='text-[26px] text-[#000] font-semibold mb-[46px]'>
                Links
            </p>
            <div className='flex flex-col gap-[32px]'>
                <Input  
                    variant="faded"
                    labelPlacement="outside"
                    label="Website"
                    placeholder="https://launch.com"
                    className="w-[256px] h-[41px] text-[#000]"
                />
                <Input  
                    variant="faded"
                    labelPlacement="outside"
                    label="Project Twitter"
                    placeholder="https://twitter.com/superproject"
                    className="w-[346px] h-[41px] text-[#000]"
                />
                 <Input  
                    variant="faded"
                    labelPlacement="outside"
                    label="Project Discord"
                    placeholder="https://discord.com/superproject"
                    className="w-[346px] h-[41px] text-[#000]"
                />
                 <Input  
                    variant="faded"
                    labelPlacement="outside"
                    label="Project Telegram"
                    placeholder="https://t.me/superproject"
                    className="w-[346px] h-[41px] text-[#000]"
                />
                <Input 
                    isRequired
                    variant="faded"
                    labelPlacement="outside"
                    label="Whitepaper/Pitch"
                    placeholder="https://drive.google.com/drive/...."
                    className="w-[577px] h-[41px] text-[#000]"
                />
            </div>
        </div>
    )
}

export default Links