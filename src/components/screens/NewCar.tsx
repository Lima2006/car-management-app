import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, UseMutationResult, useQuery } from "react-query";
import { toast } from "react-toastify";
import { getBrands } from "../../services/getBrands";
import { postCar } from "../../services/postCar";
import Body from "../atoms/body";
import Column from "../atoms/column";
import Title from "../atoms/title";
import Webpage from "../atoms/webpage";
import showToastContext from "../contexts/show-toast-context";
import CarForm from "../molecules/car-form";
import Navbar from "../molecules/navbar";
import BrandDataType from "../types/brand-data-type";
import CarDataType from "../types/car-data-type";
import NewCarDataType from "../types/new-car-data-type";

const NewCar: React.FC = () => {
  // === Next router ===
  const { push } = useRouter();
  // === Toast context ===
  const { successToast, errorToast } = useContext(showToastContext);
  // === Query ===
  // Post car
  const { mutate }: UseMutationResult<CarDataType, Error, NewCarDataType> =
    useMutation<CarDataType, Error, NewCarDataType>((data) => postCar(data), {
      onSuccess: () => {
        successToast("Carro cadastrado com sucesso!");
        push("/carros");
      },
      onError: (err) => errorToast(err.message),
    });
  // Get brands
  const { data: brands } = useQuery<BrandDataType[], Error>(
    "brands",
    () => getBrands(),
    {
      onError: (err) => errorToast(err.message),
    }
  );

  return (
    <Webpage title="Novo Carro">
      <Navbar />
      <Body className="items-center">
        <Column className="bg-gray-100 w-1/3 p-8 pt-4 space-y-4 rounded-xl border-2 shadow-md items-center">
          <Title className="mb-4">Novo Carro</Title>
          <CarForm onSubmit={(d) => mutate(d)} brandOptions={brands} />
        </Column>
      </Body>
    </Webpage>
  );
};

export default NewCar;
