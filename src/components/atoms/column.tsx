interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Column: React.FC<ColumnProps> = ({ className, ...props }) => (
  <div className={["flex flex-col", className].join(" ")} {...props} />
);

export default Column;
