import { useMutation, useQueryClient } from "react-query";
import api from "./api";
import { INewAgentData, INewEstateData } from "../types";

export const createEstate = async (estateData: INewEstateData) => {
  const response = await api.post("/real-estates", estateData);
  return response.data;
};

export const useCreateEstate = () => {
  const queryClient = useQueryClient();

  return useMutation(createEstate, {
    onSuccess: () => {
      queryClient.invalidateQueries("estates-list");
    },
  });
};

const deleteEstate = async (id: number) => {
  const response = await api.delete(`/real-estates/${id}`);
  return response.data;
};

export const useDeleteEstate = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteEstate, {
    onSuccess: () => {
      queryClient.invalidateQueries("estates-list");
    },
  });
};

const createAgent = async (agentData: INewAgentData) => {
  const response = await api.post("/agents", agentData);
  return response.data;
};

export const useCreateAgents = () => {
  const queryClient = useQueryClient();

  return useMutation(createAgent, {
    onSuccess: () => {
      queryClient.invalidateQueries("agents");
    },
  });
};
