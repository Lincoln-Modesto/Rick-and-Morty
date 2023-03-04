import axios from "axios";
import characterService from "./characterService";
import { setGlobalLoading } from "@/store/modules/global";

const API_ENVS = {
  local: "https://rickandmortyapi.com/api",
  production: "",
  development: "",
};

const httpClient = axios.create({
  baseURL: API_ENVS.local,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

httpClient.interceptors.request.use((config: any) => {
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    setGlobalLoading(false);
    return response;
  },
  (error) => {
    setGlobalLoading(false);
    return error;
  }
);

export default {
  character: characterService(httpClient),
};
