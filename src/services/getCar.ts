import CarDataType from "../components/types/car-data-type";
import { api } from "../libs/api";

type ParamsType = string | number;
type ResponseType = CarDataType;
type ServiceType = (params: ParamsType) => Promise<ResponseType>;

export const getCar: ServiceType = async (id) => {
  const res = await api.get(`/car/${id}`);
  return res.data;
};
