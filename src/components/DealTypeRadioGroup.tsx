import { IDealTypeRadioGroupProps } from "../types";

export const DealTypeRadioGroup = ({
  value,
  onChange,
}: IDealTypeRadioGroupProps): JSX.Element => {
  return (
    <div className="flex gap-[84px]">
      <label className="flex gap-[7px] items-center">
        <input
          className="custom-radio-button"
          type="radio"
          value={1}
          checked={value === 1}
          onChange={() => onChange(1)}
        />
        ქირავდება
      </label>
      <label className="flex gap-[7px] items-center">
        <input
          className="custom-radio-button"
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
