import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ECheckBoxVariants, ICheckboxProps } from "../../types";
import { CheckBoxIcon } from "../icons/CheckBoxIcon";

export const ControlledCheckbox: React.FC<ICheckboxProps> = ({
  fieldName,
  value,
}) => {
  const { register, watch, setValue, getValues } = useFormContext();
  const [isChecked, setIsChecked] = useState(false);
  const selectedRegions = watch(fieldName);

  useEffect(() => {
    setIsChecked(selectedRegions.includes(value));
  }, [selectedRegions]);
  return (
    <>
      <input
        type="checkbox"
        value={value}
        className="sr-only"
        checked={isChecked}
        {...register(fieldName)}
      />
      <span
        onClick={() => {
          if (getValues(fieldName).includes(value)) {
            setValue(
              fieldName,
              getValues(fieldName).filter(
                (valueToRemove: string) => value != valueToRemove
              )
            );
          } else setValue(fieldName, [...getValues(fieldName), value]);
        }}
        className={"inline-flex items-center justify-center w-5 h-5"}
      >
        {isChecked ? (
          <CheckBoxIcon varaint={ECheckBoxVariants.CHECKED} />
        ) : (
          <CheckBoxIcon varaint={ECheckBoxVariants.DEFAULT} />
        )}
      </span>
    </>
  );
};
