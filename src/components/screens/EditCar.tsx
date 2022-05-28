import { useRouter } from "next/router";
import { useMutation, UseMutationResult, useQuery } from "react-query";
import { getCar } from "../../services/getCar";
import { putCar } from "../../services/putCar";
import Body from "../atoms/body";
import Webpage from "../atoms/webpage";
import CarForm from "../molecules/car-form";
import Navbar from "../molecules/navbar";
import CarDataType from "../types/car-data-type";

const EditCar: React.FC = () => {
  // === Next router ===
  const { query, push } = useRouter();

  // === Query ===
  // Get car
  const { data: car } = useQuery(["car", query.id], () =>
    getCar(query.id.toString())
  );
  // Put car
  const { mutate }: UseMutationResult<void, Error, CarDataType> = useMutation<
    void,
    Error,
    CarDataType
  >((data) => putCar(data), {
    onSuccess: () => push("/carros")
  });

  return (
    <Webpage title="Editar carro">
      <Navbar />
      <Body>
        <CarForm
          defaultValues={car}
          onSubmit={(d) => mutate({ ...d, id: car.id })}
        />
      </Body>
    </Webpage>
  );
};

export default EditCar;
