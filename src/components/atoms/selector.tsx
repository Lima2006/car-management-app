import { ChangeEvent } from "react";

interface SelectorProps {
  id: string;
  name?: string;
  children?: any;
  className?: { div?: string; label?: string; select?: string };
  label?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Selector: React.FC<SelectorProps> = ({
  className = { div: "", label: "", select: "" },
  id,
  name,
  children,
  label,
  onChange,
  value,
}) => (
  <div className={["flex flex-col", className.div].join(" ")}>
    <label className={["", className.label].join(" ")} htmlFor="id">
      {label}
    </label>
    <select
      name={name}
      id={id}
      className={["border-2 rounded-sm w-48", className.select].join(" ")}
      value={value}
      onChange={(e) => onChange(e)}
    >
      {children}
    </select>
  </div>
);

export default Selector;
