import { useEffect } from "react";
import "../../styles/feedback.css";
const feedbacks = [
  {
    name: "Aarav Mehta",
    recipesCount: 45,
    rating: 4.9,
    message: "This platform has transformed the way I explore events!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sanya Kapoor",
    recipesCount: 38,
    rating: 4.8,
    message:
      "I love how easy it is to try new events! The interactive experience makes it fun.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Ishaan Verma",
    recipesCount: 52,
    rating: 5.0,
    message:
      "The best connection app I have ever used! They are a game-changer.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Neha Sharma",
    recipesCount: 29,
    rating: 4.7,
    message:
      "Great collection of memeories! The UI is smooth and the filters help a lot.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Feedbacks = () => {
  useEffect(() => {
    const floatingContents = document.querySelectorAll(".floating-content");
    floatingContents.forEach((element) => {
      const duration = Math.random() * 2 + 2;
      const translateY = Math.random() * 10 + 5;
      element.style.setProperty("--float-duration", `${duration}s`);
      element.style.setProperty("--float-translateY", `${translateY}px`);
    });
  }, []);
  return (
    <div className="px-20 max-sm:px-8 py-16 mt-[9rem] max-xsm:mt-[4rem]">
      <div className="flex flex-col items-center gap-16 p-4">
        {feedbacks.map((feedback, index) => (
          <div
            className={`feedback-bottom-irregular-shape w-[70%] max-sm:w-full relative p-8 floating-content rounded-full  ${
              index % 2 === 0 ? " self-start" : "self-end"
            }`}
          >
            <div
              className={`absolute feedback-irregular-shape h-full w-full top-0 left-0  rounded-full bg-[#00000040]`}
            ></div>
            <div
              className={`${
                index % 2 === 0 ? "self-start" : "self-end"
              } relative z-10 rounded-full px-10 py-6 bg-[#3ea0a9] max-lg:py-6 text-center`}
            >
              <p className="text-3xl text-white font-black max-lg:text-2xl max-md:text-xl">
                {feedback.message}
              </p>
              <p className="text-[#ffffffe6] mt-2 text-xl max-lg:text-lg">
                — {feedback.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Feedbacks;
