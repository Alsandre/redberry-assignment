import { IFilterProps } from "../types";

export const InputFilter = ({ register, fieldName }: IFilterProps) => {
  return (
    <div>
      <label>
        <input type="text" {...register(fieldName)} />
      </label>
    </div>
  );
};
