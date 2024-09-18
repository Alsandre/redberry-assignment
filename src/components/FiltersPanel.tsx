import React, { useState } from "react";
import { EFilters, IFilters, IFiltersPanelProps } from "../types";
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

export const FiltersPanel: React.FC<IFiltersPanelProps> = ({
  onFilterChange,
}) => {
  const {
    trigger,
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFilters>({
    defaultValues: FILTERS_FORM_DEFAULT_VALUES,
    mode: "onChange",
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

  return (
    <>
      <form onSubmit={handleSubmit(onFilterChange)}>
        <div className="flex">
          <div>
            <span onClick={() => setIsRegionsFilterOpen((prev) => !prev)}>
              რეგიონი
            </span>
            {isRegionsFilterOpen && (
              <div>
                <CheckboxFilter
                  register={register}
                  fieldName={EFilters.REGIONS}
                  options={regionsList}
                />
                <button type="submit">არჩევა</button>
              </div>
            )}
          </div>
          <div>
            <span onClick={() => setIsPriceFilterOpen((prev) => !prev)}>
              საფასო კატეგორია
            </span>
            {isPriceFilterOpen && (
              <div>
                <RangeFilter
                  trigger={trigger}
                  errors={errors}
                  watch={watch}
                  register={register}
                  setValue={setValue}
                  fieldName="price"
                  range={PRICE_RANGES}
                />
                <button type="submit">არჩევა</button>
              </div>
            )}
          </div>
          <div>
            <span onClick={() => setIsAreaFilterOpen((prev) => !prev)}>
              ფართობი
            </span>
            {isAreaFilterOpen && (
              <div>
                <RangeFilter
                  trigger={trigger}
                  errors={errors}
                  watch={watch}
                  register={register}
                  setValue={setValue}
                  fieldName="area"
                  range={AREA_RANGES}
                />
                <button type="submit">არჩევა</button>
              </div>
            )}
          </div>
          <div>
            <span onClick={() => setIsBedroomsFilterOpen((prev) => !prev)}>
              საძინებლების რაოდენობა
            </span>
            {isBedroomsFilterOpen && (
              <div>
                <InputFilter
                  register={register}
                  fieldName={EFilters.BEDROOMS}
                />
                <button type="submit">არჩევა</button>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
