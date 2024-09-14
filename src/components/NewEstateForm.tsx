import { Controller, FieldValues, useForm } from "react-hook-form";
import { DealTypeRadioGroup } from "./DealTypeRadioGroup";
import { FormInput } from "./ui/FormInput";
import { ControlledSelect } from "./ui/ContolledSelect";
import { ControlledTextarea } from "./ui/ControlledTextArea";
import { ControlledUpload } from "./ui/ControlledUpload";
import { useCities, useRegions } from "../services";

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
  dealType: "rent",
  description: "",
};

export const NewEstateForm = (): JSX.Element => {
  const { control } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues,
  });
  const regionOptions = [{ value: "კახეთი", label: "კახეთი" }];
  const cityOptions = [{ value: "თელავი", label: "თელავი" }];
  const agentOptions = [{ value: "გიორგი ბრეგი", label: "გიორგი ბრეგი" }];
  return (
    <>
      <form action="">
        <Controller
          name="dealType"
          control={control}
          render={({ field }) => <DealTypeRadioGroup {...field} />}
        />
        {/* <LocationForm control={control} /> */}
        <div>
          <h5>მდებარეობა</h5>
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
          <ControlledSelect
            control={control}
            name="region"
            label="აირჩიეთ რეგიონი"
            options={regionOptions}
          />
          <ControlledSelect
            control={control}
            name="city"
            label="აირჩიეთ ქალაქი"
            options={cityOptions}
          />
        </div>
        <div>
          <h5>ბინის დეტალები</h5>
          <div>
            <FormInput
              control={control}
              name="price"
              label="ფასი"
              required={true}
              rules={{
                required: "მხოლოდ რიცხვები",
              }}
            />
            <FormInput
              control={control}
              name="area"
              label="ფართობი"
              required={true}
              rules={{
                required: "მხოლოდ რიცხვები",
              }}
            />
          </div>
          <FormInput
            control={control}
            name="bedrooms"
            label="საძინებლების რაოდენობა"
            required={true}
            rules={{
              required: "მთელი რიცხვი",
            }}
          />
          <ControlledTextarea
            control={control}
            label="არწერა"
            name="description"
            required={true}
            rules={{
              required: "მინიმუმ 5 სიტყვა",
            }}
          />
          <ControlledUpload
            label="ატვირთეთ ფოტო"
            control={control}
            name="image"
            required
          />
        </div>

        <div>
          <h5>აგენტი</h5>
          <ControlledSelect
            control={control}
            name="agent_id"
            label="აირჩიე"
            options={agentOptions}
          />
        </div>
      </form>
    </>
  );
};
