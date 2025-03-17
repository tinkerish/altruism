import "../styles/loading.css";
const Loading = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-50 bg-black text-white flex items-center justify-center">
      <div className="rounded-[100%] w-[200px] h-[200px] customColor relative">
        <div className="customLoader"></div>
      </div>
    </div>
  );
};

export default Loading;
