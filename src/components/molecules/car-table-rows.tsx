import CarDataType from "../types/car-data-type";
import Button from "../atoms/button";
import EditIcon from "../assets/icons/edit-icon.svg";
import DeleteIcon from "../assets/icons/delete-icon.svg";
import ConfirmPopup from "./confirm-popup";
import { useContext, useState } from "react";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { api } from "../../libs/api";
import Column from "../atoms/column";
import CarInformationCard from "./car-information-card";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import showToastContext from "../contexts/show-toast-context";

interface CarTableRowsProps {
  cars: CarDataType[];
  className?: { body?: string; rows?: string };
}

const CarTableRows: React.FC<CarTableRowsProps> = ({
  cars,
  className = { body: "", rows: "" },
}) => {
  // Next router
  const { push } = useRouter();

  // === Toast context ===
  const { successToast, errorToast } = useContext(showToastContext);

  // === Show delete modal state ===
  const [showDeleteModal, setShowDeleteModal] = useState<string | number>();

  // === Query ===
  // Query client
  const queryClient = useQueryClient();
  // Query mutate
  const { mutate }: UseMutationResult<CarDataType, Error, string | number> =
    useMutation((id: number | string) => api.delete(`/car/${id}`), {
      onSuccess: () => {
        queryClient.invalidateQueries("cars");
        setShowDeleteModal(undefined);
        successToast("Carro excluído com sucesso!");
      },
      onError: (err) => errorToast(err.message),
    });

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
                onClick={() => push(`/carros/editar/${car.id}`)}
              >
                <EditIcon width="24px" />
                Editar
              </Button>
              <Button
                className="bg-red-500 flex flex-row"
                onClick={() => setShowDeleteModal(car.id)}
              >
                <DeleteIcon width="24px" />
                Excluir
              </Button>
              <ConfirmPopup
                showing={showDeleteModal === car.id}
                confirmed={() => mutate(car.id)}
                onClose={() => setShowDeleteModal(undefined)}
                title={`Tem certeza que deseja excluir este carro?`}
              >
                <Column className="items-center overflow-hidden">
                  <CarInformationCard car={car} />
                  Essa ação não pode ser desfeita.
                </Column>
              </ConfirmPopup>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default CarTableRows;
