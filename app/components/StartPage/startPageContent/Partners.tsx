import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion, useAnimation } from 'framer-motion';
import { Waypoint } from 'react-waypoint';
import LetterFadeInText from "./FadedText";

export default function Partners() {
  const controls = useAnimation();

  const onEnter = () => {
    controls.start((i) => ({
      x: 0, 
      opacity: 1, 
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    }));
  };

  const list = [
    { title: "Nomis", img: "/nomis.jpeg", price: "Score" },
    { title: "Gitcoin", img: "/gitcoin.jpeg", price: "Score" },
    { title: "0xScore", img: "/0xScore.png", price: "Score" },
    { title: "Chainalysis", img: "/Chainanalisis.png", price: "AML" },
  ];

  return (
    <>
      <div className="text-[36px] text-[#FFF] font-bold mt-[80px] mb-[40px]">
            <LetterFadeInText text="Our Scoring System"  useWaypoint={true} />
        </div>
      <Waypoint onEnter={onEnter}>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }} 
            animate={controls}
          >
            <Card shadow="sm" isPressable isHoverable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between bg-[#D6DA1D]">
                <b className="text-[#1C1C1C]">{item.title}</b>
                <p className="text-[#000]">{item.price}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      </Waypoint>
    </>
  );
}
