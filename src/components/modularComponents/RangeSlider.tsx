type TRangeSliderProps = {
  minValue: number;
  maxValue: number;
  handleMaxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMinChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

import { ChangeEvent } from "react";
import styles from "./RandeSlider.module.css";

export const RangeSlider: React.FC<TRangeSliderProps> = ({
  minValue,
  maxValue,
  handleMaxChange,
  handleMinChange,
}) => {
  return (
    <div className={styles["double-handle-slider"]}>
      <div className={styles["slider-container"]}>
        <input
          type="range"
          min="0"
          max="1000"
          value={minValue}
          onChange={handleMinChange}
          className={styles["slider-min"]}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={maxValue}
          onChange={handleMaxChange}
          className={styles["slider-max"]}
        />
      </div>
      <div className={styles["range-values"]}>
        <span>Min: {minValue}</span> - <span>Max: {maxValue}</span>
      </div>
    </div>
  );
};
