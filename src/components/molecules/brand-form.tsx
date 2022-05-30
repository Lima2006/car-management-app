import { FormEvent, useState } from "react";
import Button from "../atoms/button";
import Column from "../atoms/column";
import Input from "../atoms/input";
import LinkButton from "../atoms/link-button";
import Row from "../atoms/row";
import BrandDataType from "../types/brand-data-type";
import NewBrandDataType from "../types/new-brand-data-type";

interface BrandFormProps {
  onSubmit: (d: NewBrandDataType) => void;
  defaultValues?: BrandDataType;
  className?: string;
}

const BrandForm: React.FC<BrandFormProps> = ({
  className,
  onSubmit,
  defaultValues = {
    id: undefined,
    name: "",
  },
}) => {
  // === Brand data state ===
  const [data, setData] = useState<BrandDataType>(defaultValues);

  // === Submit ===
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="w-full">
      <Column
        className={[
          "space-y-4 items-center",
          className,
        ].join(" ")}
      >
        <Input
          type="text"
          id="IdPanelForm"
          value={data.id?.toString() || ""}
          label="ID"
          className={{ div: "w-full" }}
        />
        <Input
          type="text"
          id="BrandInputForm"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          label="Marca"
          className={{ div: "w-full" }}
          required
        />
        <Row className="space-x-4">
          <Button className="bg-green-400 border border-green-500 rounded-md shadow hover:bg-green-300 hover:border-green-400">
            Salvar
          </Button>
          <LinkButton href="/marcas" className="bg-gray-100">
            Voltar
          </LinkButton>
        </Row>
      </Column>
    </form>
  );
};

export default BrandForm;
