import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { DealTypeRadioGroup } from "./DealTypeRadioGroup";
import { FormInput } from "./ui/FormInput";
import { ControlledTextarea } from "./ui/ControlledTextarea";
import { ControlledUpload } from "./ui/ControlledUpload";
import { useAgents, useCities, useCreateEstate, useRegions } from "../services";
import { NewAgentForm } from "./NewAgentForm";
import { Modal } from "./ui/Modal";
import Select from "react-select";
import { EButtonTypes, INewEstateData } from "../types";
import { validateFileSize } from "../utils/validateFileSize";
import { ESTATE_FORM_DEFAULT_VALUES } from "../constants";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";

const newAgentOptionLabel = "addNew";

export const NewEstateForm = (): JSX.Element => {
  const { control, watch, setValue, handleSubmit } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: ESTATE_FORM_DEFAULT_VALUES,
  });
  const { mutate } = useCreateEstate();

  const { data: regions } = useRegions();
  const { data: cities } = useCities();
  const { data: agents } = useAgents();

  const regionOptions = regions?.map((region) => {
    return { value: region.id, label: region.name };
  });

  const citiesInCurrentRegion = cities?.filter((city) => {
    const currentRegionId = watch("region_id");
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
    setValue("agent_id", null);
  };

  const handleNewEstate: SubmitHandler<FieldValues> = (data) => {
    mutate(data as INewEstateData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleNewEstate)}>
        <div>
          <h5>გარიგების ტიპი</h5>
          <Controller
            name="is_rental"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DealTypeRadioGroup
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div>
          <h5>მდებარეობა</h5>
          <FormInput
            control={control}
            name="address"
            label="მისამართი"
            required={true}
            rules={{
              required: "მინიმუმ 2 სიმბოლო",
              minLength: {
                value: 2,
                message: "მინიმუმ 2 სიმბოლო",
              },
            }}
          />
          <FormInput
            control={control}
            name="zip_code"
            label="საფოსტო ინდექსი"
            required={true}
            rules={{
              required: "მხოლოდ რიცხვები",
              pattern: {
                value: /\d{3,}$/,
                message: "მხოლოდ რიცხვები",
              },
            }}
          />
          <Controller
            name="region_id"
            control={control}
            defaultValue={null}
            rules={{ required: "გთხოვთ აირჩიეთ რეგიონი" }}
            render={({ field }) => (
              <Select
                {...field}
                options={regionOptions ?? []}
                placeholder="აირჩიეთ რეგიონი"
                onChange={(option) =>
                  field.onChange(option ? option.value : null)
                }
                value={
                  regionOptions?.find(
                    (option) => option.value == field.value
                  ) || null
                }
              />
            )}
          />
          <Controller
            name="city_id"
            control={control}
            defaultValue={null}
            rules={{ required: "გთხოვთ აირჩიეთ ქალაქი" }}
            render={({ field }) => (
              <Select
                {...field}
                options={cityOptions ?? []}
                placeholder="აირჩიეთ ქალაქი"
                onChange={(option) =>
                  field.onChange(option ? option.value : null)
                }
                value={
                  cityOptions?.find((option) => option.value == field.value) ||
                  null
                }
              />
            )}
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
              pattern: {
                value: /^(?:\S+\s+){4,}\S+$/,
              },
            }}
          />
          <ControlledUpload
            label="ატვირთეთ ფოტო"
            control={control}
            name="image"
            required={true}
            rules={{
              required: "არ უნდა აღებმატებოდეს 1mb-ის ზომაში",
              validate: {
                fileSize: (file: File) => validateFileSize(file),
              },
            }}
          />
        </div>

        <div>
          <h5>აგენტი</h5>
          <span>აირჩიე</span>
          <Controller
            name="agent_id"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                {...field}
                options={agentOptions}
                onChange={(option) =>
                  field.onChange(option ? option.value : null)
                }
                value={
                  agentOptions.find((option) => option.value === field.value) ||
                  null
                }
              />
            )}
          />
        </div>
        <div>
          <PrimaryBtn
            label="გაუქმება"
            onClick={() => ""}
            variant={EPrimaryButtonVariants.GHOST}
          />
          <PrimaryBtn
            label="დაამატე ლისტინგი"
            variant={EPrimaryButtonVariants.GHOST}
            type={EButtonTypes.SUBMIT}
          />
        </div>
      </form>
      <div style={{ width: "50px", height: "500px" }}></div>
      {agentSelectedOption.value === "addNew" && (
        <Modal title="აგენტის დამატება">
          <NewAgentForm onClose={handleCloseAgentModal} />
        </Modal>
      )}
    </>
  );
};
