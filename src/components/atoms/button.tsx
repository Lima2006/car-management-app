interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={["bg-gray-200 px-2 py-1 rounded-lg  flex flex-row", className].join(" ")}
      {...props}
    />
  );
};

export default Button;
