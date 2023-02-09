import { ReactNode } from "react";
import {
   Box,
   Flex,
   Avatar,
   HStack,
   IconButton,
   useDisclosure,
   useColorModeValue,
   Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import Cart from "./Cart";

export default function Navigaton({ userItems }: any) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { data: session } = useSession();
   const router = useRouter();

   return (
      <>
         <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
               <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
               />
               <HStack spacing={8} alignItems={"center"}>
                  <Logo />
                  <HStack
                     as={"nav"}
                     spacing={4}
                     display={{ base: "none", md: "flex" }}
                  ></HStack>
               </HStack>
               {session ? (
                  <>
                     <Flex alignItems={"center"}>
                        <Cart userItems={userItems} />
                        <Avatar size={"sm"} src={`${session?.user?.image}`} />
                     </Flex>
                  </>
               ) : (
                  <Button
                     onClick={() => {
                        router.push("/login");
                     }}
                     as={"a"}
                     display={{ base: "none", md: "inline-flex" }}
                     fontSize={"sm"}
                     fontWeight={600}
                     color={"white"}
                  >
                     Login
                  </Button>
               )}
            </Flex>

            {isOpen ? <Box pb={4} display={{ md: "none" }}></Box> : null}
         </Box>
      </>
   );
}
