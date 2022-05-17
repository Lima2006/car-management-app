interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Row: React.FC<RowProps> = ({ className, ...props }) => (
  <div className={["flex flex-row", className].join(" ")} {...props} />
);

export default Row;
