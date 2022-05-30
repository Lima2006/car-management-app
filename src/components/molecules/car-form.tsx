import { FormEvent, useState } from "react";
import Button from "../atoms/button";
import Column from "../atoms/column";
import Input from "../atoms/input";
import LinkButton from "../atoms/link-button";
import Row from "../atoms/row";
import Selector from "../atoms/selector";
import BrandDataType from "../types/brand-data-type";
import NewCarDataType from "../types/new-car-data-type";

interface CarFormProps {
  onSubmit: (d: NewCarDataType) => void;
  defaultValues?: NewCarDataType;
  className?: string;
  brandOptions: BrandDataType[];
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
  brandOptions,
}) => {
  // === Car data state ===
  const [data, setData] = useState<NewCarDataType>(defaultValues);

  // === Submit ===
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="w-full">
      <Column className={["space-y-4", className].join(" ")}>
        <Input
          type="text"
          id="NameInputForm"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          label="Nome"
          className={{ div: "w-full" }}
        ></Input>
        <Input
          type="text"
          id="PlateInputForm"
          value={data.plate}
          onChange={(e) => setData({ ...data, plate: e.target.value })}
          label="Placa"
          className={{ div: "w-full" }}
        />
        <Selector
          value={data.brand?.id.toString()}
          onChange={(e) =>
            setData({ ...data, brand: brandOptions[e.target.value] })
          }
          id="BrandInputForm"
          label="Marca"
          className={{ div: "w-full", row: "w-full" }}
        >
          {brandOptions?.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </Selector>
        <Input
          type="text"
          id="ColorInputForm"
          value={data.color}
          onChange={(e) => setData({ ...data, color: e.target.value })}
          label="Cor"
          className={{ div: "w-full" }}
        />
        <Row className="space-x-4 justify-center">
          <Button
            onClick={() => null}
            className="bg-green-400 border border-green-500 rounded-md shadow hover:bg-green-300 hover:border-green-400"
          >
            Salvar
          </Button>
          <LinkButton href="/carros" className="bg-gray-100">
            Voltar
          </LinkButton>
        </Row>
      </Column>
    </form>
  );
};

export default CarForm;