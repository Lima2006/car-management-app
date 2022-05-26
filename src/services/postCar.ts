import NewCarDataType from "../components/types/new-car-data-type";
import { api } from "../libs/api";

export const newCar = async (data: NewCarDataType) => {
  const res = await api.post("/car", data);
  return res.data
}
