import { AxiosInstance } from "axios";
import { ResponseDataDTO } from "../interfaces/ResponseServices.dto";
import { setGlobalLoading } from "@/store/modules/global";

export default (httpClient: AxiosInstance) => ({

  getAllCharacters: async (params?: string): Promise<ResponseDataDTO> => {
    setGlobalLoading(true);
    params  = params ? params : ""

    const response = await httpClient.get(`/character${params}`);

    return {
      data: response.data,
    };
  },

  getSingleCharacter: async (id?: string): Promise<ResponseDataDTO> => {
    setGlobalLoading(true);
    const response = await httpClient.get(`/character/${id}`);

    return {
      data: response.data,
    };
  },

  getSearchCharacter: async (name: string): Promise<ResponseDataDTO> => {
    const response = await httpClient.get(`/character/?name=${name}`);

    return {
      data: response.data,
    };
  }
});
