import { useState } from "react";
import Body from "../atoms/body";
import CarTableRows from "../atoms/car-table-rows";
import Input from "../atoms/input";
import Row from "../atoms/row";
import Selector from "../atoms/selector";
import Table from "../atoms/table";
import Webpage from "../atoms/webpage";
import Navbar from "../molecules/navbar";
import BrandDataType from "../types/brand-data-type";
import CarDataType from "../types/car-data-type";
import PlusIcon from "../assets/icons/plus-icon.svg"
import LinkButton from "../atoms/link-button";
import { useQuery, UseQueryResult } from "react-query";
import { getCarsList } from "../../services/getCarsList";

const Cars: React.FC = () => {
  const { status, error, data: cars }: UseQueryResult<CarDataType[], Error> = useQuery<CarDataType[], Error>("cars", getCarsList)
  const brandList: BrandDataType[] = [
    { name: "Fiat", id: 0 },
    { name: "Alfa Romeo", id: 1 },
  ];
  const [plateFilter, setPlateFilter] = useState("");
  return (
    <Webpage title="Carros">
      <Navbar />
      <Body className="space-y-4">
        <Row className="justify-between">
          <h1>Carros</h1>
          <LinkButton href="/carro/novo">
            <PlusIcon width="24px" />
            <span>Novo Carro</span>
          </LinkButton>
        </Row>
        <Row className="space-x-4">
          <label htmlFor="plateFilter">Filtrar por carro</label>
          <Input
            id="plateFilter"
            type="text"
            value={plateFilter}
            onChange={(e) => setPlateFilter(e.target["value"])}
          />
          <Selector
            name="selecionar-marcas"
            id="brand-selector"
            placeholder="Todas"
          >
            
          </Selector>
        </Row>
        <Table
          className={{table: "border", header: ["w-1/4", "w-1/4", "w-auto", "w-48"]}}
          headers={["Placa", "Cor", "Marca", "Ações"]}
        >
            <CarTableRows cars={cars} className={{rows: "odd:bg-gray-100"}} />
        </Table>
      </Body>
    </Webpage>
  );
};

export default Cars;
