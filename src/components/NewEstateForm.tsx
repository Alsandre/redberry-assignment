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
import Select, { components } from "react-select";
import { EButtonTypes, EStorageKeys, INewEstateData } from "../types";
import { validateFileSize } from "../utils/validateFileSize";
import { ESTATE_FORM_DEFAULT_VALUES } from "../constants";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";
import { PlusInCircleIcon } from "./icons";
import { FormSectionTitle } from "./FormSectionTitle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/getLocalStorage";
import { setLocalStorage } from "../utils/setLocalStorage";
import { clearLocalStorage } from "../utils/clearLocalStorage";
import { countWords } from "../utils/countWords";

const unprocessedDataStr = getLocalStorage(EStorageKeys.ESTATE_DATA);
const unprocessedData = unprocessedDataStr
  ? JSON.parse(unprocessedDataStr)
  : null;
const initialValues = unprocessedData
  ? unprocessedData
  : ESTATE_FORM_DEFAULT_VALUES;

export const NewEstateForm = (): JSX.Element => {
  const { control, watch, setValue, handleSubmit, reset } =
    useForm<FieldValues>({
      mode: "onChange",
      defaultValues: initialValues,
    });
  const [regionMenuIsOpen, setRegionMenuIsOpen] = useState(false);
  const [cityMenuIsOpen, setCityMenuIsOpen] = useState(false);
  const [agentMenuIsOpen, setAgentMenuIsOpen] = useState(false);
  const { mutate } = useCreateEstate();

  const { data: regions } = useRegions();
  const { data: cities } = useCities();
  const { data: agents } = useAgents();

  const navigate = useNavigate();

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
      return { value: "" + agent.id, label: `${agent.name} ${agent.surname}` };
    }) ?? [];

  const addAgentOption = [{ value: "addNew", label: "დაამატე აგენტი" }];

  const agentOptions = [...addAgentOption, ...existingAgentsList];

  const agentSelectedOption = watch("agent_id") ?? {};
  const handleCloseAgentModal = () => {
    setValue("agent_id", null);
  };

  const handleNewEstate: SubmitHandler<FieldValues> = (data) => {
    mutate(data as INewEstateData);
  };

  const handleCancel = () => {
    reset();
    clearLocalStorage(EStorageKeys.ESTATE_DATA);
    navigate("/");
  };
  const validateTextArea = (value: string) => {
    console.log(countWords(value));
    return countWords(value) > 5;
  };
  const currentlyFilleddData = watch();
  useEffect(() => {
    const dataToBeStored = {
      ...initialValues,
      ...currentlyFilleddData,
      image: null,
    };
    setLocalStorage(EStorageKeys.ESTATE_DATA, dataToBeStored as INewEstateData);
  }, [currentlyFilleddData]);
  return (
    <>
      <form onSubmit={handleSubmit(handleNewEstate)}>
        <div className="w-[788px] m-auto flex flex-col gap-[90px]">
          <div className="flex flex-col gap-[80px]">
            <div className="flex flex-col gap-2 justify-start">
              <FormSectionTitle label="გარიგების ტიპი" />
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

            <div className="flex flex-col gap-[22px] justify-start">
              <FormSectionTitle label="მდებარეობა" />
              <div className="flex gap-5">
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
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[14px] leading-[16.8px] font-medium">
                    რეგიონი
                  </span>
                  <Controller
                    name="region_id"
                    control={control}
                    defaultValue={null}
                    rules={{ required: "გთხოვთ აირჩიეთ რეგიონი" }}
                    render={({ field }) => (
                      <Select
                        unstyled
                        onMenuClose={() => setRegionMenuIsOpen(false)}
                        onMenuOpen={() => setRegionMenuIsOpen(true)}
                        classNames={{
                          container: () => {
                            return `w-[386px] h-[42px] border border-solid border-rdbryShade-200 rounded-[6px] ${regionMenuIsOpen ? "rounded-b-none" : ""}`;
                          },
                          control: () =>
                            "text-[16px] leading-[19.2px] font-regular text-rdbryText-300 py-[11px] px-[10px]",
                          menuList: () => {
                            return "w-[385px] scrollbar-hide rounded-b-[6px] border-b border-solid border-rdbryShade-200";
                          },
                          option: (state) => {
                            const indexOfLastChild = state.options.length - 1;
                            const isLastChild =
                              state.children ===
                              state.options[indexOfLastChild].label;
                            return `${isLastChild ? "rounded-b-[6px]" : ""} border-b border-l border-r border-solid border-rdbryShade-200 bg-white text-[16px] leading-[19.2px] font-regular text-rdbryText-300 py-[11px] px-[10px]`;
                          },
                        }}
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
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[14px] leading-[16.8px] font-medium">
                    ქალაქი
                  </span>
                  <Controller
                    name="city_id"
                    control={control}
                    defaultValue={null}
                    rules={{ required: "გთხოვთ აირჩიეთ ქალაქი" }}
                    render={({ field }) => (
                      <Select
                        unstyled
                        onMenuClose={() => setCityMenuIsOpen(false)}
                        onMenuOpen={() => setCityMenuIsOpen(true)}
                        classNames={{
                          container: () => {
                            return `w-[386px] h-[42px] border border-solid border-rdbryShade-200 rounded-[6px] ${cityMenuIsOpen ? "rounded-b-none" : ""}`;
                          },
                          control: () =>
                            "text-[16px] leading-[19.2px] font-regular text-rdbryText-300 py-[11px] px-[10px]",
                          menuList: () => {
                            return "w-[385px] scrollbar-hide rounded-b-[6px] border-b border-solid border-rdbryShade-200";
                          },
                          option: (state) => {
                            const indexOfLastChild = state.options.length - 1;
                            const isLastChild =
                              state.children ===
                              state.options[indexOfLastChild].label;
                            return `${isLastChild ? "rounded-b-[6px]" : ""} border-b border-l border-r border-solid border-rdbryShade-200 bg-white text-[16px] leading-[19.2px] font-regular text-rdbryText-300 py-[11px] px-[10px]`;
                          },
                        }}
                        {...field}
                        options={cityOptions ?? []}
                        placeholder="აირჩიეთ ქალაქი"
                        onChange={(option) =>
                          field.onChange(option ? option.value : null)
                        }
                        value={
                          cityOptions?.find(
                            (option) => option.value == field.value
                          ) || null
                        }
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <FormSectionTitle label="ბინის დეტალები" />
              <div className="flex gap-5">
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
                  validate: validateTextArea,
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

            <div className="flex flex-col gap-[15px]">
              <FormSectionTitle label="აგენტი" />
              <div className="flex flex-col gap-[5px]">
                <span className="text-[14px] leading-[16.8px] font-medium">
                  აირჩიე
                </span>
                <Controller
                  name="agent_id"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <Select
                      unstyled
                      onMenuClose={() => setAgentMenuIsOpen(false)}
                      onMenuOpen={() => setAgentMenuIsOpen(true)}
                      classNames={{
                        container: () => {
                          return `w-[386px] h-[42px] border border-solid border-rdbryShade-200 rounded-[6px] ${agentMenuIsOpen ? "rounded-b-none" : ""}`;
                        },
                        control: () =>
                          "text-[16px] leading-[19.2px] font-regular text-rdbryText-300 py-[11px] px-[10px]",
                        menuList: () => {
                          return "w-[385px] scrollbar-hide rounded-b-[6px] border-b border-solid border-rdbryShade-200";
                        },
                        option: (state) => {
                          const indexOfLastChild = state.options.length - 1;
                          const isLastChild =
                            state.children ===
                            state.options[indexOfLastChild].label;
                          return `${isLastChild ? "rounded-b-[6px]" : ""} border-b border-l border-r border-solid border-rdbryShade-200 bg-white text-[16px] leading-[19.2px] font-regular text-rdbryText-300 py-[11px] px-[10px]`;
                        },
                      }}
                      {...field}
                      options={agentOptions}
                      onChange={(option) =>
                        field.onChange(option ? option.value : null)
                      }
                      value={
                        agentOptions.find(
                          (option) => option.value === field.value
                        ) || null
                      }
                      components={{
                        Option: (props) => (
                          <>
                            <components.Option {...props}>
                              <div>
                                {props.data === agentOptions[0] && (
                                  <span className="flex gap-2">
                                    <PlusInCircleIcon /> {props.data.label}
                                  </span>
                                )}
                                {!(
                                  props.data.value === agentOptions[0].value
                                ) && props.data.label}
                              </div>
                            </components.Option>
                          </>
                        ),
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-[15px] justify-end">
            <PrimaryBtn
              label="გაუქმება"
              onClick={() => handleCancel()}
              variant={EPrimaryButtonVariants.GHOST}
            />
            <PrimaryBtn
              label="დაამატე ლისტინგი"
              variant={EPrimaryButtonVariants.DEFAULT}
              type={EButtonTypes.SUBMIT}
            />
          </div>
        </div>
      </form>
      <Modal
        isOpen={agentSelectedOption === "addNew"}
        onClose={handleCloseAgentModal}
      >
        <NewAgentForm onClose={handleCloseAgentModal} />
      </Modal>
    </>
  );
};
