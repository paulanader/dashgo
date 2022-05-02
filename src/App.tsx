import { ChakraProvider } from "@chakra-ui/react";
import PagesRoutes from "./pagesRoutes";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <PagesRoutes />
    </ChakraProvider>
  );
}

export default App;
