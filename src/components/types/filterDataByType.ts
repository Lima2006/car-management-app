import CarDataType from "./car-data-type";

export type FilterDataByType = (
  data: CarDataType[],
  query: string
) => CarDataType[];
