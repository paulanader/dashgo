import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

const Profile: React.FC<IProfileProps> = ({ showProfileData }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Paula Nader</Text>
          <Text color="gray.300" fontSize="small">
            paulanader@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Paula Nader"
        src="https://github.com/paulanader.png"
      />
    </Flex>
  );
};

export default Profile;
