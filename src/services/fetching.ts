import { useQuery, UseQueryResult } from "react-query";
import api from "./api";
import {
  ICityData,
  IGetAgentData,
  IGetEstateById,
  IGetEstatesList,
  IRegionData,
} from "../types";

const fetchEstatesList = async (): Promise<IGetEstatesList[]> => {
  const response = await api.get<IGetEstatesList[]>("/real-estates");
  return response.data;
};

export const useEstatesList = (): UseQueryResult<IGetEstatesList[]> => {
  return useQuery<IGetEstatesList[]>("estates-list", fetchEstatesList);
};

const fetchEstateById = async (id: number): Promise<IGetEstateById> => {
  const response = await api.get<IGetEstateById>(`/real-estates/${id}`);
  return response.data;
};

export const useEstateById = (id: number): UseQueryResult<IGetEstateById> => {
  return useQuery<IGetEstateById>(["estate-by-id", id], () =>
    fetchEstateById(id)
  );
};

const fetchRegions = async (): Promise<IRegionData[]> => {
  const response = await api.get<IRegionData[]>("/regions");
  return response.data;
};

export const useRegions = (): UseQueryResult<IRegionData[]> => {
  return useQuery<IRegionData[]>("regions", () => fetchRegions());
};

const fetchCities = async (): Promise<ICityData[]> => {
  const response = await api.get<ICityData[]>("/cities");
  return response.data;
};

export const useCities = (): UseQueryResult<ICityData[]> => {
  return useQuery<ICityData[]>("cities", () => fetchCities());
};

const fetchAgents = async (): Promise<IGetAgentData[]> => {
  const response = await api.get<IGetAgentData[]>("/agents");
  return response.data;
};

export const useAgents = (): UseQueryResult<IGetAgentData[]> => {
  return useQuery<IGetAgentData[]>("agents", () => fetchAgents());
};
