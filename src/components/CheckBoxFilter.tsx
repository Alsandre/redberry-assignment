import { ICheckBoxFilterProps } from "../types";
import { ControlledCheckbox } from "./ui/ControlledCheckBox";

export const CheckboxFilter = ({
  options,
  fieldName,
}: ICheckBoxFilterProps) => {
  return (
    <>
      {options.map((option) => (
        <label key={option.value}>
          <ControlledCheckbox fieldName={fieldName} value={option.value} />
          {option.label}
        </label>
      ))}
    </>
  );
};
