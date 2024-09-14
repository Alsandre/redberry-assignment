import React from "react";
import { useController } from "react-hook-form";
import { IControlledComponentProps } from "../../types";

export const ControlledTextarea: React.FC<IControlledComponentProps> = ({
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
