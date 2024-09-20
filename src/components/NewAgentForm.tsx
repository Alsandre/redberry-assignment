import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormInput, ControlledUpload } from "./ui";
import { EButtonTypes, INewAgentData, INewAgentFormProps } from "../types";
import { useCreateAgents } from "../services";
import { AGENT_FORM_DEFAULT_VALUES } from "../constants";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";

export const NewAgentForm = ({ onClose }: INewAgentFormProps): JSX.Element => {
  const { control, reset, handleSubmit } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: AGENT_FORM_DEFAULT_VALUES,
  });
  const { mutate } = useCreateAgents();

  const handleReset = () => {
    reset();
    onClose();
  };

  const handleNewAgent: SubmitHandler<FieldValues> = (data) => {
    mutate(data as INewAgentData);
    onClose();
  };

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
                onClick={() => handleReset()}
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
