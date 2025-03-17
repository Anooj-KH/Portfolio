import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ card, setActive, id }) => {
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      // data-aos="fade-up"
      // data-aos-delay={Math.random() * 400}
      className="p-4 flex flex-col border-1 bg-blue-200 shadow-lg hover:scale-106 hover:shadow-4xl  
      dark:hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl cursor-pointer"
    >
      <div className="flex gap-4 flex-col w-full">
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <img
            src={card.src}
            alt={card.title}
            className="h-60 w-full rounded-lg object-cover object-top"
          />
        </motion.div>
        <div className="flex justify-center items-center flex-col">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-black text-center md:text-left text-base"
          >
            {card.title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
