interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;
  headers?: string[] | string;
  headerClassName?: string;
}

const Table: React.FC<TableProps> = ({ children, className, headers, headerClassName }) => {
  // A função mapeia uma array de strings e as retorna dentro de uma tag "th".
  const mapHeadersArray = (input: string[]) => {
    return input.map((title) => <th key={title} className={headerClassName}>{title}</th>);
  };

  // A função retrna o(s) título(s) dentro de uma tag "th".
  const headersToTableData = (input: string[] | string) => {
    if (typeof input === "object" && input.length > 1)
      return mapHeadersArray(input);
    else return <th className={headerClassName}>{input}</th>;
  };

  // Caso o parâmetro "headers" tenha um valor aceito, a função renderiza o cabeçalho da tabela.
  const tableHeaders = (input: string[] | string | undefined) => {
    if (input) {
      return <tr>{headersToTableData(input)}</tr>;
    }
  };
  return (
    <table className={["w-full", className].join(" ")}>
      {tableHeaders(headers)}
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
