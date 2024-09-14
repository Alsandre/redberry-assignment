import React from "react";
import { useController } from "react-hook-form";
import { IFormInputProps } from "../../types";

export const FormInput: React.FC<IFormInputProps> = (props) => {
  const { label, rules } = props;
  const { field, fieldState } = useController(props);
  const required = rules?.required;
  const message = rules?.required as string;
  const isValid = fieldState.isDirty && !fieldState.invalid;
  const isError = fieldState.isTouched && fieldState.invalid;
  const statusColor = isValid
    ? "text-rdbrySuccess"
    : isError
      ? "text-rdbryError"
      : "text-rdbryText-300";
  const captionIcon = isError ? "x" : "\\/";

  return (
    <div className="flex flex-col mx-3">
      <label className={`${statusColor}`} htmlFor={field.name}>
        {label}
        {required && " *"}
      </label>
      <input className="border border-solid border-red-300" {...field} />
      <span className={`${statusColor}`}>
        <span>{captionIcon}</span>
        {message}
      </span>
    </div>
  );
};
