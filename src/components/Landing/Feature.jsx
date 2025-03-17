import { ThemeContext } from "../../context/ThemeContext";
import "../../styles/feature.css";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const foods = [
  { name: "apple", img: "feauture-foods/blob.svg" },
  { name: "banana", img: "feauture-foods/blob1.svg" },
  { name: "lemon", img: "feauture-foods/blob2.svg" },
  { name: "strawberry", img: "feauture-foods/blob3.svg" },
  { name: "circle", img: "feauture-foods/blob4.svg" },
  { name: "cherry", img: "feauture-foods/blob17.svg" },
  { name: "kiwi", img: "feauture-foods/blob16.svg" },
  { name: "apple", img: "feauture-foods/blob15.svg" },
  { name: "orange", img: "feauture-foods/blob5.svg" },
  { name: "kiwi", img: "feauture-foods/blob6.svg" },
  { name: "lemon", img: "feauture-foods/blob7.svg" },
];
const randomFoods = [
  { name: "circle", img: "feauture-foods/blob8.svg" },
  { name: "orange", img: "feauture-foods/blob9.svg" },
  { name: "cherry", img: "feauture-foods/blob10.svg" },
  { name: "lemon", img: "feauture-foods/blob11.svg" },
  { name: "pear", img: "feauture-foods/blob12.svg" },
  { name: "kiwi", img: "feauture-foods/blob13.svg" },
  { name: "watermelon", img: "feauture-foods/blob14.svg" },
  { name: "banana", img: "feauture-foods/blob17.svg" },
];
const Feature = () => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  useEffect(() => {
    const featureFoodsSpan = document.querySelectorAll(".feature-food span");
    const featureFoods = document.querySelectorAll(".feature-food");
    featureFoods.forEach((food) => {
      const yOffset = food.getAttribute("data-y-offset");
      console.log(yOffset);
      food.style.setProperty("--y-offset", yOffset);
    });
    featureFoodsSpan.forEach((food) => {
      const imageUrl = food.getAttribute("data-image");
      const widthOffset = food.getAttribute("data-width-offset");
      const rotationOffset = food.getAttribute("data-rotation-offset");
      food.style.setProperty("--image", imageUrl);
      food.style.setProperty("--width-offset", widthOffset);
      food.style.setProperty("--rotation", rotationOffset);
    });
  }, []);
  const handleClick = (index) => {
    const randomIndexExceptPrevOrNext = generateRandomIndex();
    const nodeList = document.getElementById("feature-irregular-shape");
    if (nodeList) {
      const indexNode = nodeList.childNodes[index].childNodes[0];
      indexNode.style.setProperty("--custom-transform", "scale(0)");
      setTimeout(() => {
        indexNode.style.setProperty(
          "--image",
          `url(${randomFoods[randomIndexExceptPrevOrNext].img})`
        );
        indexNode.style.setProperty("--custom-transform", "scale(1)");
      }, 400);
    }
  };
  const generateRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * randomFoods.length);
    return randomIndex;
  };
  return (
    <div className="relative py-36 text-center feature-content-irregular-shape mt-[9rem]">
      <div
        className="feature-irregular-shape flex flex-wrap justify-between overflow-hidden p-12 absolute w-full h-full top-0 left-0"
        id="feature-irregular-shape"
        style={{
          background: theme === "dark" ? "#897934" : "",
          color: theme === "dark" ? "#fff" : "",
        }}
      >
        {foods.map((food, index) => {
          return (
            <div
              className="feature-food relative z-10"
              data-y-offset={-1 + Math.random() * 2}
            >
              <span
                data-image={`url(${food.img})`}
                onMouseOver={() => handleClick(index)}
                data-width-offset={Math.random() + 1.5}
                data-rotation-offset={-15 + Math.random() * 31}
              ></span>
            </div>
          );
        })}
      </div>
      <div
        className=" relative max-w-[80%] mx-auto text-[#3f9097] pointer-events-none"
        style={{
          color: theme === "dark" ? "#fff" : "",
        }}
      >
        <div className=" flex flex-col gap-8 items-center">
          <h3 className="text-9xl font-garamond font-black max-xlg:text-6xl max-sm:text-4xl">
            Discover Events
          </h3>
          <div>
            <p className="font-itim text-3xl font-bold max-xlg:text-2xl max-sm:text-xl">
              Endless laughs, viral moments, and the best memories—all in one
              place!
            </p>
          </div>

          <Link to="/my-event">
            <motion.button
              className="rounded-full bg-[#ffcb31] p-5 text-black max-xxsm:p-3 max-xxxsm:text-xs w-fit text-3xl font-semibold max-xlg:text-2xl max-sm:text-xl"
              style={{
                background: theme === "dark" ? "#1c484d" : "",
                color: theme === "dark" ? "#fff" : "",
                pointerEvents: "auto",
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
