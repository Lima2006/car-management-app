import React from "react";
import Column from "./column";

const Body: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className }) => (
  <Column className={["flex-1 px-8 py-4", className].join(" ")}>{children}</Column>
);

export default Body;
