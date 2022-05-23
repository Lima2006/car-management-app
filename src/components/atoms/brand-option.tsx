import BrandDataType from "../types/brand-data-type";

interface BrandOptionProps {
  key: number;
  brand: BrandDataType;
}

const BrandOption: React.FC<BrandOptionProps> = ({ brand, key }) => {
  return (
    <option key={key} value={brand.id}>
      {brand.name}
    </option>
  );
};

export default BrandOption;
