import React from "react";
import { useController, Control, UseControllerProps } from "react-hook-form";

interface ITextAreaProps extends UseControllerProps {
  control: Control;
  name: string;
  label: string;
  required: boolean;
}

export const ControlledTextarea: React.FC<ITextAreaProps> = ({
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
