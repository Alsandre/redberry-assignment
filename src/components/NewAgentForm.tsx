import { FieldValues, useForm } from "react-hook-form";
import { FormInput, ControlledUpload } from "./ui";
import { INewAgentFormProps } from "../types";

const defaultValues = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  avatar: "",
};

export const NewAgentForm = ({ onReset }: INewAgentFormProps): JSX.Element => {
  const { control, reset } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues,
  });

  const handleReset = () => {
    reset();
    onReset();
  };

  return (
    <>
      <form action="">
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
            name="image"
            required
          />
        </div>
        <div>
          <button onClick={handleReset}>გაუქმება</button>
          <input type="submit" />
        </div>
      </form>
    </>
  );
};
