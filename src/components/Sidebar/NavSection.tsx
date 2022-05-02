import { Box, Stack, Text } from "@chakra-ui/react";

interface INavSectionProps {
  title: string;
  children: React.ReactNode;
}

const NavSection: React.FC<INavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="strech">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
