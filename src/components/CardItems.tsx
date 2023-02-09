import React, { useState } from "react";
import {
   Card,
   CardBody,
   Stack,
   Heading,
   Divider,
   CardFooter,
   ButtonGroup,
   Button,
   Image,
   Text,
   Box,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";

const CardItems = ({ userItems }: any) => {
   return (
      <>
         {userItems?.map((e: any) => {
            const { title, price, quantity, image } = e;
            return (
               <>
                  <Box my={"10px"}>
                     <Heading>Your Cart:</Heading>
                  </Box>
                  <Card
                     width={"100%"}
                     display={"flex"}
                     alignItems="center"
                     //  justifyContent={"space-around"}
                     direction={{ base: "column", sm: "row" }}
                     overflow="hidden"
                     variant="outline"
                  >
                     <Image
                        marginLeft={"12px"}
                        width={"150px"}
                        height={"150px"}
                        objectFit="cover"
                        // maxW={{ base: "100px", sm: "100px" }}
                        src={`${image}`}
                        alt="Caffe Latte"
                     />

                     <Stack>
                        <CardBody>
                           <Heading size="sm">{title}</Heading>
                        </CardBody>

                        <CardFooter>
                           <Box fontSize="2xl">
                              <Box as="span" color={"gray.600"} fontSize="lg">
                                 £
                              </Box>
                              {price}
                           </Box>
                           <Button
                              mx={"10px"}
                              variant="ghost"
                              colorScheme="red"
                           >
                              <BsTrash />
                           </Button>
                        </CardFooter>
                     </Stack>
                  </Card>
               </>
            );
         })}
      </>
   );
};

export default CardItems;
