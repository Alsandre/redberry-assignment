import { IFilters, INewEstateData } from "../types";

export const setLocalStorage = (
  key: string,
  data: INewEstateData | IFilters
) => {
  const dataJSON = data ? JSON.stringify(data) : null;
  if (dataJSON) localStorage.setItem(key, dataJSON);
};
