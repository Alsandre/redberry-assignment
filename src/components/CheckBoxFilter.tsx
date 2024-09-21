import { ICheckBoxFilterProps } from "../types";
import { generateUID } from "../utils/generateUID";
import { ControlledCheckbox } from "./ui/ControlledCheckBox";

export const CheckboxFilter = ({
  options,
  fieldName,
}: ICheckBoxFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 w-[710px]">
      {options.map((option) => (
        <label
          key={generateUID()}
          className="flex gap-2 items-center w-[225px]"
        >
          <ControlledCheckbox fieldName={fieldName} value={option.value} />
          {option.label}
        </label>
      ))}
    </div>
  );
};
