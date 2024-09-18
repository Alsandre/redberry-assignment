import { useEffect, useState } from "react";
import { IRangeFilterProps } from "../types";
export const RangeFilter = ({
  register,
  setValue,
  fieldName,
  range,
  watch,
}: IRangeFilterProps) => {
  const [isValid, setIsValid] = useState(true);
  const min = watch(`${fieldName}.min`);
  const max = watch(`${fieldName}.max`);
  const handleMinClick = (value: string) => {
    setValue(`${fieldName}.min`, value);
  };
  const handleMaxClick = (value: string) => {
    setValue(`${fieldName}.max`, value);
  };

  useEffect(() => {
    if (min == "" || max == "") {
      setIsValid(true);
    } else if (min !== "" && max !== "" && +min <= +max) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [min, max]);
  return (
    <div>
      <div>
        <label>
          Min Value:
          <input
            type="text"
            {...register(`${fieldName}.min`, {
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
              onChange: (e) =>
                setValue(
                  `${fieldName}.max`,
                  e.target.value.replace(/[^0-9]/g, "")
                ),
            })}
          />
        </label>
        {!isValid && <span>ჩაწერეთ ვალიდური მონაცემები</span>}
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
