import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, UseMutationResult, useQuery } from "react-query";
import { getBrands } from "../../services/getBrands";
import { getCar } from "../../services/getCar";
import { putCar } from "../../services/putCar";
import Body from "../atoms/body";
import Column from "../atoms/column";
import Webpage from "../atoms/webpage";
import showToastContext from "../contexts/show-toast-context";
import CarForm from "../molecules/car-form";
import Navbar from "../molecules/navbar";
import BrandDataType from "../types/brand-data-type";
import CarDataType from "../types/car-data-type";

const EditCar: React.FC = () => {
  // === Next router ===
  const { query, push } = useRouter();

  // Toast context
  const { successToast, errorToast } = useContext(showToastContext);

  // === Query ===
  // Get car
  const { data: car, isSuccess } = useQuery(["car", query.id], () =>
    getCar(query.id.toString())
  );
  // Put car
  const { mutate }: UseMutationResult<void, Error, CarDataType> = useMutation<
    void,
    Error,
    CarDataType
  >((data) => putCar(data), {
    onSuccess: () => {
      successToast("Alterações salvas com sucesso!");
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
    <Webpage title="Editar carro">
      <Navbar />
      <Body className="items-center">
        {isSuccess && (
          <Column className="bg-gray-100 w-1/3 p-8 pt-4 space-y-4 rounded-xl border-2 shadow-md items-center">
            <CarForm
              defaultValues={car}
              onSubmit={(d) => mutate({ ...d, id: car.id })}
              brandOptions={brands}
            />
          </Column>
        )}
      </Body>
    </Webpage>
  );
};

export default EditCar;
