import React, { useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { motion, useAnimation } from 'framer-motion';

interface LetterFadeInTextProps {
  text: string;
  useWaypoint?: boolean;
}

const LetterFadeInText: React.FC<LetterFadeInTextProps> = ({ text, useWaypoint = false }) => {
  const controls = useAnimation();
  const middleIndex = Math.floor(text.length / 2);
  const letterArray = text.split("");

  useEffect(() => {
    if (!useWaypoint) {
      startAnimation();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const startAnimation = () => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: Math.abs(i - middleIndex) * 0.05, type: 'spring', stiffness: 50, damping: 20 }
    }));
  };

  function renderLetters() {
    return letterArray.map((letter, index) => (
      <motion.span
        key={index}
        custom={index}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        {letter}
      </motion.span>
    ));
  }

  return (
    useWaypoint ? 
      <Waypoint onEnter={startAnimation}>
        <div style={{ display: 'flex', justifyContent: 'center', whiteSpace: 'pre-wrap' }}>{renderLetters()}</div>
      </Waypoint>
    :
      <div style={{ display: 'flex', justifyContent: 'center', whiteSpace: 'pre-wrap' }}>{renderLetters()}</div>
  );
};

export default LetterFadeInText;
