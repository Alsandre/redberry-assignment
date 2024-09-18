import React from "react";
import { EFilters, Filters, IFiltersPanelProps } from "../types";
import { useForm } from "react-hook-form";
import { CheckboxFilter } from "./CheckBoxFilter";
import { RangeFilter } from "./RangeFilter";
import { InputFilter } from "./InputFilter";
import {
  AREA_RANGES,
  PRICE_RANGES,
  FILTERS_FORM_DEFAULT_VALUES,
} from "../constants";

export const FiltersPanel: React.FC<IFiltersPanelProps> = () => {
  const { register, watch, setValue } = useForm<Filters>({
    defaultValues: FILTERS_FORM_DEFAULT_VALUES,
  });
  const fields = watch();
  console.log(fields);

  return (
    <>
      <div>
        <CheckboxFilter register={register} fieldName={EFilters.REGIONS} />
        <RangeFilter
          register={register}
          setValue={setValue}
          fieldName="price"
          range={PRICE_RANGES}
        />
        <RangeFilter
          register={register}
          setValue={setValue}
          fieldName="area"
          range={AREA_RANGES}
        />
        <InputFilter register={register} fieldName={EFilters.BEDROOMS} />
      </div>
    </>
  );
};
