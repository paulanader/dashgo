import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type="password"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="fild"
        _hover={{
          bgColor: "gray.900",
        }}
        ref={ref}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
