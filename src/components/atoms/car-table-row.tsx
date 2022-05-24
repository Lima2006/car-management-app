import CarDataType from "../types/car-data-type";
import Button from "./button";
import EditIcon from "../assets/icons/edit-icon.svg";
import DeleteIcon from "../assets/icons/delete-icon.svg";

interface CarTableRowProps {
  car: CarDataType;
  key: number;
  className?: string;
}

const CarTableRow: React.FC<CarTableRowProps> = ({ car, key, className }) => (
  <tr key={key} className={["odd:bg-gray-100", className].join(" ")}>
    <td>{car.plate}</td>
    <td>{car.color}</td>
    <td>{car.brand.name}</td>
    <td className="space-x-2 flex py-2">
      <Button
        className="bg-blue-400 flex flex-row"
        onClick={() => console.log("Editar " + car.id)}
      >
        <EditIcon width="24px" />
        Editar
      </Button>
      <Button
        className="bg-red-500 flex flex-row"
        onClick={() => console.log("Excluir " + car.id)}
      >
        <DeleteIcon width="24px" />
        Excluir
      </Button>
    </td>
  </tr>
);

export default CarTableRow;
