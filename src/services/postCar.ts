import CarDataType from "../components/types/car-data-type";
import NewCarDataType from "../components/types/new-car-data-type";
import { api } from "../libs/api";

type ParamsType = NewCarDataType;
type ResponseType = CarDataType;
type ServiceType = (params: ParamsType) => Promise<ResponseType>

export const postCar: ServiceType = async (data) => await api.post("/car", data);
