import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

import ActiveLink from "../Form/ActiveLink";

interface INavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  to: string;
  isActive: boolean;
}

const NavLink: React.FC<INavLinkProps> = ({
  icon,
  isActive,
  children,
  to,
  ...rest
}) => {
  return (
    <ActiveLink isActive={isActive} to={to}>
      <ChakraLink display="flex" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
