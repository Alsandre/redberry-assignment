import { useEffect, useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IFilters, IGetEstatesList } from "../types";
import { handleFiltering } from "../utils/handleFiltering";

export const HomePage = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useEstatesList();
  const [filteredData, setFilteredData] = useState<IGetEstatesList[]>();

  const handleFilterchange = (filterData: IFilters) => {
    if (data) {
      const filteredData = handleFiltering(filterData, data);
      setFilteredData(filteredData);
      console.log(data, "data");
      console.log(filteredData, "filteredData");
    }
  };

  useEffect(() => {
    if (data && !filteredData) {
      setFilteredData(data);
    }
  }, [data]);

  return (
    <>
      <div className="flex justify-between">
        <FiltersPanel onFilterChange={handleFilterchange} />
        <div>actions</div>
      </div>
      <EstateList {...{ data: filteredData, isError, isLoading, refetch }} />
    </>
  );
};
