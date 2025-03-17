const Select = ({
  label,
  options,
  value,
  onChange,
  name,
  labelHidden,
  inputClassName,
  className,
  labelClassName,
  ariaDescribedby,
  ariaInvalid,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className={`${labelClassName} ${labelHidden ? "sr-only" : ""}`}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className={inputClassName}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
