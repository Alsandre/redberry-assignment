import { IFilters, IGetEstatesList } from "../types";

export const handleFiltering = (
  filterData: IFilters,
  data: IGetEstatesList[]
) => {
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
          estate.price >= Number(priceMin) && estate.price <= Number(priceMax);
      }
    }

    // Check bedrooms
    if (!isMatch && bedrooms) {
      isMatch = estate.bedrooms === Number(bedrooms);
    }

    // Check if filters are cleared
    if (
      regions.length === 0 &&
      !areaMax &&
      !areaMin &&
      !priceMax &&
      !priceMin &&
      !bedrooms
    ) {
      isMatch = true;
    }

    return isMatch;
  });

  return filteredData;
};
