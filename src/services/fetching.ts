import { useQuery } from "react-query";
import api from "./api";

const fetchEstatesList = async () => {
  const response = await api.get("/real-estates");
  return response.data;
};

export const useEstatesList = () => {
  return useQuery("estates-list", fetchEstatesList);
};

const fetchEstateById = async (id: number) => {
  const response = await api.get(`/real-estates/${id}`);
  return response.data;
};

export const useEstateById = (id: number) => {
  return useQuery(["estate-by-id", id], () => fetchEstateById(id));
};
