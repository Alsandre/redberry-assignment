import React from "react";
import { useController, Control, FieldValues } from "react-hook-form";

interface SelectProps extends FieldValues {
  control: Control;
  name: string;
  options: { value: string; label: string }[];
  label: string;
}

export const ControlledSelect: React.FC<SelectProps> = ({
  control,
  name,
  options,
  label,
}) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <select {...field}>
      <option value="">{label}</option>
      {options.map((option: { value: string; label: string }) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
