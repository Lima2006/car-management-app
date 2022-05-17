interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children, className
}) => {
  return (
    <button className={["", className].join(" ")}>
      {children}
    </button>
  )
};

export default Button;
