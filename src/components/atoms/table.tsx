import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: { table?: string; header?: string[] | string };
  headers?: string[];
}

interface HeaderProps {
  className?: string[] | string;
  headers: string[];
}

const Header: React.FC<HeaderProps> = ({ className, headers }) => {

  // A função verifica se o objeto inserido é compatível com o className.
  const validateClassName = (input: number) => {
    if (typeof className === "string") return className;
    else if (
      typeof className === "object" &&
      typeof className[input] === "string"
    )
      return className[input];
    else return "";
  };
  return (
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={header} className={["bg-gray-200 text-left", validateClassName(i)].join(" ")}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Table: React.FC<TableProps> = ({ children, className, headers }) => {
  const showHeader = (headers: string[], className: string[] | string) => {
    if (headers.length > 1 || (headers.length === 1 && headers[0] !== "")) {
      return <Header headers={headers} className={className} />;
    }
  };
  return (
    <table className={["w-full", className.table].join(" ")}>
      {showHeader(headers, className.header)}
      {children}
    </table>
  );
};

export default Table;
