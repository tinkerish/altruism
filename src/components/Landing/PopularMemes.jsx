import "../../styles/pop_recipes.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMemeStore from "../../store/formStore";
const PopularRecipes = () => {
  const carouselRef = useRef(null);
  const { memes } = useMemeStore();
  const [dragConstraints, setDragConstraints] = useState(undefined);

  useEffect(() => {
    const updateConstraints = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const parentWidth = container.parentElement.offsetWidth;
        const scrollWidth = container.scrollWidth;

        setDragConstraints({ left: -(scrollWidth - parentWidth), right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, [memes]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col gap-48 max-xl:gap-48 max-xxl:gap-36 max-xlg:gap-24 max-md:gap-12 max-xsm:gap-8 overflow-hidden mt-[9rem]"
    >
      <div className="flex flex-col gap-4 text-white max-xsm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pl-32 font-garamond text-8xl font-black max-xxl:text-[6xl] max-xxl:pl-16 max-xlg:text-5xl max-sm:text-4xl max-sm:pl-0 max-sm:text-center"
        >
          Browse Most Popular Events
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pl-96 font-itim text-3xl opacity-80 max-xxl:h-[3xl] max-xxl:pl-32 max-xlg:text-2xl max-sm:text-xl max-sm:pl-0 max-sm:text-center"
        >
          Scroll. Laugh. Repeat.
        </motion.span>
      </div>

      <motion.div
        className="cursor-grab relative"
        drag="x"
        dragConstraints={dragConstraints}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="static h-[100px] translate-y-[350%] slider-path w-[10000px] -translate-x-48 max-xl:translate-y-[300%] max-xxl:translate-y-[240%] max-xxsm:translate-y-[180%]"></div>
        <div
          className="flex gap-[30rem] px-[350px] max-xl:gap-[20rem] max-xl:px-[250px]  max-xxl:px-[150px] max-xsm:px-[100px] max-xxl:gap-[10rem] max-sm:gap-[7rem] max-xxsm:gap-[3rem]"
          ref={carouselRef}
        >
          {memes.slice(0, 10).map((recipe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col gap-8 items-center w-[300px] max-sm:gap-4 relative"
            >
              <div className="irregular-wrapper w-[600px] h-[600px] max-xl:w-[500px] max-xl:h-[500px] max-xxl:w-[400px] max-xxl:h-[400px] max-lg:w-[350px] max-lg:h-[350px] max-xxsm:w-[250px] max-xxsm:h-[250px] flex items-center justify-center glowy-wrapper">
                <img
                  src={recipe.url}
                  alt={recipe.name}
                  className="w-[500px] h-[500px] max-xl:w-[400px] max-xl:h-[400px]  max-xxl:w-[300px] max-xxl:h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-xxsm:w-[150px] max-xxsm:h-[150px] object-cover rounded-full pointer-events-none"
                />
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                className="font-semibold font-itim text-4xl max-xlg:text-2xl max-sm:text-2xl text-white"
              >
                {recipe.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PopularRecipes;
