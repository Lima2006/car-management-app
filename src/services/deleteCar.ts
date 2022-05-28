import { AxiosResponse } from "axios"
import { api } from "../libs/api"

type ParamsType = {
  id: number | string
}
type ResponseType = AxiosResponse
type ServiceType = (params: ParamsType) => Promise<ResponseType>

export const deleteCar: ServiceType = (id) => api.delete(`/car/${id}`)