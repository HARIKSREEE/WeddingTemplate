import { FC, ReactNode } from "react";

import "./Icon.scss";

type IconProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  title?: string;
  className?: string;
};

const Icon: FC<IconProps> = ({ children, className, onClick, title = "" }) => {
  return (
    <span title={title} onClick={onClick} className={`icon ${className}`}>
      {children}
    </span>
  );
};

export default Icon;
