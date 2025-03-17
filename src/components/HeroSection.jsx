import bowl from "../assets/bowl.png";
const HeroSectionComponent = () => {
  return (
    <div className="flex items-center justify-center animate-customPulse">
      <img src={bowl} alt="Bowl" />
    </div>
  );
};

// export const HeroSection =         (HeroSectionComponent);
export const HeroSection = HeroSectionComponent;
