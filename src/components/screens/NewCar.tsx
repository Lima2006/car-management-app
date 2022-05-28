import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, UseMutationResult } from "react-query";
import { toast } from "react-toastify";
import { postCar } from "../../services/postCar";
import Body from "../atoms/body";
import Title from "../atoms/title";
import Webpage from "../atoms/webpage";
import showToastContext from "../contexts/show-toast-context";
import CarForm from "../molecules/car-form";
import Navbar from "../molecules/navbar";
import CarDataType from "../types/car-data-type";
import NewCarDataType from "../types/new-car-data-type";

const NewCar: React.FC = () => {
  const { push } = useRouter();
  const { successToast, errorToast } = useContext(showToastContext);
  const { mutate }: UseMutationResult<CarDataType, Error, NewCarDataType> =
    useMutation<CarDataType, Error, NewCarDataType>((data) => postCar(data), {
      onSuccess: () => {
        successToast("Carro cadastrado com sucesso!");
        push("/carros");
      },
      onError: (err) => errorToast(err.message),
    });
  return (
    <Webpage title="Novo Carro">
      <Navbar />
      <Body>
        <Title className="mb-4">Novo Carro</Title>
        <CarForm onSubmit={(d) => mutate(d)} />
      </Body>
    </Webpage>
  );
};

export default NewCar;
