import CarDataType from "../types/car-data-type";
import Button from "../atoms/button";
import EditIcon from "../assets/icons/edit-icon.svg";
import DeleteIcon from "../assets/icons/delete-icon.svg";
import ConfirmPopup from "./confirm-popup";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { api } from "../../libs/api";
import StatusPopup from "../atoms/status-popup";

interface CarTableRowsProps {
  cars: CarDataType[];
  className?: { body?: string; rows?: string };
}

const CarTableRows: React.FC<CarTableRowsProps> = ({
  cars,
  className = { body: "", rows: "" },
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation(
    (id: number | string) => api.delete(`/car/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cars");
        setShowDeleteModal(false);
      },
    }
  );
  return (
    <tbody className={className.body}>
      {cars?.map((car: CarDataType) => {
        return (
          <tr key={car.id} className={className.rows || ""}>
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
              <ConfirmPopup
                showing={showDeleteModal}
                confirmed={(a) => {
                  if (!a) setShowDeleteModal(false);
                  else {
                    mutate(car.id);
                  }
                }}
                title="Tem certeza que deseja excluir este carro?"
              >
                Essa ação não pode ser desfeita.
              </ConfirmPopup>
              <StatusPopup showing={isSuccess} className="bg-green-500">
                Carro excluído com sucesso!
              </StatusPopup>
              <Button
                className="bg-red-500 flex flex-row"
                onClick={() => setShowDeleteModal(true)}
              >
                <DeleteIcon width="24px" />
                Excluir
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default CarTableRows;
