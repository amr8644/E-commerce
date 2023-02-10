import {
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   DrawerHeader,
   DrawerBody,
   useDisclosure,
   Button,
   Heading,
   DrawerFooter,
   useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import CardItems from "./CardItems";

function Cart({ userItems }: any) {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <Button onClick={onOpen} marginRight={"20px"}>
            <BsCart2 />
         </Button>
         <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
            <Heading>Your Cart:</Heading>
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader></DrawerHeader>
               <DrawerBody>
                  <CardItems userItems={userItems} />
               </DrawerBody>
            </DrawerContent>
            <DrawerFooter>
               <Button
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                     transform: "translateY(2px)",
                     boxShadow: "lg",
                  }}
               >
                  Check out
               </Button>
            </DrawerFooter>
         </Drawer>
      </>
   );
}

export default Cart;
