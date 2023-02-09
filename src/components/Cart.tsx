import {
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   DrawerHeader,
   DrawerBody,
   useDisclosure,
   Button,
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
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader></DrawerHeader>
               <DrawerBody>
                  <CardItems userItems={userItems} />
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </>
   );
}

export default Cart;
