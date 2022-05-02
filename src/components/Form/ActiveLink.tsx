import { cloneElement, ReactElement } from "react";
import { Link, LinkProps } from "react-router-dom";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  isActive: boolean;
}

const ActiveLink: React.FC<IActiveLinkProps> = ({
  children,
  isActive = false,
  ...rest
}) => {
  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
};

export default ActiveLink;
