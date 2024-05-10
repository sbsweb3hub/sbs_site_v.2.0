import { motion } from "framer-motion";
import LoadingCard from "./LoadingProjectCard";
import ProjectCard from "./ProjectCard";

const CardContainer = () => {

  const numCards = 6;
  const cards = Array.from({ length: numCards * 2 });


  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <motion.div
        className="flex gap-[50px]"
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear"
        }}
        style={{ width: '200%' }}
      >
        {cards.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            {/* <ProjectCard isFunded={true} key={index} /> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

}

export default CardContainer
