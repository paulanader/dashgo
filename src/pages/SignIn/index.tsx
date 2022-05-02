import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormData>();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Senha" {...register("password")} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;