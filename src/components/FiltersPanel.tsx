import React, { useState } from "react";
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
import { useRegions } from "../services";

export const FiltersPanel: React.FC<IFiltersPanelProps> = () => {
  const { register, watch, setValue } = useForm<Filters>({
    defaultValues: FILTERS_FORM_DEFAULT_VALUES,
  });
  const { data } = useRegions();
  const regionsList =
    data?.map((region) => ({
      label: region.name,
      value: region.id,
    })) || [];
  const [isRegionsFilterOpen, setIsRegionsFilterOpen] = useState(false);
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [isAreaFilterOpen, setIsAreaFilterOpen] = useState(false);
  const [isBedroomsFilterOpen, setIsBedroomsFilterOpen] = useState(false);
  const fields = watch();
  console.log(fields);

  return (
    <>
      <div className="flex">
        <div>
          <span onClick={() => setIsRegionsFilterOpen((prev) => !prev)}>
            რეგიონი
          </span>
          {isRegionsFilterOpen && (
            <CheckboxFilter
              register={register}
              fieldName={EFilters.REGIONS}
              options={regionsList}
            />
          )}
        </div>
        <div>
          <span onClick={() => setIsPriceFilterOpen((prev) => !prev)}>
            საფასო კატეგორია
          </span>
          {isPriceFilterOpen && (
            <RangeFilter
              register={register}
              setValue={setValue}
              fieldName="price"
              range={PRICE_RANGES}
            />
          )}
        </div>
        <div>
          <span onClick={() => setIsAreaFilterOpen((prev) => !prev)}>
            ფართობი
          </span>
          {isAreaFilterOpen && (
            <RangeFilter
              register={register}
              setValue={setValue}
              fieldName="area"
              range={AREA_RANGES}
            />
          )}
        </div>
        <div>
          <span onClick={() => setIsBedroomsFilterOpen((prev) => !prev)}>
            საძინებლების რაოდენობა
          </span>
          {isBedroomsFilterOpen && (
            <InputFilter register={register} fieldName={EFilters.BEDROOMS} />
          )}
        </div>
      </div>
    </>
  );
};
