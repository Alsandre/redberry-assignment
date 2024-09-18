import { UseFormSetValue } from "react-hook-form";
import { Filters, props } from "./CheckBoxFilter";

interface IRangeFilterProps extends Omit<props, "fieldName"> {
  setValue: UseFormSetValue<Filters>;
  range: number[];
  fieldName: "area" | "price";
}
export const RangeFilter = ({
  register,
  setValue,
  fieldName,
  range,
}: IRangeFilterProps) => {
  return (
    <div>
      <label>
        Min Value:
        <input
          type="text"
          {...register(`${fieldName}.min`)} // Register 'min' range value
        />
      </label>
      <label>
        Max Value:
        <input
          type="text"
          {...register(`${fieldName}.max`)} // Register 'max' range value
        />
      </label>
      <div className="flex">
        <ol>
          {/* TODO - format this price */}
          {range.map((price) => (
            <li onClick={() => setValue(`${fieldName}.min`, price)}>{price}</li>
          ))}
        </ol>
        <ol>
          {range.map((price) => (
            <li onClick={() => setValue(`${fieldName}.max`, price)}>{price}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
