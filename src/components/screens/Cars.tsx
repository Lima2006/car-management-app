import { useState } from "react";
import Body from "../atoms/body";
import BrandOption from "../atoms/brand-option";
import CarTableRow from "../atoms/car-table-row";
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
import { getCarsList } from "../services/getCarsList";
import axios from "axios";

const Cars: React.FC = () => {
  const { status, error, data }: UseQueryResult<CarDataType[], Error> = useQuery<CarDataType[], Error>("cars", getCarsList)
  const brandList: BrandDataType[] = [
    { name: "Fiat", id: 0 },
    { name: "Alfa Romeo", id: 1 },
  ];
  const cars = [{
    name: "a",
    id: 0,
    plate: "a",
    brand: {
      id: 0,
      name: "a"
    },
    color: "a"
  }]
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
            {brandList.map((brand) => (
              <BrandOption key={brand.id} brand={brand} />
            ))}
          </Selector>
        </Row>
        <Table
          headerClassName="text-left"
          className="border"
          headers={["Placa", "Cor", "Marca", "Ações"]}
        >
          {data?.map((car: CarDataType) => (
            <CarTableRow key={car.id} car={car} className="" />
          ))}
        </Table>
      </Body>
    </Webpage>
  );
};

export default Cars;
