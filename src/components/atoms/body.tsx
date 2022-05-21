import React from "react";
import Column from "./column";

const Body: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <Column className="flex-1 px-8 py-4">{children}</Column>
);

export default Body;
