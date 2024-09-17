import React from "react";
import { IDealTypeRadioGroupProps } from "../types";

export const DealTypeRadioGroup = React.forwardRef<
  HTMLDivElement,
  IDealTypeRadioGroupProps
>((props, ref) => {
  const { value, onChange } = props;

  return (
    <div ref={ref}>
      <h5>გარიგების ტიპი</h5>
      <label>
        <input
          type="radio"
          value={0}
          checked={value === 0}
          onChange={(e) => onChange(e.target.value)}
        />
        ქირავდება
      </label>
      <label>
        <input
          type="radio"
          value={1}
          checked={value === 1}
          onChange={(e) => onChange(e.target.value)}
        />
        იყიდება
      </label>
    </div>
  );
});
