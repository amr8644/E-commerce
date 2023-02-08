import {
   Stack,
   Flex,
   Button,
   Text,
   VStack,
   useBreakpointValue,
   Center,
} from "@chakra-ui/react";

export default function Banner() {
   return (
      <Center marginTop={"20px"}>
         <Flex
            w={"95%"}
            rounded={"50px"}
            h={"80vh"}
            backgroundImage={
               "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
         >
            <VStack
               w={"full"}
               justify={"center"}
               px={useBreakpointValue({ base: 4, md: 8 })}
               bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
               <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                  <Text
                     color={"white"}
                     fontWeight={700}
                     lineHeight={1.2}
                     fontSize={useBreakpointValue({ base: "5xl", md: "6xl" })}
                  >
                     Buy.
                  </Text>
                  <Stack direction={"row"}>
                     <Button
                        bg={"blue.400"}
                        rounded={"full"}
                        color={"white"}
                        _hover={{ bg: "blue.500" }}
                     >
                        Show me more
                     </Button>
                  </Stack>
               </Stack>
            </VStack>
         </Flex>
      </Center>
   );
}
