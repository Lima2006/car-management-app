import { ChangeEvent } from "react";
import ArrowIcon from "../assets/icons/arrow-down.svg";
import Row from "./row";

interface SelectorProps {
  id: string;
  name?: string;
  children?: any;
  className?: { div?: string; label?: string; select?: string; row?: string };
  label?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Selector: React.FC<SelectorProps> = ({
  className = { div: "", label: "", select: "", row: "" },
  id,
  name,
  children,
  label,
  onChange,
  value,
}) => (
  <div className={["items-center", className.div || "flex flex-col"].join(" ")}>
    <label className={["", className.label].join(" ")} htmlFor="id">
      {label}
    </label>
    <Row
      className={[
        "h-8 border rounded-full shadow overflow-hidden justify-end items-center",
        className.row ? className.row : "w-24",
      ].join(" ")}
    >
      <select
        name={name}
        id={id}
        className={[
          "w-full h-full appearance-none px-2 focus:outline-none",
          className.select,
        ].join(" ")}
        value={value}
        onChange={(e) => onChange(e)}
      >
        {children}
      </select>
      <ArrowIcon width="20px" className="absolute pointer-events-none" />
    </Row>
  </div>
);

export default Selector;
