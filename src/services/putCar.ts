import CarDataType from "../components/types/car-data-type";
import { api } from "../libs/api";

type ParamsType = CarDataType;
type ResponseType = void;
type ServiceType = (params: ParamsType) => Promise<ResponseType>;

export const putCar: ServiceType = async (data) =>
  await api.put(`/car/${data.id}`, data);
