import React from "react";
import { IFiltersPanelProps } from "../types";
import { useForm } from "react-hook-form";
import { CheckboxFilter, EFilters, Filters } from "./CheckBoxFilter";
import { RangeFilter } from "./RangeFilter";
import { InputFilter } from "./InputFilter";

const defaultValues = {
  regions: [],
  area: { min: 0, max: 0 },
  price: { min: 0, max: 0 },
  bedrooms: "0",
};

const priceRange = [50000, 100000, 200000, 300000];

export const FiltersPanel: React.FC<IFiltersPanelProps> = () => {
  const { register, watch, setValue } = useForm<Filters>({ defaultValues });
  const fields = watch();
  console.log(fields);
  return (
    <>
      <div>
        <CheckboxFilter register={register} fieldName={EFilters.REGIONS} />
        <RangeFilter
          register={register}
          setValue={setValue}
          fieldName="area"
          range={priceRange}
        />
        <RangeFilter
          register={register}
          setValue={setValue}
          fieldName="price"
          range={priceRange}
        />
        <InputFilter register={register} fieldName={EFilters.BEDROOMS} />
      </div>
    </>
  );
};
