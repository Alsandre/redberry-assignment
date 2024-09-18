import { useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IFilters, IGetEstatesList } from "../types";

export const HomePage = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useEstatesList();
  const [filteredData, setFilteredData] = useState<IGetEstatesList[]>();

  const handleFilterchange = (filterData: IFilters) => {
    console.log(filterData);
    const {
      regions,
      area: { min: areaMin, max: areaMax },
      price: { min: priceMin, max: priceMax },
      bedrooms,
    } = filterData;
    console.log("regions", regions);
    console.log("area", areaMin, areaMax);
    console.log("price", priceMin, priceMax);
    console.log("bedrooms", bedrooms);
    setFilteredData(filteredData);
  };

  return (
    <>
      <div className="flex justify-between">
        <FiltersPanel onFilterChange={handleFilterchange} />
        <div>actions</div>
      </div>
      <span>selected filters</span>
      <EstateList {...{ data: filteredData, isError, isLoading, refetch }} />
    </>
  );
};
