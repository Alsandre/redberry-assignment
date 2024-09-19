import React, { useState } from "react";
import { EButtonTypes, EFilters, IFilters, IFiltersPanelProps } from "../types";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxFilter } from "./CheckBoxFilter";
import { RangeFilter } from "./RangeFilter";
import { InputFilter } from "./InputFilter";
import {
  AREA_RANGES,
  PRICE_RANGES,
  FILTERS_FORM_DEFAULT_VALUES,
} from "../constants";
import { useRegions } from "../services";
import { FilterChip } from "./ui/FilterChip";
import { PrimaryBtn } from "./PrimaryBtn";

export const FiltersPanel: React.FC<IFiltersPanelProps> = ({
  onFilterChange,
}) => {
  const formMethods = useForm<IFilters>({
    defaultValues: FILTERS_FORM_DEFAULT_VALUES,
    mode: "onChange",
  });
  const { register, watch, setValue, handleSubmit } = formMethods;
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const { data } = useRegions();
  const regionsList =
    data?.map((region) => ({
      label: region.name,
      value: "" + region.id,
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
            : `${price.min} - ${price.max}`;
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
    const updatedFilterList = newFilters.filter((newFilter) => !!newFilter);
    setSelectedFilters(updatedFilterList);
    onFilterChange(filters);
  };

  const handleRemoveFilter = (filter: string) => {
    const updatedFilterList = selectedFilters.filter(
      (filterToRemove) => filter !== filterToRemove
    );
    setSelectedFilters(updatedFilterList);
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(handleFilterSelection)}>
          <div className="flex">
            <div>
              <span onClick={() => setIsRegionsFilterOpen((prev) => !prev)}>
                რეგიონი
              </span>
              {isRegionsFilterOpen && (
                <div>
                  <CheckboxFilter
                    fieldName={EFilters.REGIONS}
                    options={regionsList}
                  />
                  <PrimaryBtn
                    label="არჩევა"
                    type={EButtonTypes.SUBMIT}
                    className="py-2 px-[14px] text-[14px] leading-[16.8px]"
                  />
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
                  <PrimaryBtn
                    label="არჩევა"
                    type={EButtonTypes.SUBMIT}
                    className="py-2 px-[14px] text-[14px] leading-[16.8px]"
                  />
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
                  <PrimaryBtn
                    label="არჩევა"
                    type={EButtonTypes.SUBMIT}
                    className="py-2 px-[14px] text-[14px] leading-[16.8px]"
                  />
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
                  <PrimaryBtn
                    label="არჩევა"
                    type={EButtonTypes.SUBMIT}
                    className="py-2 px-[14px] text-[14px] leading-[16.8px]"
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            {selectedFilters &&
              // TODO - unique id generator
              selectedFilters.map((filter, ind) => (
                <FilterChip
                  key={filter + ind}
                  content={filter}
                  onClick={() => handleRemoveFilter(filter)}
                />
              ))}
          </div>
        </form>
      </FormProvider>
    </>
  );
};
