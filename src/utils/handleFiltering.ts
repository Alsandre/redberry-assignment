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

    if (regions.length > 0) {
      isMatch = regions.includes(estate.city.region_id.toString());
    }

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

    if (!isMatch && bedrooms) {
      isMatch = estate.bedrooms === Number(bedrooms);
    }

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
