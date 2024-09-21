import { useEffect, useState } from "react";
import { ERangeFilterLabel, IRangeFilterProps } from "../types";
import { generateUID } from "../utils/generateUID";
import { priceFormatter } from "../utils/priceFormater";
export const RangeFilter = ({
  register,
  setValue,
  fieldName,
  range,
  watch,
  label,
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
    <div className="flex flex-col gap-4">
      <div className="flex gap-[15px]">
        <label className="text-[14px] font-medium leading-[16.8px] flex flex-col gap-6 relative">
          <input
            className={`py-3 px-[10px] border border-solid ${isValid ? "border-rdbryBorder-50" : "border-rdbryError"} rounded-[6px] w-[155px] focus:outline-none`}
            type="text"
            placeholder="დან"
            {...register(`${fieldName}.min`, {
              onChange: (e) =>
                setValue(
                  `${fieldName}.min`,
                  e.target.value.replace(/[^0-9]/g, "")
                ),
            })}
          />
          მინ. {label === ERangeFilterLabel.PRICE ? "ფასი" : label}
          <span className="absolute right-[10px] top-[14px] text-[12px] font-regular leading-[14px]">
            {label}
          </span>
        </label>
        <label className="text-[14px] font-medium leading-[16.8px] flex flex-col gap-6 relative">
          <input
            className={`py-3 px-[10px] border border-solid ${isValid ? "border-rdbryBorder-50" : "border-rdbryError"} rounded-[6px] w-[155px] focus:outline-none`}
            type="text"
            placeholder="მდე"
            {...register(`${fieldName}.max`, {
              onChange: (e) =>
                setValue(
                  `${fieldName}.max`,
                  e.target.value.replace(/[^0-9]/g, "")
                ),
            })}
          />
          მაქს. {label === ERangeFilterLabel.PRICE ? "ფასი" : label}
          <span className="absolute right-[10px] top-[14px] text-[12px] font-regular leading-[14px]">
            {label}
          </span>
        </label>
      </div>

      <div className="flex">
        <ol className="flex-1 flex flex-col gap-2 items-start cursor-default">
          {range.map((value) => (
            <li
              key={generateUID()}
              onClick={() => handleMinClick("" + value)}
              className="text-[14px] font-regular text-rdbryText-200 leading-[16.8px] cursor-pointer hover:shadow-custom-shadow hover:scale-[1.005]"
            >
              {`${priceFormatter(value, ",")} ${label}`}
            </li>
          ))}
        </ol>
        <ol className="flex-1 flex flex-col gap-2 items-start cursor-default pl-4">
          {range.map((value) => (
            <li
              key={generateUID()}
              onClick={() => handleMaxClick("" + value)}
              className="text-[14px] font-regular text-rdbryText-200 leading-[16.8px] cursor-pointer hover:shadow-custom-shadow hover:scale-[1.005]"
            >
              {`${value} ${label}`}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
