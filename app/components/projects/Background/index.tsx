import Image from "next/image";
import blueBg from "@/public/blue-background.png";
import css from "./index.module.scss";

export const Background = () => {
  return (
    <div className={css.imgContainer}> {/* Apply styles to this container */}
      <div className={css.img}> {/* Apply circular darkening effect to this div */}
        <Image
          src={blueBg}
          alt="image"
          width={900}
          height={800}
        />
      </div>
    </div>
  );
};
