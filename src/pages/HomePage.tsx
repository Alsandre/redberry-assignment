import { useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IGetEstatesList } from "../types";

export const HomePage = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useEstatesList();
  const [filteredData, setFilteredData] = useState<IGetEstatesList[]>();

  const handleFilterchange = (filteredData: IGetEstatesList[]) => {
    setFilteredData(filteredData);
  };

  return (
    <>
      <div className="flex justify-between">
        <FiltersPanel data={data} onFilterChange={handleFilterchange} />
        <div>actions</div>
      </div>
      <span>selected filters</span>
      <EstateList {...{ data: filteredData, isError, isLoading, refetch }} />
    </>
  );
};
