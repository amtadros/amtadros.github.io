import {
  Card as ChakraCard,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

interface Props {
  heading: string;
  children: JSX.Element
}

export default function Card({ heading, children }: Props) {
  return (
    <ChakraCard
      paddingTop={8}
      paddingBottom={8}
      paddingLeft={{ md: "12", sm: "18"}}
      paddingRight={{ md: "12", sm: "18"}}
    >
      <CardHeader>
        <Heading size="xs" textTransform="uppercase">
          {heading}
        </Heading>
      </CardHeader>
      {children}
    </ChakraCard>
  );
}
