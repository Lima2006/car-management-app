import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, UseMutationResult, useQuery } from "react-query";
import { getBrand } from "../../services/getBrand";
import { putBrand } from "../../services/putBrand";
import Body from "../atoms/body";
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
        push("/marcas");
      },
      onError: (err) => errorToast(err.message),
    }
  );

  return (
    <Webpage title="Editar marca">
      <Navbar />
      <Body>
        {isSuccess && (
          <BrandForm
            defaultValues={brand}
            onSubmit={(d) => mutate({ ...d, id: brand.id })}
          />
        )}
      </Body>
    </Webpage>
  );
};

export default EditBrand;
