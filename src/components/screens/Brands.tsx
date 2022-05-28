import Body from "../atoms/body";
import Row from "../atoms/row";
import Webpage from "../atoms/webpage";
import Navbar from "../molecules/navbar";
import PlusIcon from "../assets/icons/plus-icon.svg";
import LinkButton from "../atoms/link-button";
import Title from "../atoms/title";
import "react-toastify/dist/ReactToastify.css";

const Brands: React.FC = () => {
  return (
    <Webpage title="Marcas">
      <Navbar />
      <Body className="space-y-4">
        <Row className="justify-between items-center">
          <Title>Marcas</Title>
          <LinkButton href="/carros/novo">
            <PlusIcon width="24px" />
            <span>Nova Marca</span>
          </LinkButton>
        </Row>
      </Body>
    </Webpage>
  );
};

export default Brands;
