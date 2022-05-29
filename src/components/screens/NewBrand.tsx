import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, UseMutationResult } from "react-query";
import { postBrand } from "../../services/postBrand";
import Body from "../atoms/body";
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
  const {
    mutate,
  }: UseMutationResult<void, Error, NewBrandDataType> = useMutation(
    (data) => postBrand(data),
    {
      onSuccess: () => {
        successToast("Marca cadastrada com sucesso!");
        push("/marcas");
      },
      onError: (err) => errorToast(err.message),
    }
  );
  return (
    <Webpage title="Nova Marca">
      <Navbar />
      <Body>
        <Title className="mb-4">Nova Marca</Title>
        <BrandForm onSubmit={(d) => mutate(d)} />
      </Body>
    </Webpage>
  );
};

export default NewBrand;
