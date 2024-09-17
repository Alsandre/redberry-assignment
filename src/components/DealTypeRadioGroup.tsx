import { IDealTypeRadioGroupProps } from "../types";

export const DealTypeRadioGroup = ({
  value,
  onChange,
}: IDealTypeRadioGroupProps): JSX.Element => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value={1}
          checked={value === 1}
          onChange={() => onChange(1)}
        />
        ქირავდება
      </label>
      <label>
        <input
          type="radio"
          value={0}
          checked={value === 0}
          onChange={() => onChange(0)}
        />
        იყიდება
      </label>
    </div>
  );
};
