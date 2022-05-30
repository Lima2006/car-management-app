import { useRouter } from "next/router";
import { useContext } from "react";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "react-query";
import { getBrand } from "../../services/getBrand";
import { putBrand } from "../../services/putBrand";
import Body from "../atoms/body";
import Column from "../atoms/column";
import Title from "../atoms/title";
import Webpage from "../atoms/webpage";
import showToastContext from "../contexts/show-toast-context";
import BrandForm from "../molecules/brand-form";
import Navbar from "../molecules/navbar";
import BrandDataType from "../types/brand-data-type";

const EditBrand: React.FC = () => {
  // === Next router ===
  const { query, push } = useRouter();

  // Toast context
  const { successToast, errorToast } = useContext(showToastContext);

  // === Query ===
  // Query client
  const queryClient = useQueryClient();
  // Get brand
  const { data: brand, isSuccess } = useQuery(["brand", query.id], () =>
    getBrand(query.id.toString())
  );
  // Put brand
  const {
    mutate,
  }: UseMutationResult<void, Error, BrandDataType, BrandDataType> = useMutation(
    (data) => putBrand(data),
    {
      onSuccess: () => {
        successToast("Alterações salvas com sucesso!");
        queryClient.invalidateQueries(["brand", query.id]);
        push("/marcas");
      },
      onError: (err) => errorToast(err.message),
    }
  );

  return (
    <Webpage title="Editar marca">
      <Navbar />
      <Body className="items-center">
        {isSuccess && (
          <Column className="bg-gray-100 w-1/3 p-8 pt-4 space-y-4 rounded-xl border-2 shadow-md items-center">
            <Title>Editar Marca</Title>
            <BrandForm
              defaultValues={brand}
              onSubmit={(d) => mutate({ ...d, id: brand.id })}
            />
          </Column>
        )}
      </Body>
    </Webpage>
  );
};

export default EditBrand;
