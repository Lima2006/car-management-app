import BrandDataType from "./brand-data-type"

type CarDataType = {
  id: number,
  name: string,
	plate: string,
	color: string,
	brand: BrandDataType,
}

export default CarDataType