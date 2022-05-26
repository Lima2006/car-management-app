import { useState } from "react";
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

const Cars: React.FC = () => {
  const { data: cars }: UseQueryResult<CarDataType[], Error> = useQuery<
    CarDataType[],
    Error
  >("cars", getCarsList);
  const brandList: BrandDataType[] = [
    { name: "Fiat", id: 0 },
    { name: "Alfa Romeo", id: 1 },
  ];
  const [plateFilter, setPlateFilter] = useState("");
  return (
    <Webpage title="Carros">
      <Navbar />
      <Body className="space-y-4">
        <Row className="justify-between items-center">
          <Title>Carros</Title>
          <LinkButton href="/carros/novo">
            <PlusIcon width="24px" />
            <span>Novo Carro</span>
          </LinkButton>
        </Row>
        <Row className="space-x-4">
          <Input
            id="plateFilter"
            type="text"
            value={plateFilter}
            onChange={(e) => setPlateFilter(e.target["value"])}
            label="Filtrar por placa"
          />
          <Selector
            name="selecionar-marcas"
            id="select-brand"
            label="Filtrar por marca"
            defaultValue="all"
          >
            <option value="all">Todas</option>
            {brandList.map((brand: BrandDataType) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </Selector>
        </Row>
        <Table
          className={{
            table: "border",
            header: ["w-1/4", "w-1/4", "w-auto", "w-48"],
          }}
          headers={["Placa", "Cor", "Marca", "Ações"]}
        >
          <CarTableRows cars={cars} className={{ rows: "odd:bg-gray-100" }} />
        </Table>
      </Body>
    </Webpage>
  );
};

export default Cars;
