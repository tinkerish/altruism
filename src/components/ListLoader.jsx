import "../styles/listCard.css";

export const ListLoader = () => {
  return (
    <div className="w-[100%] min-h-[100vh] bg-white p-8 flex flex-col gap-8 shadow-lg rounded-md">
      <div className="h-[200px] customShadow rounded-md flex items-center">
        <div>
          <div className="w-[10%] shadow-2xl"></div>
          <div className="flex flex-col w-[87%] p-4  gap-2"></div>
        </div>
      </div>
      <div className="h-[200px] customShadow rounded-md flex items-center">
        <div>
          <div className="w-[10%] shadow-2xl"></div>
          <div className="flex flex-col w-[87%] p-4  gap-2"></div>
        </div>
      </div>
      <div className="h-[200px] customShadow rounded-md flex items-center">
        <div>
          <div className="w-[10%] shadow-2xl"></div>
          <div className="flex flex-col w-[87%] p-4  gap-2"></div>
        </div>
      </div>
    </div>
  );
};
