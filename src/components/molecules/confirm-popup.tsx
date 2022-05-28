import { Dialog } from "@headlessui/react";
import { ReactNode, useEffect, useState } from "react";
import Column from "../atoms/column";
import Row from "../atoms/row";

interface ConfirmPopupProps {
  confirmed: () => void;
  title: string;
  children: ReactNode;
  showing: boolean;
  onClose: () => void;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({
  confirmed,
  title,
  children,
  showing,
  onClose,
}) => {
  return (
    <Dialog className="relative z-50" open={showing} onClose={onClose}>
      <Column className="fixed inset-0 items-center justify-center">
        <Dialog.Panel className="w-full max-w-md rounded-md bg-gray-100 border shadow-md shadow-[rgb(150,150,150,0.1)]">
          <Column className="justify-center p-4">
            <Dialog.Title className="flex justify-center font-bold text-lg">{title}</Dialog.Title>
            {children}
          </Column>
          <Row className="justify-between h-8 bg-white">
            <button className="flex flex-grow justify-center items-center border-t border-r" onClick={onClose}>
              Não
            </button>
            <button
              className="flex flex-grow justify-center items-center border-t"
              onClick={confirmed}
            >
              Sim
            </button>
          </Row>
        </Dialog.Panel>
      </Column>
    </Dialog>
  );
};

export default ConfirmPopup;
