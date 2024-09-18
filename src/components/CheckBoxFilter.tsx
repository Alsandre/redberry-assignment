import { useRegions } from "../services";
import { UseFormRegister } from "react-hook-form";

export interface Filters {
  regions: string[];
  area: {
    min: number;
    max: number;
  };
  price: {
    min: number;
    max: number;
  };
  bedrooms: string;
}
export enum EFilters {
  REGIONS = "regions",
  AREA = "area",
  PRICE = "price",
  BEDROOMS = "bedrooms",
}
export interface props {
  register: UseFormRegister<Filters>;
  fieldName: EFilters;
}
export const CheckboxFilter = ({ register }: props) => {
  const { data } = useRegions();
  //   const [options, setOptions] = useState<{ label: string; value: number }[]>(
  //     []
  //   );
  //   if (data) {
  const options =
    data?.map((region) => ({
      label: region.name,
      value: region.id,
    })) || [];
  //     setOptions(checkboxOptions);
  //   }
  return (
    <>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            {...register("regions")} // Register this checkbox group with React Hook Form
          />
          {option.label}
        </label>
      ))}
    </>
  );
};
