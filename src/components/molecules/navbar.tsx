import { ReactNode } from "react";
import LinkButton from "../atoms/link-button";
import Row from "../atoms/row";

interface NavbarProps {
  children?: ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, children }) => {
  return (
    <Row
      className={[
        "px-8 py-2 min-h-12 items-center justify-between bg-gray-100 shadow",
        className,
      ].join(" ")}
    >
      <Row className="space-x-4">
        <LinkButton href="/carros">Carros</LinkButton>
        <LinkButton href="/marcas">Marcas</LinkButton>
      </Row>
      {children && <Row className="space-x-4 items-center">{children}</Row>}
    </Row>
  );
};

export default Navbar;
