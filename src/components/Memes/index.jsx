import RecipeList from "./MemeList";
import { Loader } from "../Loader";
const MemeComponent = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="min-h-[30vh] w-full flex justify-center items-center">
        <div className="text-center text-xl text-white ">No Data Available</div>
      </div>
    );
  }
  return (
    <div className="p-4 pt-16">
      <RecipeList foods={data} />
    </div>
  );
};

// export const GeneralList =         (GeneralListComponent);
export const Meme = MemeComponent;
