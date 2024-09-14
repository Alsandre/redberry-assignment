import React from "react";
import {
  useController,
  Control,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

interface SelectProps extends UseControllerProps {
  control: Control;
  name: string;
  label: string;
  required: boolean;
}

export const ControlledTextarea: React.FC<SelectProps> = ({
  control,
  name,
  label,
  required,
}) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <label>
      {label}
      {required && " *"}
      <textarea {...field} />
    </label>
  );
};
