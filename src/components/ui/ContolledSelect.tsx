import React from "react";
import { useController } from "react-hook-form";
import { IControlledSelectProps } from "../../types";

export const ControlledSelect: React.FC<IControlledSelectProps> = ({
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
