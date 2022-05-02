import { Box } from "@chakra-ui/react";
import SidebarNav from "./SidebarNav";

interface ISidebarProps {
  isActive: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ isActive }) => {
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav isActive={isActive} />
    </Box>
  );
};

export default Sidebar;
