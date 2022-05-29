import BrandDataType from "../components/types/brand-data-type";
import { api } from "../libs/api";

type ParamsType = void;
type ResponseType = BrandDataType[];
type ServiceType = (params?: ParamsType) => Promise<ResponseType>;

export const getBrands: ServiceType = async () => {
  const res = await api.get("/brand");
  return res.data;
};
