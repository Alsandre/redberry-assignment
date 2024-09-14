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

const fetchRegions = async () => {
  const response = await api.get("/regions");
  return response.data;
};

export const useRegions = () => {
  return useQuery("regions", () => fetchRegions());
};

const fetchCities = async () => {
  const response = await api.get("/cities");
  return response.data;
};

export const useCities = () => {
  return useQuery("cities", () => fetchCities());
};

const fetchAgents = async () => {
  const response = await api.get("/agents");
  return response.data;
};

export const useAgents = () => {
  return useQuery("agents", () => fetchAgents());
};
