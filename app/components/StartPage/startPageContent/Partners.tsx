import React from "react";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
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
    { title: "Nomis", img: "/nomis.jpeg", price: "Score", link: "https://nomis.cc/" },
    { title: "Fintop", img: "/fintop.svg", price: "Partner", link: "https://fintop.space/" },
    { title: "BitOK", img: "/bitok.svg", price: "AML", link: "https://bitok.org/" },
   /*  { title: "0xScore", img: "/0xScore.png", price: "Score" },
    { title: "Chainalysis", img: "/chainalysis.svg", price: "AML" }, */
  ];

  return (
    <>
      <div className="text-[36px] text-[#FFF] font-bold mt-[80px] mb-[40px] max-[650px]:scale-[0.85]">
            <LetterFadeInText text="Partners & Support"  useWaypoint={true} />
      </div>
      <Waypoint onEnter={onEnter}>
      <div className="flex justify-center gap-5 max-[600px]:scale-[0.6]">
        {list.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }} 
            animate={controls}
          >
            <Card 
              as={Link} 
              href={item.link}
              target='blank' 
              shadow="sm" 
              isPressable 
              isHoverable 
            >
              <CardBody className="overflow-visible p-0 w-[150px]">
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
