import CarDataType from "./car-data-type";

export type FilterData = (
  data: CarDataType[],
  plateFilter: string,
  brandFilter: string | number
) => CarDataType[];
