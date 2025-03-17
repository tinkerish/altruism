import { BiSolidError } from "react-icons/bi";
const Error = ({ errorMessage }) => {
  return (
    <div>
      <p className="flex text-red-700">
        <BiSolidError size={20} />
        {errorMessage}
      </p>
    </div>
  );
};

export default Error;
