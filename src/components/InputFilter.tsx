import { props } from "../types";

export const InputFilter = ({ register, fieldName }: props) => {
  return (
    <div>
      <label>
        <input type="text" {...register(fieldName)} />
      </label>
    </div>
  );
};
