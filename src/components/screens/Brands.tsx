import Body from "../atoms/body";
import Row from "../atoms/row";
import Webpage from "../atoms/webpage";
import Navbar from "../molecules/navbar";
import PlusIcon from "../assets/icons/plus-icon.svg";
import LinkButton from "../atoms/link-button";
import Title from "../atoms/title";
import "react-toastify/dist/ReactToastify.css";
import BrandTableRows from "../molecules/brand-table-rows";
import { useQuery } from "react-query";
import { getBrands } from "../../services/getBrands";
import Table from "../atoms/table";
import BrandDataType from "../types/brand-data-type";
import { useContext } from "react";
import showToastContext from "../contexts/show-toast-context";

const Brands: React.FC = () => {
  // === Toast Context ===
  const { errorToast } = useContext(showToastContext);
  // === Query ===
  const { data: brands } = useQuery<BrandDataType[], Error>(
    "brands",
    () => getBrands(),
    {
      onError: (err) => errorToast(err.message),
    }
  );

  return (
    <Webpage title="Marcas">
      <Navbar />
      <Body className="space-y-4">
        <Row className="justify-between items-center">
          <Title>Marcas</Title>
          <LinkButton href="/marcas/novo">
            <PlusIcon width="24px" />
            <span>Nova Marca</span>
          </LinkButton>
        </Row>
        <Table headers={["Nome", "Ações"]} className={{ header: ["", "w-48"] }}>
          <BrandTableRows
            brands={brands}
            className={{ rows: "odd:bg-gray-100" }}
          />
        </Table>
      </Body>
    </Webpage>
  );
};

export default Brands;
