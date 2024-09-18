import { useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IFilters, IGetEstatesList } from "../types";
import { handleFiltering } from "../utils/handleFiltering";

export const HomePage = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useEstatesList();
  const [filteredData, setFilteredData] = useState<IGetEstatesList[]>();

  const handleFilterchange = (filerData: IFilters) => {
    if (data) {
      const filteredData = handleFiltering(filerData, data);
      setFilteredData(filteredData);
    }
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
