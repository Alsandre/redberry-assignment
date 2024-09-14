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
          value="rent"
          checked={value === "rent"}
          onChange={(e) => onChange(e.target.value)}
        />
        ქირავდება
      </label>
      <label>
        <input
          type="radio"
          value="sale"
          checked={value === "sale"}
          onChange={(e) => onChange(e.target.value)}
        />
        იყიდება
      </label>
    </div>
  );
});
