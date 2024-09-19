import { useEffect, useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IFilters, IGetEstatesList } from "../types";
import { handleFiltering } from "../utils/handleFiltering";
import { PlusIcon } from "../components/icons";
import { EPrimaryButtonVariants, PrimaryBtn } from "../components/PrimaryBtn";

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
          <PrimaryBtn
            variant={EPrimaryButtonVariants.DEFAULT}
            onClick={() => ""}
            label="ლისტინგის დამატება"
            icon={<PlusIcon />}
          />
          <PrimaryBtn
            variant={EPrimaryButtonVariants.GHOST}
            onClick={() => ""}
            label="აგენტის დამატება"
            icon={<PlusIcon />}
          />
        </div>
      </div>
      <EstateList {...{ data: filteredData, isError, isLoading, refetch }} />
    </>
  );
};
