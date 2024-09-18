import { useState } from "react";
import { EstateList } from "../components/EstateList";
import { FiltersPanel } from "../components/FiltersPanel";
import { useEstatesList } from "../services";
import { IFilters, IGetEstatesList } from "../types";

export const HomePage = (): JSX.Element => {
  const { data, isLoading, isError, refetch } = useEstatesList();
  const [filteredData, setFilteredData] = useState<IGetEstatesList[]>();

  const handleFilterchange = (filterData: IFilters) => {
    const {
      regions,
      area: { min: areaMin, max: areaMax },
      price: { min: priceMin, max: priceMax },
      bedrooms,
    } = filterData;
    const filteredData = data?.filter((estate) => {
      let isMatch = false;

      // Check regions if there are any
      if (regions.length > 0) {
        isMatch = regions.includes(estate.city.region_id.toString());
      }

      // Check area range
      if (!isMatch && (areaMin || areaMax)) {
        if (areaMin && !areaMax) {
          isMatch = estate.area >= Number(areaMin);
        } else if (!areaMin && areaMax) {
          isMatch = estate.area <= Number(areaMax);
        } else if (areaMin && areaMax) {
          isMatch =
            estate.area >= Number(areaMin) && estate.area <= Number(areaMax);
        }
      }

      // Check price range (same logic as area)
      if (!isMatch && (priceMin || priceMax)) {
        if (priceMin && !priceMax) {
          isMatch = estate.price >= Number(priceMin);
        } else if (!priceMin && priceMax) {
          isMatch = estate.price <= Number(priceMax);
        } else if (priceMin && priceMax) {
          isMatch =
            estate.price >= Number(priceMin) &&
            estate.price <= Number(priceMax);
        }
      }

      // Check bedrooms
      if (!isMatch && bedrooms) {
        isMatch = estate.bedrooms === Number(bedrooms);
      }

      return isMatch;
    });
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
