import BrandDataType from "../components/types/brand-data-type";
import { api } from "../libs/api";

type ParamsType = BrandDataType;
type ResponseType = void;
type ServiceType = (params: ParamsType) => Promise<ResponseType>;

export const putBrand: ServiceType = async (data) =>
  await api.put(`/brand/${data.id}`, data);
