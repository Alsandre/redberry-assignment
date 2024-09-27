import React, { useState } from "react";
import { RangeSlider } from "./modularComponents/RangeSlider";

export const SeederOptions: React.FC = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    console.log("somethign");
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <RangeSlider
      minValue={minValue}
      maxValue={maxValue}
      handleMaxChange={handleMaxChange}
      handleMinChange={handleMinChange}
    />
  );
};
