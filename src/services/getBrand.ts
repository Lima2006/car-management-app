import BrandDataType from "../components/types/brand-data-type";
import { api } from "../libs/api";

type ParamsType = string | number;
type ResponseType = BrandDataType;
type ServiceType = (params: ParamsType) => Promise<ResponseType>;

export const getBrand: ServiceType = async (id) => {
  const res = await api.get(`/brand/${id}`);
  return res.data;
};
