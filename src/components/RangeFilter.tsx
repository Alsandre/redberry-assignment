import { UseFormSetValue } from "react-hook-form";
import { Filters, props } from "./CheckBoxFilter";

interface IRangeFilterProps extends props {
  setValue: UseFormSetValue<Filters>;
}
const priceRange = [50000, 100000, 200000, 300000];
export const RangeFilter = ({ register, setValue }: IRangeFilterProps) => {
  console.log(register("range.min"));
  return (
    <div>
      <label>
        Min Value:
        <input
          type="text"
          {...register("range.min")} // Register 'min' range value
        />
      </label>
      <label>
        Max Value:
        <input
          type="text"
          {...register("range.max")} // Register 'max' range value
        />
      </label>
      <div className="flex">
        <ol>
          {/* TODO - format this price */}
          {priceRange.map((price) => (
            <li onClick={() => setValue("range.min", price)}>{price}</li>
          ))}
        </ol>
        <ol>
          {priceRange.map((price) => (
            <li onClick={() => setValue("range.max", price)}>{price}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
