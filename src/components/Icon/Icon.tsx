import { FC, ReactNode } from "react";
import "./Icon.scss";

type IconProps = {
  children: ReactNode;
  className?: string;
};

const Icon: FC<IconProps> = ({ children, className }) => {
  return <span className={`icon ${className}`}>{children}</span>;
};

export default Icon;
