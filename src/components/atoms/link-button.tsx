import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: any
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className }) => (
  <Link href={href}>
    <div className={["bg-gray-200 px-2 py-1 rounded-lg flex flex-row cursor-pointer items-center h-min", className].join(" ")}>{children}</div>
  </Link>
);

export default LinkButton;
