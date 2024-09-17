import { Controller, FieldValues, useForm } from "react-hook-form";
import { DealTypeRadioGroup } from "./DealTypeRadioGroup";
import { FormInput } from "./ui/FormInput";
import { ControlledSelect } from "./ui/ContolledSelect";
import { ControlledTextarea } from "./ui/ControlledTextarea";
import { ControlledUpload } from "./ui/ControlledUpload";
import { useAgents, useCities, useRegions } from "../services";
import { NewAgentForm } from "./NewAgentForm";
import { Modal } from "./ui/Modal";
import { useState } from "react";

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

export const NewEstateForm = (): JSX.Element => {
  const { control, watch } = useForm<FieldValues>({
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

  const agentOptions = agents?.map((agent) => {
    return { value: agent.id, label: `${agent.name} ${agent.surname}` };
  });

  const handleCloseAgentModal = () => {
    setIsAgentModalOpen(false);
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
          <ControlledSelect
            control={control}
            name="agent"
            label="აირჩიე"
            options={agentOptions ?? []}
          />
        </div>
      </form>
      {isAgentModalOpen && (
        <Modal onClose={handleCloseAgentModal}>
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <NewAgentForm onReset={handleCloseAgentModal} />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
