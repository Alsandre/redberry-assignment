import React, { useRef } from "react";
import { useController, Control, UseControllerProps } from "react-hook-form";

interface SelectProps extends UseControllerProps {
  control: Control;
  name: string;
  label: string;
  required: boolean;
}

export const ControlledUpload: React.FC<SelectProps> = ({
  control,
  name,
  label,
  required,
}) => {
  const { field } = useController({
    name,
    control,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    field.onChange(files);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event.target.files);
  };

  return (
    <div>
      <span>
        {label}
        {required && " *"}
      </span>
      <div
        className="w-[500px] h-[200px] border border-solid border-red-400"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
