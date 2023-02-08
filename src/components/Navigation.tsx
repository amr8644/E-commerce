import { ReactNode } from "react";
import {
   Box,
   Flex,
   Avatar,
   HStack,
   Link,
   IconButton,
   useDisclosure,
   useColorModeValue,
   Stack,
   Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsCart2 } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Navigaton() {
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
                  <Box>Logo</Box>
                  <HStack
                     as={"nav"}
                     spacing={4}
                     display={{ base: "none", md: "flex" }}
                  ></HStack>
               </HStack>
               {session ? (
                  <>
                     <Flex alignItems={"center"}>
                        <Button marginRight={"20px"}>
                           <BsCart2 />
                        </Button>
                        <Avatar
                           size={"sm"}
                           src={
                              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                           }
                        />
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
