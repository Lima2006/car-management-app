import Link from "next/link";

interface LinkButton {
  href: string;
  className?: string;
}

const LinkButton = ({ href, children }) => (
  <Link href={href}>
    <div className="bg-gray-200 px-2 py-1 rounded-lg flex flex-row">{children}</div>
  </Link>
);

export default LinkButton;
