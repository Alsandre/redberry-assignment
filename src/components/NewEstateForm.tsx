import { Controller, FieldValues, useForm } from "react-hook-form";
import { DealTypeRadioGroup } from "./DealTypeRadioGroup";
import { FormInput } from "./ui/FormInput";
import { ControlledSelect } from "./ui/ContolledSelect";
import { ControlledTextarea } from "./ui/ControlledTextarea";
import { ControlledUpload } from "./ui/ControlledUpload";
import { useAgents, useCities, useRegions } from "../services";
import { NewAgentForm } from "./NewAgentForm";
import { Modal } from "./ui/Modal";
import { useEffect, useState } from "react";
import Select from "react-select";

const defaultValues = {
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
const newAgentOptionLabel = "addNew";

export const NewEstateForm = (): JSX.Element => {
  const { control, watch, setValue } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues,
  });

  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  const { data: regions } = useRegions();
  const { data: cities } = useCities();
  const { data: agents } = useAgents();

  const regionOptions = regions?.map((region) => {
    return { value: region.id, label: region.name };
  });

  const citiesInCurrentRegion = cities?.filter((city) => {
    const currentRegionId = watch("region");
    // using loose equality check is intentional
    return city?.region_id == currentRegionId;
  });
  const cityOptions = citiesInCurrentRegion?.map((cityInCurrentRegion) => {
    return {
      value: cityInCurrentRegion.id,
      label: cityInCurrentRegion.name,
    };
  });

  const existingAgentsList =
    agents?.map((agent) => {
      return { value: agent.id, label: `${agent.name} ${agent.surname}` };
    }) ?? [];

  const addAgentLabel = <span>{`(icon) დაამატე აგენტი`}</span>;

  const addAgentOption = [{ value: newAgentOptionLabel, label: addAgentLabel }];

  const agentOptions = [...addAgentOption, ...existingAgentsList];

  const agentSelectedOption = watch("agent") ?? {};

  const handleCloseAgentModal = () => {
    setValue("agent", null);
  };

  return (
    <>
      <form action="">
        <Controller
          name="dealType"
          control={control}
          render={({ field }) => <DealTypeRadioGroup {...field} />}
        />
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
            options={regionOptions ?? []}
          />
          <ControlledSelect
            control={control}
            name="city"
            label="აირჩიეთ ქალაქი"
            options={cityOptions ?? []}
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
          <span>აირჩიე</span>
          <Controller
            name="agent"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                {...field}
                options={agentOptions}
                onChange={(option) => field.onChange(option)}
                value={field.value}
              />
            )}
          />
        </div>
      </form>
      <div style={{ width: "50px", height: "500px" }}></div>
      {agentSelectedOption.value === "addNew" && (
        <Modal onClose={handleCloseAgentModal}>
          <NewAgentForm onReset={handleCloseAgentModal} />
        </Modal>
      )}
    </>
  );
};
