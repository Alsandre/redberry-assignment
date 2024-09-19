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
  const { register, watch, setValue, handleSubmit } = useForm<IFilters>({
    defaultValues: FILTERS_FORM_DEFAULT_VALUES,
    mode: "onChange",
  });
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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

  const handleFilterSelection = (filters: IFilters) => {
    // TODO - once chips are mapped to elements this type needs to be updated
    const newFilters: string[] = [];
    const { area, bedrooms, price, regions } = filters;

    const priceChip =
      price.min === "" && price.max === ""
        ? ""
        : price.min === ""
          ? `<${price.max}`
          : price.max === ""
            ? `${price.min}<`
            : `${price.min}<${price.max}`;
    const areaChip =
      area.min === "" && area.max === ""
        ? ""
        : area.min === ""
          ? `<${area.max}`
          : area.max === ""
            ? `${area.min}<`
            : `${area.min}<${area.max}`;

    newFilters.push(...regions, priceChip, areaChip, bedrooms);
    // TODO - map chips to elements with x icon
    newFilters.filter((newFilter) => newFilter);
    setSelectedFilters(newFilters);
    onFilterChange(filters);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFilterSelection)}>
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
        <div>
          {selectedFilters &&
            selectedFilters.map((filter, ind) => (
              <span key={ind}>{filter}</span>
            ))}
        </div>
      </form>
    </>
  );
};
