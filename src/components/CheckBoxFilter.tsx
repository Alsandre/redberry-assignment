import { useRegions } from "../services";
import { UseFormRegister } from "react-hook-form";

export interface Filters {
  checkboxes: string[];
  range: {
    min: number;
    max: number;
  };
  input1: string;
  input2: string;
}
export interface props {
  register: UseFormRegister<Filters>;
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
            {...register("checkboxes")} // Register this checkbox group with React Hook Form
          />
          {option.label}
        </label>
      ))}
    </>
  );
};
