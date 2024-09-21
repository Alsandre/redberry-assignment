import React, { useEffect, useState } from "react";
import {
  EFilters,
  ERangeFilterLabel,
  EStorageKeys,
  IFilters,
  IFiltersPanelProps,
} from "../types";
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
import { getLocalStorage } from "../utils/getLocalStorage";
import { setLocalStorage } from "../utils/setLocalStorage";
import { generateFilterChips } from "../utils/generateFilterChips";
import { clearLocalStorage } from "../utils/clearLocalStorage";
import { generateUID } from "../utils/generateUID";

const unprocessedDataStr = getLocalStorage(EStorageKeys.FILTERS_DATA);
const unprocessedData = unprocessedDataStr
  ? JSON.parse(unprocessedDataStr)
  : null;
const initialValues = unprocessedData
  ? unprocessedData
  : FILTERS_FORM_DEFAULT_VALUES;

export const FiltersPanel: React.FC<IFiltersPanelProps> = ({
  onFilterChange,
}) => {
  const formMethods = useForm<IFilters>({
    defaultValues: initialValues,
    mode: "onChange",
  });
  const { register, watch, setValue, handleSubmit, reset } = formMethods;
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const { data } = useRegions();
  const regionsList =
    data?.map((region) => ({
      label: region.name,
      value: "" + region.id,
    })) || [];

  const [activeFilter, setActiveFilter] = useState<EFilters | null>(null);
  const isRegionsFilterOpen = activeFilter === EFilters.REGIONS;
  const isPriceFilterOpen = activeFilter === EFilters.PRICE;
  const isAreaFilterOpen = activeFilter === EFilters.AREA;
  const isBedroomsFilterOpen = activeFilter === EFilters.BEDROOMS;

  const handleFilterSelection = (filters: IFilters) => {
    const newFilters = generateFilterChips(filters);
    const updatedFilterList = newFilters.filter((newFilter) => !!newFilter);
    setSelectedFilters(updatedFilterList);
    onFilterChange(filters);
    setActiveFilter(null);
    setLocalStorage(EStorageKeys.FILTERS_DATA, filters);
  };

  const handleRemoveFilter = (filter: string) => {
    const updatedFilterList = selectedFilters.filter(
      (filterToRemove) => filter !== filterToRemove
    );
    setSelectedFilters(updatedFilterList);
  };

  const handleClearFilters = () => {
    reset(FILTERS_FORM_DEFAULT_VALUES);
    setSelectedFilters([]);
    onFilterChange(FILTERS_FORM_DEFAULT_VALUES);
    clearLocalStorage(EStorageKeys.FILTERS_DATA);
  };

  useEffect(() => {
    onFilterChange(initialValues);
    const restoredFilters = generateFilterChips(initialValues);
    setSelectedFilters(restoredFilters);
  }, []);

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(handleFilterSelection)}>
          <div className="relative">
            <div className="flex gap-6 border border-solid border-rdbryBorder-50 rounded-[10px] p-[6px]">
              <FilterItem
                label="რეგიონი"
                onClick={() =>
                  setActiveFilter(
                    activeFilter === EFilters.REGIONS ? null : EFilters.REGIONS
                  )
                }
                className={isRegionsFilterOpen ? "bg-rdbryShade-50" : ""}
                icon={
                  <ChevronIcon
                    className={isRegionsFilterOpen ? "rotate-180" : ""}
                  />
                }
              >
                {isRegionsFilterOpen && (
                  <Popover
                    onClose={() => setActiveFilter(null)}
                    title="რეგიონის მიხედვით"
                  >
                    <CheckboxFilter
                      fieldName={EFilters.REGIONS}
                      options={regionsList}
                    />
                  </Popover>
                )}
              </FilterItem>
              <FilterItem
                label="საფასო კატეგორია"
                onClick={() =>
                  setActiveFilter(
                    activeFilter === EFilters.PRICE ? null : EFilters.PRICE
                  )
                }
                className={isPriceFilterOpen ? "bg-rdbryShade-50" : ""}
                icon={
                  <ChevronIcon
                    className={isPriceFilterOpen ? "rotate-180" : ""}
                  />
                }
              >
                {isPriceFilterOpen && (
                  <Popover
                    onClose={() => setActiveFilter(null)}
                    title="ფასის მიხედვით"
                  >
                    <RangeFilter
                      watch={watch}
                      register={register}
                      setValue={setValue}
                      fieldName="price"
                      range={PRICE_RANGES}
                      label={ERangeFilterLabel.PRICE}
                    />
                  </Popover>
                )}
              </FilterItem>
              <FilterItem
                label="ფართობი"
                onClick={() =>
                  setActiveFilter(
                    activeFilter === EFilters.AREA ? null : EFilters.AREA
                  )
                }
                className={isAreaFilterOpen ? "bg-rdbryShade-50" : ""}
                icon={
                  <ChevronIcon
                    className={isAreaFilterOpen ? "rotate-180" : ""}
                  />
                }
              >
                {isAreaFilterOpen && (
                  <Popover
                    onClose={() => setActiveFilter(null)}
                    title="ფართობის მიხედვით"
                  >
                    <RangeFilter
                      watch={watch}
                      register={register}
                      setValue={setValue}
                      fieldName="area"
                      range={AREA_RANGES}
                      label={ERangeFilterLabel.AREA}
                    />
                  </Popover>
                )}
              </FilterItem>
              <FilterItem
                label="საძინებლების რაოდენობა"
                onClick={() =>
                  setActiveFilter(
                    activeFilter === EFilters.BEDROOMS
                      ? null
                      : EFilters.BEDROOMS
                  )
                }
                className={isBedroomsFilterOpen ? "bg-rdbryShade-50" : ""}
                icon={
                  <ChevronIcon
                    className={isBedroomsFilterOpen ? "rotate-180" : ""}
                  />
                }
              >
                {isBedroomsFilterOpen && (
                  <Popover
                    onClose={() => setActiveFilter(null)}
                    title="საძინებლების რაოდენობა"
                  >
                    <InputFilter
                      register={register}
                      fieldName={EFilters.BEDROOMS}
                    />
                  </Popover>
                )}
              </FilterItem>
            </div>
            <div className="flex gap-4 items-center max-w-[800px] mt-4 absolute">
              <div className="flex gap-2 items center flex-wrap">
                {selectedFilters.length > 0 &&
                  selectedFilters.map((filter) => (
                    <FilterChip
                      key={generateUID()}
                      content={filter}
                      onClick={() => handleRemoveFilter(filter)}
                    />
                  ))}
              </div>
              {selectedFilters.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-[14px] leading-[16.8px] font-medium"
                >
                  გასუფთავება
                </button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
