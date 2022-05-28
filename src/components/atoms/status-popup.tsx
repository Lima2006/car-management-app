import { useEffect, useState } from "react";

interface StatusPopupProps {
  className?: string;
  children: string;
  showing: boolean;
}

const StatusPopup: React.FC<StatusPopupProps> = ({
  className,
  children,
  showing,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (showing) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 2000);
      () => clearInterval(timer);
    }
  }, [showing]);

  return (
    <div
      className={[
        "w-full fixed left-0 top-0 pointer-events-none flex justify-center",
      ].join(" ")}
    >
      <span
        className={[
          "px-4 py-2 w-96 min-w-fit text-white border border-black transition ease-out duration-500",
          show ? "translate-y-14" : "-translate-y-12",
          className || "bg-gray-500",
          className,
        ].join(" ")}
      >
        {children}
      </span>
    </div>
  );
};

export default StatusPopup;
