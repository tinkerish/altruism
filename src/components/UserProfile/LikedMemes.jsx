import RecipeListComponent from "../Memes/MemeList";

const LikedMemes = ({ memes }) => {
  if (memes.length === 0)
    return (
      <div className="text-center text-xl text-gray-500">
        No liked memes yet.
      </div>
    );
  return <RecipeListComponent foods={memes} />;
};

export default LikedMemes;
