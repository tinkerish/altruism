import MemeDetail from "../Memes/MemeDetails.jsx";

const Preview = ({ memeData }) => {
  if (memeData) {
    return <MemeDetail newMeme={memeData} />;
  }
  return (
    <div className="text-center text-xl text-gray-500">No preview to show</div>
  );
};

export default Preview;
