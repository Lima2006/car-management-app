import Column from "../atoms/column";
import CarDataType from "../types/car-data-type";

interface CarInformationCardProps {
  car: CarDataType;
}

const CarInformationCard: React.FC<CarInformationCardProps> = ({ car }) => {
  return (
    <Column className="bg-white px-4 py-2 rounded-md my-2 border max-w-full">
      <span>
        <strong>Nome:</strong> {car.name}
      </span>
      <span>
        <strong>Placa:</strong> {car.plate}
      </span>
      <span>
        <strong>Cor:</strong> {car.color}
      </span>
      <span><strong>Marca:</strong> {car.brand.name}</span>
    </Column>
  );
};

export default CarInformationCard;
