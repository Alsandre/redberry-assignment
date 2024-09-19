import { useEffect, useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IFilters, IGetEstatesList } from "../types";
import { handleFiltering } from "../utils/handleFiltering";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../components/icons";

export const HomePage = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useEstatesList();
  const [filteredData, setFilteredData] = useState<IGetEstatesList[]>();

  const handleFilterchange = (filterData: IFilters) => {
    if (data) {
      const filteredData = handleFiltering(filterData, data);
      setFilteredData(filteredData);
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
        <div className="flex gap-4">
          <Button className="text-rdbryText-100 bg-rdbryPrimary-100 px-4 py-[10px] rounded-[10px] font-medium">
            <PlusIcon /> ლისტინგის დამატება
          </Button>
          <Button className="text-rdbryPrimary-100 border border-solid border-1 border-rdbryPrimary-100 bg-rdbryText-100 px-4 py-[10px] rounded-[10px] font-medium">
            <PlusIcon /> აგენტის დამატება
          </Button>
        </div>
      </div>
      <EstateList {...{ data: filteredData, isError, isLoading, refetch }} />
    </>
  );
};
