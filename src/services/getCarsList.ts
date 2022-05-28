import CarDataType from "../components/types/car-data-type";
import { api } from "../libs/api";

type ParamsType = void;
type ResponseType = CarDataType[];
type ServiceType = (params?: ParamsType) => Promise<ResponseType>;

export const getCarsList: ServiceType = async () => {
  const res = await api.get("/car");
  return res.data;
};
