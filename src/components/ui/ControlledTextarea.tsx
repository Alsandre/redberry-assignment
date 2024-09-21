import React from "react";
import { useController } from "react-hook-form";
import { IControlledComponentProps } from "../../types";
import { CrossIcon, TickIcon } from "../icons";

export const ControlledTextarea: React.FC<IControlledComponentProps> = ({
  control,
  name,
  label,
  required,
  rules,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  const message = rules.required as string;
  const isValid = fieldState.isDirty && !fieldState.invalid;
  const isError = fieldState.isTouched && fieldState.invalid;
  const statusColor = isValid
    ? "text-rdbrySuccess"
    : isError
      ? "text-rdbryError"
      : "text-rdbryText-300";
  const captionIcon = isError ? <CrossIcon /> : <TickIcon />;

  return (
    <div className="flex flex-col gap-1">
      <label
        className="text-rdbryText-300 font-medium text-[14px] leading-[16.8px]'"
        htmlFor={field.name}
      >
        {label}
        {required && " *"}
      </label>
      <textarea
        className="w-full h-[135px] rounded-[6px] resize-none border border-solid border-rdbryShade-200 p-2"
        {...field}
      />
      <span
        className={`flex gap-[7px] font-regular text-[14px] leading-[16.8px] ${statusColor}`}
      >
        <span>{captionIcon}</span>
        {message}
      </span>
    </div>
  );
};
