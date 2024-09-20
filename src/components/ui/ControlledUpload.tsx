import React, { useRef, useState } from "react";
import { useController } from "react-hook-form";
import { IControlledComponentProps } from "../../types";
import { DeleteIcon, PlusInCircleIcon } from "../icons";

export const ControlledUpload: React.FC<IControlledComponentProps> = ({
  control,
  name,
  label,
  required,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files[0];
    field.onChange(files);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event.target.files?.[0]);
  };
  const isValid = fieldState.isDirty && !fieldState.invalid;
  const isError = fieldState.isTouched && fieldState.invalid;
  const statusColor = isValid
    ? "text-rdbrySuccess"
    : isError
      ? "text-rdbryError"
      : "text-rdbryText-300";

  if (field.value) {
    const reader = new FileReader();
    const imageBlob = field.value;
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setSelectedImage(reader.result);
      }
    };
    reader.readAsDataURL(imageBlob);
  }

  const handleRemoveSelectedImage = (
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    field.onChange(null);
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <span
        className={`text-rdbryText-300 font-medium text-[14px] leading-[16.8px] ${statusColor}`}
      >
        {label}
        {required && " *"}
      </span>
      <div
        className={`flex w-full h-[120px] border border-dashed border-rdbryText-200 rounded-[8px]  justify-center items-center ${selectedImage ? "pointer-events-none" : ""} cursor-pointer`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="sr-only"
        />
        {!selectedImage && <PlusInCircleIcon className="mx-auto top-[43px]" />}
        {selectedImage && (
          <>
            <div className="w-[92px] h-[82px] rounded-[4px] relative">
              <img
                className="w-full h-full rounded-[4px]"
                src={selectedImage}
                alt="Selected image preview"
              />
              <span
                onClick={handleRemoveSelectedImage}
                className="cursor-pointer pointer-events-auto"
              >
                <DeleteIcon className=" absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%]" />
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
