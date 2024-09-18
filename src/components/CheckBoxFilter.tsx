import { ICheckBoxFilterProps } from "../types";

export const CheckboxFilter = ({ register, options }: ICheckBoxFilterProps) => {
  return (
    <>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            {...register("regions")} // Register this checkbox group with React Hook Form
          />
          {option.label}
        </label>
      ))}
    </>
  );
};
