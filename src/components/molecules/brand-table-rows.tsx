import Button from "../atoms/button";
import EditIcon from "../assets/icons/edit-icon.svg";
import DeleteIcon from "../assets/icons/delete-icon.svg";
import ConfirmPopup from "./confirm-popup";
import { useContext, useState } from "react";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { api } from "../../libs/api";
import Column from "../atoms/column";
import { useRouter } from "next/router";
import showToastContext from "../contexts/show-toast-context";
import BrandDataType from "../types/brand-data-type";
import BrandInformationCard from "./brand-information-card";

interface BrandTableRowsProps {
  brands: BrandDataType[];
  className?: { body?: string; rows?: string };
}

const BrandTableRows: React.FC<BrandTableRowsProps> = ({
  brands,
  className = { body: "", rows: "" },
}) => {
  // === Next router ===
  const { push } = useRouter();

  // === Toast context ===
  const { successToast, errorToast } = useContext(showToastContext);

  // === Show delete modal state ===
  const [showDeleteModal, setShowDeleteModal] = useState<string | number>();

  // === Query ===
  // Query client
  const queryClient = useQueryClient();
  // Query mutate
  const { mutate }: UseMutationResult<BrandDataType, Error, string | number> =
    useMutation((id) => api.delete(`/brand/${id}`), {
      onSuccess: () => {
        queryClient.invalidateQueries("brands");
        setShowDeleteModal(undefined);
        successToast("Marca excluída com sucesso!");
      },
      onError: (err) => errorToast(err.message),
    });

  return (
    <tbody className={className.body}>
      {brands?.map((brand: BrandDataType) => {
        return (
          <tr key={brand.id} className={className.rows || ""}>
            <td className="pl-2">{brand.name}</td>
            <td className="space-x-2 flex py-2">
              <Button
                className="bg-blue-400 flex flex-row"
                onClick={() => push(`/marcas/editar/${brand.id}`)}
              >
                <EditIcon width="24px" />
                Editar
              </Button>
              <Button
                className="bg-red-500 flex flex-row"
                onClick={() => setShowDeleteModal(brand.id)}
              >
                <DeleteIcon width="24px" />
                Excluir
              </Button>
              <ConfirmPopup
                showing={showDeleteModal === brand.id}
                confirmed={() => mutate(brand.id)}
                onClose={() => setShowDeleteModal(undefined)}
                title={`Tem certeza que deseja excluir este carro?`}
              >
                <Column className="items-center overflow-hidden">
                  <BrandInformationCard brand={brand} />
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

export default BrandTableRows;
