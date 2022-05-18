import Table from "../atoms/table";
import Webpage from "../atoms/webpage";
import Navbar from "../molecules/navbar";

const Cars: React.FC = () => {
  return (
    <Webpage title="Carros">
      <Navbar />
      <Table className="m-8 border" headers={["titulo", "titulo 2"]}>
        <tr>
          <td>foo</td>
          <td>bar</td>
        </tr>
        <tr>
          <td>foo</td>
          <td>bar</td>
        </tr>
      </Table>
    </Webpage>
  );
};

export default Cars;
