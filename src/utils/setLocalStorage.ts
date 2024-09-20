import { INewEstateData } from "../types";

export const setLocalStorage = (key: string, data: INewEstateData) => {
  const dataJSON = data ? JSON.stringify(data) : null;
  if (dataJSON) localStorage.setItem(key, dataJSON);
};
