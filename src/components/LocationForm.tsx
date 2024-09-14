import { FormInput } from "./ui/FormInput";
import { IFormSection } from "../types";
import { RegionSelectGroup } from "./RegionSelectGroup";

export const LocationForm: React.FC<IFormSection> = ({ control }) => {
  return (
    <>
      <div>
        <h5>მდებარეობა</h5>
        <div>
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
          <FormInput
            control={control}
            name="zip_code"
            label="საფოსტო ინდექსი"
            required={true}
            rules={{
              required: true,
              minLength: {
                value: 4,
                message: "მხოლოდ რიცხვები",
              },
            }}
          />
        </div>
        {/* <RegionSelectGroup control={control} /> */}
      </div>
    </>
  );
};
