import { ICheckBoxFilterProps } from "../types";

export const CheckboxFilter = ({ register, options }: ICheckBoxFilterProps) => {
  return (
    <>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            {...register(fieldName)}
          />
          {option.label}
        </label>
      ))}
    </>
  );
};
