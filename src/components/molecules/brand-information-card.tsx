import Column from "../atoms/column";
import BrandDataType from "../types/brand-data-type";

interface BrandInformationCardProps {
  brand: BrandDataType;
}

const BrandInformationCard: React.FC<BrandInformationCardProps> = ({
  brand,
}) => {
  return (
    <Column className="bg-white px-4 py-2 rounded-md my-2 border max-w-full">
      <span>
        <strong>ID:</strong> {brand.id}
      </span>
      <span>
        <strong>Nome:</strong> {brand.name}
      </span>
    </Column>
  );
};

export default BrandInformationCard;
