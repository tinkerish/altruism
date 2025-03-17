import Feature from "../components/Landing/Feature";
import Feedbacks from "../components/Landing/Feedbacks";
import HeroIntro from "../components/Landing/HeroIntro";
import PopularRecipes from "../components/Landing/PopularMemes";

const HomePageComponent = () => {
  return (
    <div className="flex flex-col">
      <HeroIntro />
      <PopularRecipes />
      <Feature />
      <Feedbacks />
    </div>
  );
};

export const HomePage = HomePageComponent;
