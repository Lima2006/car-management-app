import { FormEvent, useEffect, useState } from "react";
import Button from "../atoms/button";
import Column from "../atoms/column";
import Input from "../atoms/input";
import LinkButton from "../atoms/link-button";
import Row from "../atoms/row";
import Selector from "../atoms/selector";
import NewCarDataType from "../types/new-car-data-type";

interface CarFormProps {
  onSubmit: (d: NewCarDataType) => void;
  defaultValues?: NewCarDataType;
  className?: string;
}

const CarForm: React.FC<CarFormProps> = ({
  className,
  onSubmit,
  defaultValues = {
    name: "",
    brand: { id: 0, name: "Fiat" },
    color: "",
    plate: "",
  },
}) => {
  // === Car data ===
  // State
  const [data, setData] = useState<NewCarDataType>(defaultValues);
  // Update data
  useEffect(() => setData(defaultValues), [defaultValues]);

  // === Submit ===
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Column className={["space-y-4", className].join("")}>
        <Input
          type="text"
          id="NameInputForm"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          label="Nome"
        ></Input>
        <Input
          type="text"
          id="PlateInputForm"
          value={data.plate}
          onChange={(e) => setData({ ...data, plate: e.target.value })}
          label="Placa"
        />
        <Selector
          value={data.brand.id.toString()}
          onChange={(e) => console.log(e)}
          id="BrandInputForm"
          label="Marca"
        ></Selector>
        <Input
          type="text"
          id="ColorInputForm"
          value={data.color}
          onChange={(e) => setData({ ...data, color: e.target.value })}
          label="Cor"
        />
        <Row className="space-x-4">
          <Button onClick={() => null}>Salvar</Button>
          <LinkButton href="/carros">Voltar</LinkButton>
        </Row>
      </Column>
    </form>
  );
};

export default CarForm;
