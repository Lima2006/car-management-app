import Webpage from "../atoms/webpage";
import Navbar from "../molecules/navbar";

const Home: React.FC = () => {
  return (
    <Webpage title="Homepage">
      <Navbar />
    </Webpage>
  );
};
export default Home;
