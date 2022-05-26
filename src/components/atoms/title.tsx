import { HTMLAttributes } from "react";


const Title: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, children }) => <h1 className={["mb-4 font-bold text-xl", className].join(" ")}>{children}</h1>

export default Title;
