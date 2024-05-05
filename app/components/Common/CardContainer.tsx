import { motion  } from "framer-motion";
import LoadingCard from "./LoadingProjectCard";
import ProjectCard from "./ProjectCard";

const CardContainer = () => {

    const numCards = 6; // Минимальное количество карточек для покрытия всего экрана
    const cards = Array.from({ length: numCards * 2 }); // Удваиваем количество для плавности
  
    // return (
    //     <motion.div
    //       className="flex gap-3"
    //       initial={{ translateX: 0 }}
    //       animate={{ translateX: '-100%' }}
    //       transition={{
    //         repeat: Infinity,
    //         repeatType: "loop",
    //         duration: 300 // Убедитесь, что 'duration' указан как число
    //       }}
    //     >
    //       {Array.from({ length: 12 }).map((_, index) => (
    //         <LoadingCard key={index} />
    //       ))}
    //     </motion.div>
    //   );

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
        <motion.div
          className="flex gap-[50px]"
          initial={{ x: '0%' }}
          animate={{ x: '-50%' }} // Сдвигаем на 50%, что соответствует полной ширине первого набора карточек
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear" // Обеспечиваем линейную анимацию без замедления
          }}
          style={{ width: '200%' }} // Устанавливаем ширину контейнера в 200%
        >
          {cards.map((_, index) => (
               <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }}
             >
              <ProjectCard isFunded={true} key={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      );

  }

  export default CardContainer