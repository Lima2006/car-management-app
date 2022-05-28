import { ReactNode } from "react";
import Column from "../atoms/column";
import Row from "../atoms/row";

interface ConfirmPopupProps {
  confirmed: (a: boolean) => void;
  title: string;
  children: ReactNode;
  showing: boolean;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({
  confirmed,
  title,
  children,
  showing,
}) => {
  if (!showing) return null
  return (
    <div className={["w-full h-full fixed left-0 top-0 flex justify-center items-center"].join(" ")}>
      <Column className="pointer-events-auto bg-gray-200 rounded-lg border-2 border-black overflow-hidden justify-between min-h-[20%] min-w-[30%]">
        <Column className="m-4 text-center">
          <h2 className="font-bold">{title}</h2>
          <span>{children}</span>
        </Column>
        <Row className="h-fit w-full">
          <input
            className="border-t-2 border-r p-2 border-black bg-gray-100 flex-grow cursor-pointer"
            type="button"
            value="Não"
            onClick={() => confirmed(false)}
          />
          <input
            className="border-t-2 border-l p-2 border-black bg-gray-100 flex-grow cursor-pointer"
            type="button"
            value="Sim"
            onClick={() => confirmed(true)}
          />
        </Row>
      </Column>
    </div>
  );
};

export default ConfirmPopup;
