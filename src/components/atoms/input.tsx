interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  type: "text";
}

const Input: React.FC<InputProps> = ({
  className,
  value,
  onChange,
  type,
  placeholder,
}) => (
  <input
    type={type}
    className={["border-2 rounded-sm", className].join(" ")}
    value={value}
    onChange={(e) => onChange(e)}
    placeholder={placeholder}
  />
);

export default Input;
