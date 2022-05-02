import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

interface ISidebarNavProps {
  isActive: boolean;
}

const SidebarNav: React.FC<ISidebarNavProps> = ({ isActive }) => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink isActive={isActive} to="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink isActive={isActive} to="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink isActive={isActive} to="forms" icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink isActive={isActive} to="automation" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
};

export default SidebarNav;
