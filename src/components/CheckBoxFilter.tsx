import { ICheckBoxFilterProps } from "../types";
import { ControlledCheckbox } from "./ui/ControlledCheckBox";

export const CheckboxFilter = ({
  options,
  fieldName,
}: ICheckBoxFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 w-[710px]">
      {options.map((option) => (
        <label key={option.value} className="flex gap-2 items-center w-[225px]">
          <ControlledCheckbox fieldName={fieldName} value={option.value} />
          {option.label}
        </label>
      ))}
    </div>
  );
};
