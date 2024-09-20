import React from "react";
import { useController } from "react-hook-form";
import { IFormInputProps } from "../../types";
import { CrossIcon, TickIcon } from "../icons";

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
  const captionIcon = isError ? <CrossIcon /> : <TickIcon />;

  return (
    <div className="flex flex-col gap-1 w-[384px]">
      <label
        className={`text-rdbryText-300 font-medium text-[14px] leading-[16.8px] ${statusColor}`}
        htmlFor={field.name}
      >
        {label}
        {required && " *"}
      </label>
      <input
        className="border border-solid border-rdbryShade-200 rounded-[6px] text-[16px] leading-[19.2px] font-regular text-rdbryText-300 py-[11px] px-[10px]"
        {...field}
      />
      <span
        className={`flex gap-[7px] text-rdbryText-300 font-regular text-[14px] leading-[16.8px] ${statusColor}`}
      >
        <span>{captionIcon}</span>
        {message}
      </span>
    </div>
  );
};
