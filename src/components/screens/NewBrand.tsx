import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, UseMutationResult } from "react-query";
import { postBrand } from "../../services/postBrand";
import Body from "../atoms/body";
import Column from "../atoms/column";
import Title from "../atoms/title";
import Webpage from "../atoms/webpage";
import showToastContext from "../contexts/show-toast-context";
import BrandForm from "../molecules/brand-form";
import Navbar from "../molecules/navbar";
import BrandDataType from "../types/brand-data-type";
import NewBrandDataType from "../types/new-brand-data-type";

const NewBrand: React.FC = () => {
  // === Next router ===
  const { push } = useRouter();

  // === Toast Context ===
  const { successToast, errorToast } = useContext(showToastContext);

  // === Query ===
  // Post brand
  const { mutate }: UseMutationResult<void, Error, NewBrandDataType> =
    useMutation((data) => postBrand(data), {
      onSuccess: () => {
        successToast("Marca cadastrada com sucesso!");
        push("/marcas");
      },
      onError: (err) => errorToast(err.message),
    });
  return (
    <Webpage title="Nova Marca">
      <Navbar />
      <Body className="items-center">
        <Column className="bg-gray-100 w-1/3 p-8 pt-4 space-y-4 rounded-xl border-2 shadow-md items-center">
          <Title className="mb-4">Nova Marca</Title>
          <BrandForm onSubmit={(d) => mutate(d)} />
        </Column>
      </Body>
    </Webpage>
  );
};

export default NewBrand;
