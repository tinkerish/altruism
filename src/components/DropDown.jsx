import { Loader } from "./Loader";

const DropDown = ({ options, onChange, loading }) => {
  return (
    <div className="flex flex-col gap-3 overflow-y-auto max-h-[200px] absolute top-full left-0 items-center h-[200px] bg-white w-full  shadow-2xl rounded-md">
      {loading ? (
        <Loader />
      ) : (
        options.map((option) => {
          return (
            <div
              key={option.id}
              className="w-full hover:bg-[#9a8c4b7e] p-2"
              onClick={() => {
                console.log("clicker");
                onChange(option);
              }}
            >
              <p>{option.name}</p>
              <p className="text-gray-500">
                {option.street && <span>{option.street}, </span>}
                {option.city && <span>{option.city}, </span>}
                {option.state && <span>{option.state}, </span>}
                {option.country && <span>{option.country}</span>}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DropDown;
