import { api } from "../libs/api";

export const getCarsList = async () => {
  const res = await api.get("/car");
  return res.data
}
