import { FieldValues, useForm } from "react-hook-form";
import { FormInput } from "./ui/FormInput";

const defaultValues = {
  isRental: 0,
  address: "",
  zip_code: "",
  image: null,
  region_id: 0,
  city_id: 0,
  price: 0,
  area: 0,
  bedrooms: 0,
  agent_id: 0,
};

export const NewEstateForm = (): JSX.Element => {
  const { control } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues,
  });

  return (
    <>
      <form action="">
        <FormInput
          control={control}
          name="address"
          label="მისამართი"
          required={true}
          rules={{
            required: "ჩაწერეთ ვალიდური მონაცემები",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
        />
      </form>
    </>
  );
};
