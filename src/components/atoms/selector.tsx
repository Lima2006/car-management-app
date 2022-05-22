interface SelectorProps extends React.HTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Selector: React.FC<SelectorProps> = ({
  className,
  id,
  name,
  children,
  placeholder,
}) => (
  <select
    name={name}
    id={id}
    className={["border-2 rounded-sm", className].join(" ")}
  >
    <option value="" selected>{placeholder}</option>
    {children}
  </select>
);

export default Selector;
