import { useContext, useState } from "react";
import Body from "../atoms/body";
import CarTableRows from "../molecules/car-table-rows";
import Input from "../atoms/input";
import Row from "../atoms/row";
import Selector from "../atoms/selector";
import Table from "../atoms/table";
import Webpage from "../atoms/webpage";
import Navbar from "../molecules/navbar";
import BrandDataType from "../types/brand-data-type";
import CarDataType from "../types/car-data-type";
import PlusIcon from "../assets/icons/plus-icon.svg";
import LinkButton from "../atoms/link-button";
import { useQuery, UseQueryResult } from "react-query";
import { getCarsList } from "../../services/getCarsList";
import Title from "../atoms/title";
import "react-toastify/dist/ReactToastify.css";
import { FilterData } from "../types/filterDataType";
import showToastContext from "../contexts/show-toast-context";
import { getBrands } from "../../services/getBrands";
import LoadingScreen from "./loading-screen";
import Column from "../atoms/column";
import ErrorScreen from "./error-screen";

const Cars: React.FC = () => {
  // === Filter Inputs ===
  // Plate filter
  const [plateFilter, setPlateFilter] = useState("");
  // Brand filter
  const [brandFilter, setBrandFilter] = useState("all");

  // === Toast Context ===
  const { errorToast } = useContext(showToastContext);

  // === Query ===
  // Get cars
  const {
    data,
    isLoading,
    isSuccess,
    isError,
  }: UseQueryResult<CarDataType[], Error> = useQuery<
    CarDataType[],
    Error,
    CarDataType[]
  >("cars", () => getCarsList(), {
    onError: (err) => {
      errorToast(`Buscar carros: ${err.message}`);
      setErrorData(err);
    },
  });
  // Get brands
  const { data: brandList } = useQuery<BrandDataType[], Error>(
    "brands",
    () => getBrands(),
    {
      onError: (err) => errorToast(`Buscar marcas: ${err.message}`),
    }
  );

  // === Filter functions ===
  // Filter by plate
  const filterData: FilterData = (data, plateFilter, brandFilter) => {
    return data?.filter((car) => {
      if (plateFilter === "" && brandFilter === "all") {
        return data;
      } else if (
        car.plate.toLowerCase().includes(plateFilter.toLowerCase()) &&
        (car.brand.id?.toString() === brandFilter?.toString() || brandFilter === "all")
      ) {
        return car;
      }
    });
  };
  // Filtered data
  const cars = filterData(data, plateFilter, brandFilter);

  // === Error data ===
  const [errorData, setErrorData] = useState(undefined);

  return (
    <Webpage title="Carros">
      <Navbar>
        <Input
          id="plateFilter"
          type="text"
          value={plateFilter}
          onChange={(e) => setPlateFilter(e.target["value"])}
          placeholder="Filtrar por placa"
        />
        <Selector
          name="selecionar-marcas"
          id="select-brand"
          label="Marca:"
          className={{ div: "flex flex-row space-x-2" }}
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target["value"])}
        >
          <option value="all">Todas</option>
          {brandList?.map((brand: BrandDataType) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </Selector>
      </Navbar>
      <Body>
        {isLoading && <LoadingScreen />}
        {isError && <ErrorScreen error={errorData} />}
        {isSuccess && (
          <Column className="space-y-4">
            <Row className="justify-between items-center">
              <Title>Carros</Title>
              <LinkButton href="/carros/novo" className="bg-gray-100 border shadow">
                <PlusIcon width="24px" />
                <span>Novo Carro</span>
              </LinkButton>
            </Row>
            <Table
              className={{
                header: ["w-1/4", "w-1/4", "w-auto", "w-48"],
              }}
              headers={["Placa", "Cor", "Marca", "Ações"]}
            >
              <CarTableRows
                cars={cars}
                className={{ rows: "odd:bg-gray-100" }}
              />
            </Table>
          </Column>
        )}
      </Body>
    </Webpage>
  );
};

export default Cars;
