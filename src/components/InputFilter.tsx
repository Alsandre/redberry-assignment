import { IFilterProps } from "../types";

export const InputFilter = ({ register, fieldName }: IFilterProps) => {
  return (
    <div>
      <input
        className="border border-solid border-rdbryBorder-50 rounded-[6px] py-3 px-[10px] h-10 w-10 text-center text-[14px] font-medium leading-[16.8px]"
        placeholder="2"
        type="text"
        {...register(fieldName)}
      />
    </div>
  );
};
