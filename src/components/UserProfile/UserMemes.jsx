import RecipeListComponent from "../Memes/MemeList";

const UserMemes = ({ memes }) => {
  if (memes.length === 0)
    return (
      <div className="text-center text-xl text-gray-500">
        Add memes to display here.
      </div>
    );
  return <RecipeListComponent foods={memes} />;
};

export default UserMemes;
