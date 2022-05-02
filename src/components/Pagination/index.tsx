import { Box, Stack } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

const Pagination: React.FC = () => {
  return (
    <Stack
      direction="row"
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong>-<strong>10</strong>de<strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
      </Stack>
    </Stack>
  );
};

export default Pagination;
