import React, { useState } from "react";
import { EFilters, IFilters, IFiltersPanelProps } from "../types";
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
import { Popover } from "./ui/Popover";
import { ChevronIcon } from "./icons";
import { FilterItem } from "./FilterItem";

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
          <div className="flex gap-6 border border-solid border-rdbryBorder-50 rounded-[10px] p-[6px]">
            <FilterItem
              label="რეგიონი"
              onClick={() => setIsRegionsFilterOpen((prev) => !prev)}
              className={isRegionsFilterOpen ? "bg-rdbryShade-50" : ""}
              icon={
                <ChevronIcon
                  className={isRegionsFilterOpen ? "rotate-180" : ""}
                />
              }
            >
              {isRegionsFilterOpen && (
                <Popover title="რეგიონის მიხედვით">
                  <CheckboxFilter
                    fieldName={EFilters.REGIONS}
                    options={regionsList}
                  />
                </Popover>
              )}
            </FilterItem>
            <FilterItem
              label="საფასო კატეგორია"
              onClick={() => setIsPriceFilterOpen((prev) => !prev)}
              className={isPriceFilterOpen ? "bg-rdbryShade-50" : ""}
              icon={
                <ChevronIcon
                  className={isPriceFilterOpen ? "rotate-180" : ""}
                />
              }
            >
              {isPriceFilterOpen && (
                <Popover title="ფასის მიხედვით">
                  <RangeFilter
                    watch={watch}
                    register={register}
                    setValue={setValue}
                    fieldName="price"
                    range={PRICE_RANGES}
                  />
                </Popover>
              )}
            </FilterItem>
            <FilterItem
              label="ფართობი"
              onClick={() => setIsAreaFilterOpen((prev) => !prev)}
              className={isAreaFilterOpen ? "bg-rdbryShade-50" : ""}
              icon={
                <ChevronIcon className={isAreaFilterOpen ? "rotate-180" : ""} />
              }
            >
              {isAreaFilterOpen && (
                <Popover title="ფართობის მიხედვით">
                  <RangeFilter
                    watch={watch}
                    register={register}
                    setValue={setValue}
                    fieldName="area"
                    range={AREA_RANGES}
                  />
                </Popover>
              )}
            </FilterItem>
            <FilterItem
              label="საძინებლების რაოდენობა"
              onClick={() => setIsBedroomsFilterOpen((prev) => !prev)}
              className={isBedroomsFilterOpen ? "bg-rdbryShade-50" : ""}
              icon={
                <ChevronIcon
                  className={isBedroomsFilterOpen ? "rotate-180" : ""}
                />
              }
            >
              {isBedroomsFilterOpen && (
                <Popover title="საძინებლების რაოდენობა">
                  <InputFilter
                    register={register}
                    fieldName={EFilters.BEDROOMS}
                  />
                </Popover>
              )}
            </FilterItem>
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
