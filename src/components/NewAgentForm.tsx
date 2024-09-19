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
      <form onSubmit={handleSubmit(handleNewAgent)}>
        <div>
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
        <div>
          <FormInput
            control={control}
            name="email"
            label="ემაილ"
            required={true}
            rules={{
              required: "უნდა მთავრდებოდეს @redberry.ge-თ",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
                message: "უნდა მთავრდებოდეს @redberry.ge-თ",
              },
            }}
          />
          <FormInput
            control={control}
            name="phone"
            label="ტელეფონის ნომერი"
            required={true}
            rules={{
              required: "უნდა იყოს ფორმატის 5XXXXXXXX",
              pattern: {
                value: /^5\d{8}$/,
                message: "უნდა იყოს ფორმატის 5XXXXXXXX",
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
        <div>
          <PrimaryBtn
            label="გაუქმება"
            onClick={() => handleReset()}
            variant={EPrimaryButtonVariants.GHOST}
          />
          <PrimaryBtn
            label="დაამატე აგენტი"
            variant={EPrimaryButtonVariants.GHOST}
            type={EButtonTypes.SUBMIT}
          />
        </div>
      </form>
    </>
  );
};
