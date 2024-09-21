import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormInput, ControlledUpload } from "./ui";
import {
  EButtonTypes,
  EStorageKeys,
  INewAgentData,
  INewAgentFormProps,
} from "../types";
import { useCreateAgents } from "../services";
import { AGENT_FORM_DEFAULT_VALUES } from "../constants";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";
import { getLocalStorage } from "../utils/getLocalStorage";
import { clearLocalStorage } from "../utils/clearLocalStorage";
import { useEffect } from "react";
import { setLocalStorage } from "../utils/setLocalStorage";

const unprocessedDataStr = getLocalStorage(EStorageKeys.AGENT_DATA);
const unprocessedData = unprocessedDataStr
  ? JSON.parse(unprocessedDataStr)
  : null;
const initialValues = unprocessedData
  ? unprocessedData
  : AGENT_FORM_DEFAULT_VALUES;

export const NewAgentForm = ({ onClose }: INewAgentFormProps): JSX.Element => {
  const { control, reset, handleSubmit, watch } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: initialValues,
  });
  const { mutate } = useCreateAgents();

  const handleCancel = () => {
    reset(AGENT_FORM_DEFAULT_VALUES);
    clearLocalStorage(EStorageKeys.AGENT_DATA);
    onClose();
  };

  const handleNewAgent: SubmitHandler<FieldValues> = (data) => {
    mutate(data as INewAgentData, {
      onSuccess: (response) => {
        const newAgentData = JSON.parse(response.request.response);
        clearLocalStorage(EStorageKeys.AGENT_DATA);
        onClose(newAgentData.id);
      },
    });
  };

  const currentlyFilleddData = watch();
  useEffect(() => {
    const dataToBeStored = {
      ...initialValues,
      ...currentlyFilleddData,
      avatar: null,
    };
    setLocalStorage(EStorageKeys.AGENT_DATA, dataToBeStored as INewAgentData);
  }, [currentlyFilleddData]);

  return (
    <>
      <div className="py-[87px] px-[105px] flex flex-col gap-[61px]">
        <h3 className="text-[32px] text-rdbryText-300 leading-[38.4px] font-medium text-center">
          აგენტის დამატება
        </h3>
        <form onSubmit={handleSubmit(handleNewAgent)}>
          <div className="flex flex-col gap-[94px]">
            <div className="flex flex-col gap-[28px]">
              <div className="flex gap-[31px]">
                <FormInput
                  control={control}
                  name="name"
                  label="სახელი"
                  required={true}
                  rules={{
                    required: "მინიმუმ ორი სიმბოლო",
                    minLength: {
                      value: 2,
                      message: "შეიყვანეთ მინიმუმ ორი სიმბოლო",
                    },
                  }}
                />
                <FormInput
                  control={control}
                  name="surname"
                  label="გვარი"
                  required={true}
                  rules={{
                    required: "მინიმუმ ორი სიმბოლო",
                    minLength: {
                      value: 2,
                      message: "შეიყვანეთ მინიმუმ ორი სიმბოლო",
                    },
                  }}
                />
              </div>
              <div className="flex gap-[31px]">
                <FormInput
                  control={control}
                  name="email"
                  label="ელ-ფოსტა"
                  required={true}
                  rules={{
                    required: "უნდა მთავრდებოდეს @redberry.ge-თ",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                      message: "გამოიყენეთ @redberry.ge ელფოსტა",
                    },
                  }}
                />
                <FormInput
                  control={control}
                  name="phone"
                  label="ტელეფონის ნომერი"
                  required={true}
                  rules={{
                    required: "მხოლოდ რიცხვები",
                    pattern: {
                      value: /^5\d{8}$/,
                      message: "მხოლოდ რიცხვები",
                    },
                  }}
                />
              </div>
              <div>
                <ControlledUpload
                  label="ატვირთეთ ფოტო"
                  control={control}
                  name="avatar"
                  required
                />
              </div>
            </div>
            <div className="flex gap-[15px] justify-end">
              <PrimaryBtn
                label="გაუქმება"
                onClick={() => handleCancel()}
                variant={EPrimaryButtonVariants.GHOST}
              />
              <PrimaryBtn
                label="დაამატე აგენტი"
                variant={EPrimaryButtonVariants.DEFAULT}
                type={EButtonTypes.SUBMIT}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
