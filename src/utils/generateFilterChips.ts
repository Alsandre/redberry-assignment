import { IFilters } from "../types";

export const generateFilterChips = (filters: IFilters): string[] => {
  const { area, bedrooms, price, regions } = filters;
  const newFilters: string[] = [];

  const priceChip =
    price.min === "" && price.max === ""
      ? ""
      : price.min === ""
        ? `<${price.max}`
        : price.max === ""
          ? `${price.min}<`
          : `${price.min} - ${price.max}`;
  const areaChip =
    area.min === "" && area.max === ""
      ? ""
      : area.min === ""
        ? `<${area.max}`
        : area.max === ""
          ? `${area.min}<`
          : `${area.min}<${area.max}`;

  newFilters.push(...regions, priceChip, areaChip, bedrooms);
  return newFilters.filter((chip) => chip !== "");
};
