const CustomToggle = ({ onChange, value, type, size, label }) => {
  console.log(type);
  switch (type) {
    case "checkbox":
      return (
        <Checkbox onChange={onChange} value={value} size={size} label={label} />
      );
    case "switch":
      return (
        <Switch onChange={onChange} value={value} size={size} label={label} />
      );
    default:
      return null;
  }
};

const Checkbox = ({ value, onChange, label }) => {
  return (
    <div className="flex items-center gap-2">
      {label && <label>{label}</label>}
      <div className="relative flex">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className={`appearance-none relative peer shrink-0 border-2 border-solid border-black rounded-sm bg-white
            checked:bg-[#e3752c] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9`}
        />
        <svg
          className={`absolute hidden peer-checked:block pointer-events-none w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

const Switch = ({ value, onChange, label }) => {
  return (
    <div className="flex items-center gap-2">
      {label && <label>{label}</label>}
      <div className="relative">
        <button
          onClick={() => onChange(!value)}
          className={`flex items-center transition-all duration-300
            ${value ? "justify-end bg-[#e3752c]" : "justify-start bg-[#d2d2d2]"}
            w-16 h-8 sm:w-20 sm:h-9 md:w-24 md:h-10 lg:w-20 lg:h-8 rounded-full`}
        >
          <div className="h-full w-8 sm:w-9 md:w-10 lg:w-12 bg-white rounded-full shadow-md"></div>
        </button>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CustomToggle;
