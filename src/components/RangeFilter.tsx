import { useEffect, useState } from "react";
import { IRangeFilterProps } from "../types";
let counter = 0;
export const RangeFilter = ({
  register,
  setValue,
  fieldName,
  range,
  watch,
  errors,
  trigger,
}: IRangeFilterProps) => {
  const min = watch(`${fieldName}.min`);
  const max = watch(`${fieldName}.max`);
  const handleMinClick = (value: string) => {
    setValue(`${fieldName}.min`, value);
    trigger(`${fieldName}.min`);
  };
  const handleMaxClick = (value: string) => {
    setValue(`${fieldName}.max`, value);
    trigger(`${fieldName}.max`);
  };
  console.log(errors);
  counter++;

  console.log(counter);
  return (
    <div>
      <div>
        <label>
          Min Value:
          <input
            type="text"
            {...register(`${fieldName}.min`, {
              validate: (value) => {
                console.log("min", value, max);
                if (value !== "" && max !== "") {
                  return value < max || "Max should be greater than Min";
                } else return true;
              },
              onChange: (e) =>
                setValue(
                  `${fieldName}.min`,
                  e.target.value.replace(/[^0-9]/g, "")
                ),
            })}
          />
        </label>
        <label>
          Max Value:
          <input
            type="text"
            {...register(`${fieldName}.max`, {
              validate: (value) => {
                console.log("max", value, min);
                if (value !== "" && min !== "") {
                  return value > min || "Min should be less than Max";
                } else return true;
              },
              onChange: (e) =>
                setValue(
                  `${fieldName}.max`,
                  e.target.value.replace(/[^0-9]/g, "")
                ),
            })}
          />
        </label>
        {errors[fieldName] && <span>ჩაწერეთ ვალიდური მონაცემები</span>}
      </div>
      <div className="flex">
        <ol>
          {/* TODO - format this price */}
          {range.map((value, index) => (
            // TODO - unique id generator
            <li
              key={`${fieldName}min${index}`}
              onClick={() => handleMinClick("" + value)}
            >
              {value}
            </li>
          ))}
        </ol>
        <ol>
          {range.map((value, index) => (
            // TODO - unique id generator
            <li
              key={`${fieldName}max${index}`}
              onClick={() => handleMaxClick("" + value)}
            >
              {value}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
