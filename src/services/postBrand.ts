import NewBrandDataType from "../components/types/new-brand-data-type";
import { api } from "../libs/api";

type ParamsType = NewBrandDataType;
type ResponseType = void;
type ServiceType = (params: ParamsType) => Promise<ResponseType>

export const postBrand: ServiceType = async (data) => await api.post("/brand", data);
