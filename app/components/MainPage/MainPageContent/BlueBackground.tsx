import Image from "next/image"
import blueBg  from '@/public/blue-background.png'

const BlueBackgroud = () => {
    return (
        <div className="absolute z-[-1] right-0 top-0">
            <Image 
                src={blueBg}
                alt=""
                width={902}
                height={800}
            />
        </div>
    )
}

export default BlueBackgroud