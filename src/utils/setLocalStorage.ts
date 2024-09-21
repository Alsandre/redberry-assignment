import { IFilters, INewAgentData, INewEstateData } from "../types";

export const setLocalStorage = (
  key: string,
  data: INewEstateData | IFilters | INewAgentData
) => {
  const dataJSON = data ? JSON.stringify(data) : null;
  if (dataJSON) localStorage.setItem(key, dataJSON);
};
