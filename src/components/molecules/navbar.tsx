import Link from "next/link";
import Button from "../atoms/button";
import Row from "../atoms/row";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <Row className={["space-x-8 px-8 py-2 bg-gray-300", className].join(" ")}>
      <Link href="/carros">Carros</Link>
      <Link href="/marcas">Marcas</Link>
    </Row>
  );
};

export default Navbar;
