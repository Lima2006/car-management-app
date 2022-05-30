import { ChangeEvent, FormEventHandler } from "react";

interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
  value: string;
  type: "text";
  className?: { div?: string; label?: string; input?: string };
  label?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  className = { div: "", label: "", input: "" },
  value,
  onChange,
  type,
  placeholder,
  id,
  label,
  required,
}) => (
  <div className={["flex flex-col w-48", className.div].join(" ")}>
    {label && (
      <label htmlFor={id} className={className.label}>
        {label}
      </label>
    )}
    <input
      id={id}
      type={type}
      className={["border shadow rounded-full px-2 h-8", className.input].join(" ")}
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      readOnly={onChange === undefined}
      required={required}
    />
  </div>
);

export default Input;
