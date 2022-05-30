import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface LinkButtonProps {
  href: string;
  children: any;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  className,
}) => {
  // === Next router ===
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <div
        className={[
          "hover:bg-white border border-transparent hover:border-gray-200 px-2 py-1 rounded-lg flex flex-row cursor-pointer items-center h-min",
          asPath.includes(href) ? "bg-white shadow rounded-md border-gray-200" : "",
          className,
        ].join(" ")}
      >
        {children}
      </div>
    </Link>
  );
};

export default LinkButton;
